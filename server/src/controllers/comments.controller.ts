import { Request, Response } from "express";
import Comment from "../models/Comment";

class CommentsController {
    constructor() {
    //binding context because want to use async functions
    this.getAllCommentsFromTask = this.getAllCommentsFromTask.bind(this);
    this.addCommentToTask = this.addCommentToTask.bind(this);
    this.updateCommentFromTask = this.updateCommentFromTask.bind(this);
    this.deleteCommentFromTask = this.deleteCommentFromTask.bind(this);
    }

    async getAllCommentsFromTask(req: Request, res: Response) {
        const { id } = req.query;

        console.log(Comment.find({task: id}));
    }

    async addCommentToTask(req: Request, res: Response) {

    }

    async updateCommentFromTask(req: Request, res: Response) {

    }

    async deleteCommentFromTask(req: Request, res: Response) {

    }
}

export const comments = new CommentsController();