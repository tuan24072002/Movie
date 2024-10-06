import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}
http://localhost:${port}`);
})