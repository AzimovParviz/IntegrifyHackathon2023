import Project, {ProjectDocument} from "../models/Project";
import { NotFoundError } from "../helpers/apiError";

const create = async (project: ProjectDocument): Promise<ProjectDocument> => {
	return project.save()
}

const findById = async (projectId: string): Promise<ProjectDocument> => {
	const foundProject = await Project.findById(projectId)

	if(!foundProject) {
		throw new NotFoundError(`Project ${projectId} not found`)
	}

	return foundProject
}

const findAll = async (): Promise<ProjectDocument[]> => {
  return Project.find().sort({ lastName: 1 })
}

const update = async (
  projectId: string,
  update: Partial<ProjectDocument>
): Promise<ProjectDocument | null> => {
  const foundProject = await Project.findByIdAndUpdate(projectId, update, {
    new: true,
  })

  if (!foundProject) {
    throw new NotFoundError(`Project ${projectId} not found`)
  }

  return foundProject
}

const deleteProject = async (
  projectId: string
): Promise<ProjectDocument | null> => {
  const foundProject = Project.findByIdAndDelete(projectId)

  if (!foundProject) {
    throw new NotFoundError(`Project ${projectId} not found`)
  }

  return foundProject
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteProject,
}

