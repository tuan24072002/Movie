import express from "express"
import { admin, protect } from "../middleware/auth.js";
import {
    createCategory,
    deleteCategory,
    getCategories,
    updateCategory
} from "../controllers/category.controller.js";
const router = express.Router()
// **************************** PUBLIC ROUTES ******************************
router.get("/", getCategories)
// **************************** PRIVATE ROUTES ******************************
// EMPTY
// **************************** ADMIN ROUTES ******************************
router.post("/", protect, admin, createCategory)
router.put("/:id", protect, admin, updateCategory)
router.delete("/:id", protect, admin, deleteCategory)
export default router