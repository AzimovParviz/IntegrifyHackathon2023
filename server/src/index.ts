import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import checkAuth from "./middlewares/checkAuth";

import commentsRouter from "./routers/comments.router";
import usersRouter from "./routers/users.router";

dotenv.config({ path: '.env' })

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
app.use("/api/v1/users", checkAuth, usersRouter);

export default app;