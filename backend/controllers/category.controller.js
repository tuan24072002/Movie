import asyncHandler from "express-async-handler";
import Category from "../models/category.model.js";

// **************************** PUBLIC CONTROLLERS ******************************
export const getCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log("Error during getting categories: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

// **************************** PRIVATE CONTROLLERS ******************************
// EMPTY

// **************************** ADMIN CONTROLLERS ******************************
export const createCategory = asyncHandler(async (req, res) => {
    const { title } = req.body;
    try {
        const category = new Category({ title })
        const createdCategory = await category.save();
        res.status(201).json(createdCategory);
    } catch (error) {
        console.log("Error during creating category: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        const category = await Category.findById(id);
        if (category) {
            category.title = title || category.title;
            const updatedCategory = await category.save();
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.log("Error during updating category: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (category) {
            await category.deleteOne();
            res.status(200).json({ message: "Category deleted" });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        console.log("Error during deleting category: " + error.message);
        res.status(400).json({ message: error.message });
    }
})