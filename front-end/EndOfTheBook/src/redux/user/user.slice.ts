import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.types";

const usersSlice = createSlice({
    name: 'user',
    initialState: null as UserType | null,
    reducers: {
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state = action.payload;
        }
    },
})

export const { setUser } = usersSlice.actions

export default usersSlice.reducer
