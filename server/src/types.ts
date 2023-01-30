export enum categoryStatus {
  Inactive = "inactive",
  Active = "active",
  Finished = "finished",
}

export enum taskStatus {
  ToDo = "todo",
  InProgress = "inProgress",
  Review = "review",
  Testing = "testing",
  Finished = "finished",
}

export enum attachmentCategory {
  Image = "image",
  Document = "document",
  Audio = "audio",
  Video = "video",
  File = "file",
}

type ParsedTokenPayload = {
  email: string
    email_verified: string
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
}

export interface ParsedToken {
  payload: ParsedTokenPayload
}

export interface VerifiedCallback {
  (error: any, user?: any, info?: any): void
}

type UserStatus = {};

type Team = {};

export type User = {
  id: number, 
  username: string,
  fullname: string,
  email: string,
  team: Team,
  status: UserStatus,
  assignedTasks: number[]
}

export type Comment = {
  id: number,
  author: number,
  task: number,
  content: string
}