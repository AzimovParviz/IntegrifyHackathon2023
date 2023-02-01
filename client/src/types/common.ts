export interface Common {
    id: string,
    creationDate?: Date,
    updatedDate?: Date,
    name: string,
    _id?: string,
    _v?: string
}

export interface Category extends Common {
    description?: string,
    tasks?: Task[],
    users?: string[],
    status?: "active" | "inactive" | "disabled",
}

export interface User extends Common {
    username: string,
    email: string,
    role: Role,
    team?: string,
    status?: "active" | "inactive" | "disabled",
    taskAsigned?: string[],
}

export interface Task extends Common {
    color?: string,
    description?: string,
    comments?: Comment[],
    attachments?: Attachment[],
    asignee?: string[], //User.id[]
    status?: Category
    dueDate?: Date
}

export interface Project extends Common {
    category?: Category[],
    status: "active" | "inactive" | "disabled",
}

export interface Role extends Common{
    description?: string
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