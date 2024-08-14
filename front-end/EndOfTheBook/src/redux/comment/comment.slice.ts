import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {CommentType} from "../../types/comment.types"

const commentSlice = createSlice({
    name: 'comment',
    initialState:[],
    reducers: {
        setComments: (state:CommentType[], action: PayloadAction<CommentType[]>) => {
            state.length=0
            state.push(...action.payload)
        }
    }
})

export const { setComments } = commentSlice.actions

export default commentSlice.reducer
