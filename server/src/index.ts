import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"; 

import commentsRouter from "./routers/comments.router";
import usersRouter from "./routers/users.router";
import attacmentsRouter from "./routers/attachment.router";
import projectsRouter from "./routers/projects.router";
import tasksRouter from "./routers/tasks.router";
import categoriesRouter from "./routers/category.router";
import loginRouter from "./routers/login.router";

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
app.use(express.urlencoded());

// Set up routers
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/attachments", attacmentsRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/categories", categoriesRouter);

export default app;
