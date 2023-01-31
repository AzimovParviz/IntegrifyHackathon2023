import { Request, Response, NextFunction } from "express";
import taskService from "../services/task.service";
import Task from "../models/Task";
import { BadRequestError } from "../helpers/apiError";

// POST /tasks
export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      description,
      comments,
      attachments,
      usersAssigned,
      status,
      startingDate,
      dueDate,
    } = req.body;

    const task = new Task({
      name,
      description,
      comments,
      attachments,
      usersAssigned,
      status,
      startingDate,
      dueDate,
    });

    await taskService.create(task);

    res.send(task);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

// PUT /tasks/:taskId
export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body;
    const taskId = req.params.taskId;
    const updatedTask = await taskService.update(taskId, update);
    res.json(updatedTask);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

// DELETE /tasks/:taskId
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await taskService.deleteTask(req.params.taskId);
    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

// GET /tasks/:taskId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await taskService.findById(req.params.taskId));
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};

// GET /tasks
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await taskService.findAll());
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};
