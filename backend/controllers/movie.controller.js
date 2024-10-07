import asyncHandler from "express-async-handler";
import Movie from "../models/movie.model.js";
import { MoviesData } from "../data/MovieData.js";

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
                    { desc: { $regex: search, $options: "i" } },
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

export const getMovieById = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        console.log("Error during getting movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const getTopRatedMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.find().sort({ rate: -1 });
        res.status(200).json(movies);
    } catch (error) {
        console.log("Error during getting top movies: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const getRandomMovie = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 8 } }]);
        res.status(200).json(movies);
    } catch (error) {
        console.log("Error during getting random movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

// **************************** PRIVATE CONTROLLERS ******************************
export const createMovieReview = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment } = req.body;
        const movie = await Movie.findById(id);
        if (movie) {
            const alreadyReviewed = movie.reviews.find(r => r.userId.toString() === req.user._id.toString());
            if (alreadyReviewed) {
                res.status(400);
                throw new Error("You already reviewed this movie");
            }
            const review = {
                userId: req.user._id,
                userName: req.user.fullName,
                userImage: req.user.image || "/backend/uploads/logo.jpg",
                rating: Number(rating),
                comment
            }
            movie.reviews.push(review);
            movie.numOfReviews = movie.reviews.length;
            movie.rate = movie.reviews.reduce((acc, item) => item.rating + acc, 0) / movie.reviews.length;
            await movie.save();
            res.status(201).json({ message: "Review added" });
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        console.log("Error during creating movie review: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

// **************************** ADMIN CONTROLLERS ******************************
export const updateMovie = asyncHandler(async (req, res) => {
    const {
        name,
        desc,
        titleImage,
        image,
        category,
        language,
        year,
        time,
        video,
        rate,
        numOfReviews,
        casts
    } = req.body;
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (movie) {
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;
            movie.titleImage = titleImage || movie.titleImage;
            movie.image = image || movie.image;
            movie.category = category || movie.category;
            movie.language = language || movie.language;
            movie.year = year || movie.year;
            movie.time = time || movie.time;
            movie.video = video || movie.video;
            movie.casts = casts || movie.casts;
            movie.rate = rate || movie.rate;
            movie.numOfReviews = numOfReviews || movie.numOfReviews;
            const updatedMovie = await movie.save();
            res.status(201).json(updatedMovie);
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        console.log("Error during updating movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteMovie = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (movie) {
            await movie.deleteOne();
            res.status(201).json({ message: "Movie deleted" });
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        console.log("Error during deleting movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const deleteAllMovies = asyncHandler(async (req, res) => {
    try {
        await Movie.deleteMany();
        res.status(201).json({ message: "All movies deleted" });
    } catch (error) {
        console.log("Error during deleting all movies: " + error.message);
        res.status(400).json({ message: error.message });
    }
})

export const createMovie = asyncHandler(async (req, res) => {
    const {
        name,
        desc,
        titleImage,
        image,
        category,
        language,
        year,
        time,
        video,
        rate,
        numOfReviews,
        casts
    } = req.body;
    try {
        const movie = new Movie({
            userId: req.user._id,
            name,
            desc,
            titleImage,
            image,
            category,
            language,
            year,
            time,
            video,
            rate,
            numOfReviews,
            casts
        });
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        console.log("Error during creating movie: " + error.message);
        res.status(400).json({ message: error.message });
    }
})