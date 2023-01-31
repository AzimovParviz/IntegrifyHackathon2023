import Task, {TaskDocument} from "../models/Task";
import {  NotFoundError } from "../helpers/apiError";

const create = async (task: TaskDocument): Promise<TaskDocument> => {
	return task.save()
}

const findById = async (taskId: string): Promise<TaskDocument> => {
	const foundTask = await Task.findById(taskId)

	if(!foundTask) {
		throw new NotFoundError(`Task ${taskId} not found`)
	}

	return foundTask
}

const findAll = async (): Promise<TaskDocument[]> => {
  return Task.find().sort({ lastName: 1 })
}

const update = async (
  taskId: string,
  update: Partial<TaskDocument>
): Promise<TaskDocument | null> => {
  const foundTask = await Task.findByIdAndUpdate(taskId, update, {
    new: true,
  })

  if (!foundTask) {
    throw new NotFoundError(`Task ${taskId} not found`)
  }

  return foundTask
}

const deleteTask = async (
  taskId: string
): Promise<TaskDocument | null> => {
  const foundTask = Task.findByIdAndDelete(taskId)

  if (!foundTask) {
    throw new NotFoundError(`Task ${taskId} not found`)
  }

  return foundTask
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteTask,
}

