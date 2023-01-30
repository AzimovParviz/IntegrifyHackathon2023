import Comment from "../models/Comment";

class CommentsController {
    constructor() {
    //binding context because want to use async functions
    this.getAllCommentsFromTask = this.getAllCommentsFromTask.bind(this);
    this.addCommentToTask = this.addCommentToTask.bind(this);
    this.updateCommentFromTask = this.updateCommentFromTask.bind(this);
    this.deleteCommentFromTask = this.deleteCommentFromTask.bind(this);
    }
    async getAllCommentsFromTask() {

    }

    async addCommentToTask() {

    }

    async updateCommentFromTask() {

    }

    async deleteCommentFromTask() {

    }
}

export const comments = new CommentsController();