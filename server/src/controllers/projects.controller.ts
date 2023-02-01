import { Request, Response, NextFunction } from "express";
import projectService from "../services/project.service";
import Project from "../models/Project";
import { BadRequestError } from "../helpers/apiError";

// POST /projects
export const createProject = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, categories, status, creationDate } = req.body;

		const project = new Project({
			name,
			categories,
			status,
			creationDate,
		});

		await projectService.create(project);
    
		res.send(project);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// PUT /projects/:projectId
export const updateProject = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const update = req.body;
		const projectId = req.params.projectId;
		const updatedProject = await projectService.update(projectId, update);
		res.json(updatedProject);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// DELETE /projects/:projectId
export const deleteProject = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await projectService.deleteProject(req.params.projectId);
		res.status(204).end();
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /projects/:projectId
export const findById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await projectService.findById(req.params.projectId));
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /projects
export const findAll = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await projectService.findAll());
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};
