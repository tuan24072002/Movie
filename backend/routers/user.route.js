import express from "express";
import {
    changePassword,
    deleteAllLikedMovie,
    deleteUser,
    deleteUserProfile,
    getLikedMovies,
    getUsers,
    loginUser,
    registerUser,
    switchLikedMovie,
    updateUserProfile,
} from "../controllers/user.controller.js";
import { admin, protect } from "../middleware/auth.js";

const router = express.Router();
// **************************** PUBLIC ROUTES ******************************
router.post("/register", registerUser);
router.post("/login", loginUser);
// **************************** PRIVATE ROUTES ******************************
router.put("/", protect, updateUserProfile);
router.delete("/", protect, deleteUserProfile);
router.put("/change-password", protect, changePassword);
router.get("/liked", protect, getLikedMovies);
router.post("/switch-liked", protect, switchLikedMovie);
router.delete("/delete-all-liked", protect, deleteAllLikedMovie);
// **************************** ADMIN ROUTES ******************************
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);
export default router;