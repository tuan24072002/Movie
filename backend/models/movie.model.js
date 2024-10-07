import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true
});

const movieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    titleImage: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required: false
    },
    rate: {
        type: Number,
        required: true
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [reviewSchema],
    casts: [
        {
            name: { type: String, required: true },
            image: { type: String, required: true },
        }
    ]
}, {
    timestamps: true
});
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
