import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.types";
import { BookType } from "../../types/book.types";

const booksSlice = createSlice({
    name: 'books',
    initialState:[],
    reducers: {
        setBooks: (state:BookType[], action: PayloadAction<BookType[]>) => {
            state.length=0
            state.push(...action.payload)
        }
    }
})

export const { setBooks } = booksSlice.actions

export default booksSlice.reducer
