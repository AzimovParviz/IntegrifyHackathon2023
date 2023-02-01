

import { User } from "./common";

export interface UserReducer {
    currentUser: User | undefined,
    allUser: User[]
}

export interface UserAuth {
    token: string,
    user: User
}