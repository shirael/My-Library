import axios from '../utils/axios';
import { CommentType } from '../types/comment.types';


export const getComment = async () => {
    const response = await axios.get('/Comment')
    const comment = await response.data
    return comment
}
export const getCommentById = async (commentId:Number) => {
    const response = await axios.get(`/Comment/${commentId}`)
    const comment = response.data
    return comment
}

export const getCommentByChapterId = async (chapterId: number) => {
    const response = await axios.get(`Comment/ByChapter/${chapterId}`);
    const comments = response.data;
    return comments;
}

export const addComment = async (comment:Omit<CommentType, 'comment'>) => {
    const response = await axios.post('/Comment', comment)
    const newComment = response.data
    return newComment
}

export const updateComment = async (comment: CommentType, id: number) => {
    const response = await axios.put(`/Comment/${id}`, comment)
    const updatedComment = response.data
    return updatedComment
}

export const deleteComment = async (id: number) => {
    const response = await axios.delete(`/Comment/${id}`)
    return response
}
