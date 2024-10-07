import asyncHandler from "express-async-handler";
import { MoviesData } from "../data/MovieData.js";
import Movie from "../models/movie.model.js";

// **************************** PUBLIC CONTROLLERS ******************************
export const importMovie = asyncHandler(async (req, res) => {
    try {
        await Movie.deleteMany();
        const movies = await Movie.insertMany(MoviesData);
        res.status(201).json(movies);
    } catch (error) {
        console.log("Error during importing movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const getMovies = asyncHandler(async (req, res) => {
    try {
        //filter movies by category, time , language, rate, year and search
        const { category, time, language, rate, year, search } = req.query;
        let query = {
            ...(category && { category }),
            ...(time && { time }),
            ...(language && { language }),
            ...(rate && { rate }),
            ...(year && { year }),
            ...(search && {
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { category: { $regex: search, $options: "i" } },
                    { language: { $regex: search, $options: "i" } },
                    { $expr: { $regexMatch: { input: { $toString: "$year" }, regex: search, options: "i" } } }
                ]
            })
        }
        const page = Number(req.query.pageNumber) || 1;
        const limit = 2;
        const skip = (page - 1) * limit;
        const count = await Movie.countDocuments(query);
        const movies = await Movie.find(query).limit(limit).skip(skip);
        res.status(200).json({
            movies,
            page,
            pages: Math.ceil(count / limit),
            totalMovies: count
        });
    } catch (error) {
        console.log("Error during getting all movies: " + error.message);
        res.status(400).json({ message: error.message });
    }
})
// **************************** PRIVATE CONTROLLERS ******************************

// **************************** ADMIN CONTROLLERS ******************************