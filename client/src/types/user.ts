import { User } from "./common";

export interface UserReducer {
    currentUser: User | undefined,
    allUser: User[]
}