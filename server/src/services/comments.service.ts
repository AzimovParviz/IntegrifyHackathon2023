import { Request, Response } from "express";
import Comment from "../models/Comment";
import User from "../models/User";
import Task from "../models/Task";

export const getAllCommentsFromTask = (req: Request, res: Response) => {
	const { id } = req.params;
    
	const errMsg = validation(id);

	if(errMsg) {
		res.json({
			error: errMsg
		}).end();
	}

	Comment.find({task: Number(id)}, (err: any, comments: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(comments);
		}
	});
};

export const addCommentToTask = (req: Request, res: Response) => {
	const { author, task, content } = req.body;

	const errorsMsg = validation(1, author, task, content);

	if(errorsMsg) {
		res.json({
			error: errorsMsg
		}).end();
	}

	const taskContent = content ?? "";

	Comment.create({
		task,
		taskContent,
		author
	}, function (err: any, comment: any) {
		if (err) {
			res.send(err);
		}

		res.send(comment);
	});
};

export const updateCommentFromTask = (req: Request, res: Response) => {
	const { id } = req.params;
	const { content } = req.body;

	const errMsg = validation(id, undefined, undefined, content);

	if(errMsg) {
		res.json({
			error: errMsg
		}).end();
	}

	Comment.findByIdAndUpdate(
		Number(id),
		{
			content
		},
		(err: any, comment: any) => {
			if (err) {
				res.send(err);
			} else {
				res.json({
					updated: true,
					comment,
				});
			}
		}
	);
};

export const deleteCommentFromTask = (req: Request, res: Response) => {
	const { id } = req.params;

	Comment.deleteOne(
		{_id: Number(id)},
		(err: any) => {
			if (err) {
				res.send(err);
			} else {
				res.json({
					deleted: true
				});
			}
		}
	);
};

const validation =(id: any, authorId?: number, taskId?: number, content?: string): string => { 
	const errors: string[] = [];

	if(authorId && (!User.findById(authorId))) {
		errors.push("User is not found.");
	}
	if(taskId && (!Task.findById(taskId))) {
		errors.push("Task is not found.");
	}
	if(!id) {
		errors.push("Id is required.");
	}
	if(!content) {
		errors.push(
			"Content is the only thing that can be changed and it is a required."
		);
	}

	return errors.join(" ");
};