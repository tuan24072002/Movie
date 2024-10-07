import express from "express"
import { admin, protect } from "../middleware/auth.js";
import {
    createMovie,
    createMovieReview,
    deleteAllMovies,
    deleteMovie,
    getMovieById,
    getMovies,
    getRandomMovie,
    getTopRatedMovies,
    importMovie,
    updateMovie
} from "../controllers/movie.controller.js";

const router = express.Router()
// **************************** PUBLIC ROUTES ******************************
router.post("/import", importMovie)
router.get("/", getMovies)
router.get("/:id", getMovieById)
router.get("/rated/top", getTopRatedMovies)
router.get("/random/all", getRandomMovie)
// **************************** PRIVATE ROUTES ******************************
router.post("/reviews/:id", protect, createMovieReview)
// **************************** ADMIN ROUTES ******************************
router.put("/:id", protect, admin, updateMovie)
router.delete("/:id", protect, admin, deleteMovie)
router.delete("/", protect, admin, deleteAllMovies)
router.post("/", protect, admin, createMovie)
export default router