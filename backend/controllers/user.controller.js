import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.js";

// **************************** PUBLIC CONTROLLERS ******************************
export const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, image } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            image
        })
        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName,
                email,
                image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    } catch (error) {
        console.log("Error during registration: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        console.log("Error during login: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

// **************************** PRIVATE CONTROLLERS ******************************
export const updateUserProfile = asyncHandler(async (req, res) => {
    const { fullName, email, image } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.fullName = fullName || user.fullName;
            user.email = email || user.email;
            user.image = image || user.image;
            const updatedUser = await user.save();
            res.status(200).json({
                _id: updatedUser._id,
                fullName: updatedUser.fullName,
                email: updatedUser.email,
                image: updatedUser.image,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during updating profile: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteUserProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            if (user.isAdmin) {
                res.status(400);
                throw new Error("Can't delete admin user");
            }
            await user.deleteOne();
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during deleting profile: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            if (bcrypt.compareSync(oldPassword, user.password)) {
                const salt = bcrypt.genSaltSync(10);
                const hashPassword = bcrypt.hashSync(newPassword, salt);
                user.password = hashPassword;
                const updatedUser = await user.save();
                res.status(200).json({
                    message: "Password changed successfully",
                });
            } else {
                res.status(401);
                throw new Error("Invalid old password");
            }
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during changing password: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const getLikedMovies = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("likedMovies");
        if (user) {
            res.status(200).json(user.likedMovies);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during getting liked movies: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const switchLikedMovie = asyncHandler(async (req, res) => {
    const { movieId } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            if (typeof movieId === "string") {
                const isMovieLiked = user.likedMovies.includes(movieId);
                isMovieLiked
                    ? user.likedMovies.pull(movieId)
                    : user.likedMovies.push(movieId);
                await user.save();
                res.status(200).json(user.likedMovies);
            } else if (Array.isArray(movieId)) {
                for await (const id of movieId) {
                    const isMovieLiked = user.likedMovies.includes(id);
                    isMovieLiked
                        ? user.likedMovies.pull(id)
                        : user.likedMovies.push(id);
                }
                await user.save();
                res.status(200).json(user.likedMovies);
            }
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during adding liked movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteAllLikedMovie = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.likedMovies = [];
            await user.save();
            res.status(200).json({ message: "Your favorite movies deleted successfully" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during deleting all liked movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

// **************************** ADMIN CONTROLLERS ******************************
export const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error during getting users: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            if (user.isAdmin) {
                res.status(400);
                throw new Error("Can't delete admin user");
            }
            await user.deleteOne();
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log("Error during deleting user: " + error.message);
        res.status(400).json({ message: error.message });
    }
})