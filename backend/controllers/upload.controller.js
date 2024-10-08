import express from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import storage from "../config/firebaseStorage.js";

const uploadRouter = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
});

uploadRouter.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        if (file) {
            const fileExtension = path.extname(file.originalname); // .jpg
            const fileName = uuidv4() + fileExtension; // a52e003e-73f8-48fc-848a-67b0e876bb72.jpg

            const blob = storage.file(fileName);
            const blobStream = blob.createWriteStream({
                resumable: false,
                metadata: {
                    contentType: file.mimetype
                }
            });

            blobStream.on("error", (error) => {
                console.log("Error during uploading file: " + error.message);
                res.status(400).json({ message: error.message });
            });

            blobStream.on("finish", () => {
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
                res.status(201).json(publicUrl);
            });

            blobStream.end(file.buffer);
        } else {
            res.status(400);
            throw new Error("File not found");
        }
    } catch (error) {
        console.log("Error during uploading file: " + error.message);
        res.status(400).json({ message: error.message });
    }
});

export default uploadRouter