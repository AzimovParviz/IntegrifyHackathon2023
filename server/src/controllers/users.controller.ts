import { Request, Response } from "express"
import { idGen } from "../helpers/idGen"
import User from "../models/User"
import { userRole } from "../types"


class UsersController {
	private idGen: Function

	constructor(idGen: Function) {
		//binding context because want to use async functions
		this.getListOfUsers = this.getListOfUsers.bind(this)
		this.getUser = this.getUser.bind(this)
		this.createNewUser = this.createNewUser.bind(this)
		this.updateUserInfo = this.updateUserInfo.bind(this)
		this.deleteUser = this.deleteUser.bind(this)
		this.idGen = idGen
	}

	async getListOfUsers(req: Request, res: Response) {
		User.find({}, function(err: any, users: any) {
			if (err) {
				res.send(err)
			} else {
				res.send(users)  
			}
		})
	}

	async getUser(req: Request, res: Response) {
		const { id } = req.query

		const errMsg = this.validation(Number(id))

		if(errMsg) {
			res.json({
				error: errMsg
			}).end()
		}

		User.findById(id, function(err: any, user: any) {
			if (err) {
				res.send(err)
			} else {
				res.send(user)  
			}
		})
	}

	async createNewUser(req: Request, res: Response) {
		const { fullName, role, email } = req.body

		const errMsg = this.validation(0, fullName, role)

		if(errMsg) {
			res.json({
				error: errMsg
			}).end()
		}

		const userEmail = email ?? ""

		User.create({
			id: this.idGen(),
			fullName, 
			role,
			userEmail,
			assignedTask: []
		}, function(err: any, user: any) {
			if(err) {
				res.send(err)
			} else {
				res.json({
					created: true,
					user
				})
			}
		})
	}

	async updateUserInfo(req: Request, res: Response) {
		const { id } = req.query
		const { fullName, role, email, assignedTask } = req.body

		const errMsg = this.validation(id, fullName, role)

		if(errMsg) {
			res.json({
				error: errMsg
			}).end()
		}

		const userEmail = email ?? ""
		const userTasks = Array.isArray(assignedTask) ? assignedTask : []

		User.findByIdAndUpdate(id, 
			{
				fullName,
				role, 
				userEmail,
				userTasks
			},
			function(err: any, user: any) {
				if(err) {
					res.send(err)
				} else {
					res.json({
						updated: true,
						user
					})
				}
			})
	}

	async deleteUser(req: Request, res: Response) {
		const { id } = req.query

		const errMsg = this.validation(id)

		if(errMsg) {
			res.json({
				error: errMsg
			}).end()
		}

		User.findByIdAndDelete(id, function(err: any) {
			if(err) {
				res.send(err)
			} else {
				res.json({
					deleted: true,
				})
			}
		})
	}

	validation(id: any, fullName?: string, role?: userRole): string {
		const errors = []

		if(!id) {
			errors.push("Id is required.")
		}
		if(!fullName) {
			errors.push("fullName is required.")
		}
		if(!role) {
			errors.push("Role is required.")
		}

		return errors.join(" ")
	}
}

const generateId = idGen()

export const users = new UsersController(generateId)