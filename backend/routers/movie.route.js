import express from "express"
import { admin, protect } from "../middleware/auth.js";
import {
    getMovies,
    importMovie
} from "../controllers/movie.controller.js";

const router = express.Router()
// **************************** PUBLIC ROUTES ******************************
router.post("/", importMovie)
router.get("/", getMovies)
// **************************** PRIVATE ROUTES ******************************

// **************************** ADMIN ROUTES ******************************
export default router