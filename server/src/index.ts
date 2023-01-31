import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"; 

import commentsRouter from "./routers/comments.router"
import usersRouter from "./routers/users.router"

dotenv.config();

const app = express()

// Express configuration
app.set("port", process.env["PORT"])

// Global middleware
app.use(cors({
	origin: "*"
}
))

app.use(express.json());
app.use(express.urlencoded());

// Set up routers

// ! add auth middleware later
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/users", usersRouter);

export default app