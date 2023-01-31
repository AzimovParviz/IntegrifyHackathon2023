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
app.use(express.urlencoded());

// Set up routers
app.use("/api/v1/comments", checkAuth, commentsRouter);
app.use("/api/v1/login", checkAuth, loginRouter);
app.use("/api/v1/users", checkAuth, usersRouter);
app.use("/api/v1/attachments", checkAuth, attacmentsRouter);
app.use("/api/v1/projects", checkAuth, projectsRouter);
app.use("/api/v1/tasks", checkAuth, tasksRouter);
app.use("/api/v1/categories", checkAuth, categoriesRouter);

export default app;
