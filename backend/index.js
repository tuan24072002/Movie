import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.middleware.js";
import userRouter from "./routers/user.route.js";
import movieRouter from "./routers/movie.route.js";
import categoryRouter from "./routers/category.route.js";
import uploadRouter from "./controllers/upload.controller.js";
import path from "path";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send(req.headers?.authorization?.split(" ")[1] || "Hello world");
// });
const __dirname = path.resolve();

app.use("/backend/uploads", express.static(`${__dirname}/backend/uploads`))
app.use("/api/users", userRouter)
app.use("/api/movies", movieRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/uploads", uploadRouter)
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    });
}

connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}
http://localhost:${port}`);
})