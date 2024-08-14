import axios from '../utils/axios';
import { BookType } from '../types/book.types';


export const getBook = async () => {
    const response = await axios.get('/Book')
    const book = await response.data
    return book
}
export const getBookById = async (id:Number) => {
    const response = await axios.get(`/Book/${id}`)
    const book = response.data
    return book
}

export const addBook = async (book:Omit<BookType, 'book'>) => {
    const response = await axios.post('/Book', book)
    const newBook = response.data
    return newBook
}

export const updateBook = async (book: BookType, id: number) => {
    const response = await axios.put(`/Book/${id}`, book)
    const updatedBook = response.data
    return updatedBook
}
export const deleteBook = async (id: number) => {
    const response = await axios.delete(`/Book/${id}`)
    return response
}
