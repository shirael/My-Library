import { UserType } from "./user.types";

export type AuthUserTyoe = {
    user: UserType,
    token: string
}

export type LoginUserType = {
    mail: string,
    password: string
}

export type AuthStateType = {
    user: UserType | null,
    isAuthenticated: boolean,
    isInitialized: boolean
}

export type InitialStateAuth = {
    user: UserType | null,
    isAuthenticated: boolean,
    isInitialized: boolean
}