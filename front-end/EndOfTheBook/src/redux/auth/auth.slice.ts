import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserType } from "../../types/user.types"
import { InitialStateAuth, AuthStateType } from "../../types/auth.types";

const initialState: InitialStateAuth = {
    user: null,
    //האם יש הרשאת גישה
    isAuthenticated: false,
    //האם הוא מאותחל
    isInitialized: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthStateType, action: PayloadAction<UserType>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        setInitialized: (state: AuthStateType) => {
            state.isInitialized = true
        },
        logOut: (state: AuthStateType) => {
            state.user=null;
            state.isAuthenticated=false;
            state.isInitialized=false;
            localStorage.clear();
        },
    }
})

export const { setUser, setInitialized, logOut} = authSlice.actions

export default authSlice.reducer

