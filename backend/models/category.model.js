import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Category = mongoose.model("Category", categoriesSchema);
export default Category;