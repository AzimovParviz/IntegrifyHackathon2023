import { Request, Response, NextFunction } from "express";

import Category from "../models/Category";
import { BadRequestError } from "../helpers/apiError";
import categoryService from "../services/category.service";

// POST /categorys
export const createCategory = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, description, numberOfTasks, usersAssigned, status } =
      req.body;
    
		const category = new Category({
			name,
			description,
			numberOfTasks,
			usersAssigned,
			status,
		});

		await categoryService.create(category);

		res.json(category);

	} catch (error) {
		console.log(error);
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// PUT /categorys/:categoryId
export const updateCategory = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const update = req.body;
		const categoryId = req.params.categoryId;
		const updatedCategory = await categoryService.update(categoryId, update);

		res.json(updatedCategory);

	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// DELETE /categorys/:categoryId
export const deleteCategory = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await categoryService.deleteCategory(req.params.categoryId);

		res.status(204).end();
    
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /categorys/:categoryId
export const findById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await categoryService.findById(req.params.categoryId));
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /categorys
export const findAll = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await categoryService.findAll());
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};
