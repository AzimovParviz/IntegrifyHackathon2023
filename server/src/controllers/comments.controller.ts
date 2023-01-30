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
        console.log(req, res);
        console.log(Comment.find({task: id}));
    }

    async addCommentToTask(req: Request, res: Response) {
        console.log(req, res);
    }

    async updateCommentFromTask(req: Request, res: Response) {
        console.log(req, res);
    }

    async deleteCommentFromTask(req: Request, res: Response) {
        console.log(req, res);
    }
}

export const comments = new CommentsController();