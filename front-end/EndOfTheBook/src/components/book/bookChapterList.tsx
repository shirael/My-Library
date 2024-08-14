// BookChaptersList.tsx   - רשימת פרקים של ספר

import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

interface Chapter {
  id: number;
  title: string;
}

const BookChaptersList: React.FC = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [open, setOpen] = useState(false); // האם המודל פתוח או לא
  const [newChapterTitle, setNewChapterTitle] = useState('');

  const handleAddChapter = () => {
    const newChapter: Chapter = {
      id: chapters.length + 1,
      title: newChapterTitle,
    };
    setChapters([...chapters, newChapter]);
    setOpen(false);  // לאחר הוספת הפרק, סגור את המודל
    setNewChapterTitle('');  // איפוס הערך של הטקסט בשדה הקלט
  };

  const handleEditChapter = (chapterId: number) => {
    // פתיחת המודל לעריכת הפרק
    setOpen(true); 
    console.log(`Editing chapter with ID ${chapterId}`);
  };

  const handleClose = () => {
    setOpen(false); // סגירת המודל
  };

  return (
    <div>
      <h2>Book Chapters List</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Chapter</Button>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            {chapter.title}
            <button onClick={() => handleEditChapter(chapter.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Chapter</DialogTitle>
        <DialogContent>
        <TextField
            label="Chapter Title"
            variant="outlined"
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookChaptersList;
