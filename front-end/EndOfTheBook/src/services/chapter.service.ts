import axios from '../utils/axios';
import { ChapterType } from '../types/chapter.types';


export const getChapter = async () => {
    const response = await axios.get('/Chapter')
    const chapter = await response.data
    return chapter
}
export const getChapterById = async (id:Number) => {
    const response = await axios.get(`/Chapter/${id}`)
    const chapter = response.data
    return chapter
}
export const getChapterByBookId = async (bookId: number) => {
    const response = await axios.get(`/Chapter/ByBook/${bookId}`);
    const chapters = response.data;
    return chapters;
}

export const addChapter = async (chapter:Omit<ChapterType, 'chapter'>) => {
    const response = await axios.post('/Chapter', chapter)
    const newChapter = response.data
    return newChapter
}

export const updateChapter = async (chapter: ChapterType, id: number) => {
    const response = await axios.put(`/Chapter/${id}`, chapter)
    const updatedChapter = response.data
    return updatedChapter
}

export const deleteChapter = async (id: number) => {
    const response = await axios.delete(`/Chapter/${id}`)
    return response
}
