import { ThunkAction, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from './auth/auth.slice'
import userReducer from './user/user.slice'
import bookReducer from './book/book.slice'
import chapterReducer from './chapter/chapter.slice'
import commentReducer from './comment/comment.slice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user:userReducer,
        book:bookReducer,
        chapter:chapterReducer,
        comment:commentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
    Promise<ReturnType> | ReturnType,
    RootState,
    unknown,
    UnknownAction
>
