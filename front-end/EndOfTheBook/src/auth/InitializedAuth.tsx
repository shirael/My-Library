import { ReactNode, useEffect } from "react"
import { useAppDispatch } from "../redux/store"
import { AuthUserTyoe } from '../types/auth.types'
import { getSession, isValidToken } from "./auth.utils"
import { setInitialized, setUser, setUser as setUserAuth } from "../redux/auth/auth.slice"
import axios from "../utils/axios"


type Props = {
    children: ReactNode
}

export default function InitializeAuth({ children }: Props) {

    const dispatch = useAppDispatch();

    useEffect(() => {

        const authUser: AuthUserTyoe | null = getSession();
        // בדיקה האם הטוקן שווה לנתוני היוזר
        if (authUser?.token && isValidToken(authUser.token)) {
            
            dispatch(setUserAuth(authUser.user))
            dispatch(setUser(authUser.user))
            // כל קראית שרת שצריכה אבטחה
            axios.defaults.headers.common.Authorization = `Bearer ${authUser.token}`
        }
        dispatch(setInitialized())
    }, [])

    return <>{children}</>
}