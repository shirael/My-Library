import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Rating } from '@mui/material';
import { set } from 'react-hook-form';
import { addChapter } from '../../services/chapter.service';
import { setUser } from '../../redux/auth/auth.slice';
import { useNavigate } from 'react-router-dom';

const CreateChapterForm: React.FC = () => {
  const [bookId, setBookId] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [contentChapter, setContentChapter] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bookId !== null && userId !== null && contentChapter ) {

        try {
            const newChapter = await addChapter({
              bookId, userId, contentChapter,
              comments: undefined
            });
            console.log('Chapter created successfully:', newChapter);
            setSuccess('Chapter created successfully');
            setUserId(null);
            setBookId(null);
            setContentChapter('');
            setTimeout(() => {
              navigate(`/bookDetails/${bookId}`); // שנה את הנתיב לדף הרצוי
          }, 2000);
              setError(null);
        } catch (error) {
            if(axios.isAxiosError(error) && error.response?.status === 400) {
              console.error('Error creating chapter:', error);
              setError('Error creating chapter');
            } else {
              setError('Failed to submit comment');
              console.error('Error submitting chapter:', error);
            }
        }
    } 
    //else {
    //     setError('All fields are required');
    //     setSuccess(null);
    // }
    // setError('');
}; 


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        Create Chapter
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">{success}</Typography>}
      <Box mb={2}>
        <TextField
          label="BookId"
          variant="outlined"
          fullWidth
          type="number"
          value={bookId !== null ? bookId : ''}
          onChange={(e) => setBookId(Number(e.target.value))}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="UserId"
          variant="outlined"
          fullWidth
          type="number"
          value={userId !== null ? userId : ''}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="ContentChapter"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={contentChapter}
          onChange={(e) => setContentChapter(e.target.value)}
        />
      </Box>
      
      <Button type="submit" variant="contained" color="primary">
        Create Chapter
      </Button>
    </Box>
  );

}
export default CreateChapterForm;
