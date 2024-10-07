import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: ["true", "Please add a full name"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    image: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    likedMovies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            required: false
        }
    ]
}, {
    timestamps: true,
});
const User = mongoose.model("User", userSchema);
export default User