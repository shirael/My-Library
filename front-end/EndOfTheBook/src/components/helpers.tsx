import React from 'react';
import { ChapterType } from '../types/chapter.types';

interface TopRatedChapter {
  chapter: ChapterType;
  ratingCount: number;
}

const calculateTopRatedChapters = (chapters: ChapterType[]): TopRatedChapter[] => {
  const topRatedChapters: TopRatedChapter[] = [];
  
  chapters.forEach(chapter => {
    if (chapter.comments && chapter.comments.length > 0) { // בדיקה האם יש תגובות לפרק
      let rating5Count = 0;
      chapter.comments.forEach((comment: { rating: number; }) => {
        if (comment.rating === 5) {
          rating5Count++;
        }
      });
      
      if (rating5Count > 0) {
        topRatedChapters.push({ chapter, ratingCount: rating5Count });
      }
    }
  });

  // Sort the topRatedChapters array based on ratingCount in descending order
  topRatedChapters.sort((a, b) => b.ratingCount - a.ratingCount);

  // Return the top three top-rated chapters
  return topRatedChapters.slice(0, 3);
};

export default calculateTopRatedChapters;
