import { projectStatus } from "../components/navbar/CreatePrject"

export interface Common {
    id: string,
    creationDate?: Date,
    updatedDate?: Date,
    name: string,
}

export interface Category extends Common {
    _id: string,
    description: string,
    tasks: Task[],
    users: User[],
    status: "active" | "inactive" | "disabled",
}

export interface User extends Common {
    username: string,
    email: string,
    role: Role,
    team: string,
    status: "active" | "inactive" | "disabled",
    taskAsigned: Task[],
}

export interface Task extends Common {
    color: string,
    description: string,
    comments: Comment[],
    attachments: Attachment[],
    asignee: number[], //User.id[]
    status: Category
    dueDate: Date
}

export interface Project extends Common {
    _id: { id: string; token: string }
    categories: Category[],
    creatingDate: string,
    status: projectStatus
}

export interface Role extends Common{
    description: string
}

export interface Comment {
    id: string,
    authorID: string, //User.id
    taskID: string, //Task.id
    content: string,
}

export interface Attachment extends Common {
    filepath: string,
    category: "image" | "audio" | "video" | "document" | "file",
    attachedTo: string //Task.id
}