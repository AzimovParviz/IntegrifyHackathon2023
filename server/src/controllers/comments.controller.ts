import { Request, Response } from "express";
import { idGen } from "../helpers/idGen";
import Comment from "../models/Comment";
import User from "../models/User";
import Task from "../models/Task";

class CommentsController {
	private idGen: () => number;

	constructor(idGen: () => number) {
		//binding context because want to use async functions
		this.getAllCommentsFromTask = this.getAllCommentsFromTask.bind(this);
		this.addCommentToTask = this.addCommentToTask.bind(this);
		this.updateCommentFromTask = this.updateCommentFromTask.bind(this);
		this.deleteCommentFromTask = this.deleteCommentFromTask.bind(this);
		this.idGen = idGen;
	}

	async getAllCommentsFromTask(req: Request, res: Response) {
		const { id } = req.query;
        
		const errMsg = this.validation(Number(id));

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
	}

	async addCommentToTask(req: Request, res: Response) {
		const { author, task, content } = req.body;

		const errorsMsg = this.validation(0, author, task);

		if(errorsMsg) {
			res.json({
				error: errorsMsg
			}).end();
		}

		const taskContent = content ?? "";

		const newComment = Comment.create({
			id: this.idGen(),
			task,
			taskContent,
			author
		}, function (err) {
			if (err) {
				console.error(err);
			}
			res.status(408);
		});


		res.send(newComment);
	}

	async updateCommentFromTask(req: Request, res: Response) {
		const { id } = req.query;
		const { content } = req.body;

		const errMsg = this.validation(Number(id), undefined, undefined, content);

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
	}

	async deleteCommentFromTask(req: Request, res: Response) {
		const { id } = req.query;

		const errMsg = this.validation(Number(id));

		if(errMsg) {
			res.json({
				error: errMsg
			}).end();
		}

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
	}

	validation(id: any, authorId?: number, taskId?: number, content?: string): string { 
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
	}
}

const generateId = idGen();

export const comments = new CommentsController(generateId);