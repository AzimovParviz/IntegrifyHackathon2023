import { Request, Response } from "express";
import User from "../models/User";
import { userRole } from "../types";

const validation = (id: any, fullName?: string, role?: userRole): string => {
	const errors = [];

	if(!id) {
		errors.push("Id is required.");
	}
	if(!fullName) {
		errors.push("fullName is required.");
	}
	if(!role) {
		errors.push("Role is required.");
	}

	return errors.join(" ");
};

export const deleteUser = (req: Request, res: Response) => {
	const { id } = req.params;

	User.findByIdAndDelete(id, function(err: any) {
		if(err) {
			res.send(err);
		} else {
			res.json({
				deleted: true,
			});
		}
	});
};

export const updateUserInfo = (req: Request, res: Response) => {
	const { id } = req.params;
	const { fullName, role, email, assignedTask } = req.body;

	const errMsg = validation(id, fullName, role);

	if(errMsg) {
		res.json({
			error: errMsg
		}).end();
	}

	const userEmail = email ?? "";
	const userTasks = Array.isArray(assignedTask) ? assignedTask : [];

	User.findByIdAndUpdate(id, 
		{
			fullName,
			role, 
			userEmail,
			userTasks
		},
		function(err: any, user: any) {
			if(err) {
				res.send(err);
			} else {
				res.json({
					updated: true,
					user
				});
			}
		});
};

export const createNewUser = (req: Request, res: Response) => {
	const { fullName, role, email } = req.body;

	const errMsg = validation(1, fullName, role);

	if(errMsg) {
		res.json({
			error: errMsg
		}).end();
	}

	const userEmail = email ?? "";

	User.create({
		fullName, 
		role,
		userEmail,
		assignedTask: []
	}, function(err: any, user: any) {
		if(err) {
			res.send(err);
		} else {
			res.json({
				created: true,
				user
			});
		}
	});
};

export const getUser = (req: Request, res: Response) => {
	const { id } = req.params;

	User.findById(id, function(err: any, user: any) {
		if (err) {
			res.send(err);
		} else {
			res.send(user);  
		}
	});
};

export const getListOfUsers = (_req: Request, res: Response) => {
	User.find({}, function(err: any, users: any) {
		if (err) {
			res.send(err);
		} else {
			res.send(users);  
		}
	});
};