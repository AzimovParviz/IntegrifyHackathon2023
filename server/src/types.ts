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

export enum projectStatus {
  Active = "active",
  Inactive = "inactive",
  Bugfixing = "bugfixing"
}

export enum userRole {
  ADMIN = "admin",
  MANAGER = "manager",
  USER = "user",
}

type ParsedTokenPayload = {
  email: string;
  email_verified: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
};

export interface ParsedToken {
  payload: ParsedTokenPayload;
}

export interface VerifiedCallback {
  (error: any, user?: any, info?: any): void;
}
