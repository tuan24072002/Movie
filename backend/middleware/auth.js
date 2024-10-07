import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}

export const protect = asyncHandler(async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.log("Error during protecting user: " + error.message);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})

export const admin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
}) 