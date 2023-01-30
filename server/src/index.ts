import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import commentsRouter from "./routers/comments.router";
import checkAuth from "./middlewares/checkAuth";

dotenv.config();

const app = express();

// Express configuration
app.set("port", process.env["PORT"]);

// Global middleware
app.use(cors({
	origin: "*"
}
));

app.use(express.json());

// Set up routers
app.use("/api/v1/comments", checkAuth, commentsRouter);


export default app;