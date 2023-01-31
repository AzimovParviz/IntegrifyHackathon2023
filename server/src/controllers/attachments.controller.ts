import { Request, Response, NextFunction } from "express";

import Attachment from "../models/Attachment";
import { BadRequestError } from "../helpers/apiError";
import attachmentService from "../services/attachment.service";

// POST /attachments
export const createAttachment = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, categories, status, creationDate } = req.body;

		const attachment = new Attachment({
			name,
			categories,
			status,
			creationDate,
		});

		await attachmentService.create(attachment);
    
		res.send(attachment);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// PUT /attachments/:attachmentId
export const updateAttachment = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const update = req.body;
		const attachmentId = req.params.attachmentId;
		const updatedAttachment = await attachmentService.update(attachmentId, update);
		res.json(updatedAttachment);
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// DELETE /attachments/:attachmentId
export const deleteAttachment = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await attachmentService.deleteAttachment(req.params.attachmentId);
		res.status(204).end();
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /attachments/:attachmentId
export const findById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await attachmentService.findById(req.params.attachmentId));
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};

// GET /attachments
export const findAll = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.json(await attachmentService.findAll());
	} catch (error) {
		if (error instanceof Error && error.name == "ValidationError") {
			next(new BadRequestError("Invalid Request", 400, error));
		} else {
			next(error);
		}
	}
};
