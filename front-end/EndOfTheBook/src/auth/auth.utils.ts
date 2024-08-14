import { PATHS } from "../routes/paths"
import { AuthUserTyoe } from "../types/auth.types"
import { UserType } from "../types/user.types"
import axios from "../utils/axios"

export const setSession = (user: AuthUserTyoe) => {
    localStorage.setItem('user', JSON.stringify(user))
    axios.defaults.headers.common.Authorization = `Bearer ${user.token}`
}

export const getSession = (): AuthUserTyoe | null => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    return user
}

export function jwtDecode(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join('')
    );

    return JSON.parse(jsonPayload);
}

export const isValidToken = (token: string) => {
    if (!token) {
        return false;
    }

    //בודק את ההצפנה
    const decoded = jwtDecode(token);

    //עדיין לא עבר זמנו של הטוקן
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};
