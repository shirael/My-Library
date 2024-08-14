// קומפוננטה ליצירת תגובה חדשה.

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Rating } from '@mui/material';
import { addComment } from '../../services/comment.service';
import { useNavigate, useParams } from 'react-router-dom';


const CommentForm: React.FC = () => {
  // const { user } = useContext(UserContext);
  const [userId, setUserId] = useState<number | null>(null);
  const [chapterId, setChapterId] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (!content || rating === null || userId !== null) {
    //   setError('Please provide both content and rating.');
    //   return;
    // }
    console.log({ userId, rating, content, chapterId });
    if(userId !== null && rating !== null && content && chapterId) {
      try {
        const newComment = await addComment({userId, rating, content, chapterId});
        //console.log('Comment created successfully:', newComment);
        setSuccess('Comment created successfully');
        setContent('');
        setUserId(null);
        setRating(null);
      //   setTimeout(() => {
      //     navigate(`/chapterList/${chapterId}`); // שנה את הנתיב לדף הרצוי
      // }, 2000);
      } catch (error) {
        if(axios.isAxiosError(error) && error.response?.status === 400){
          setError(error.response.data);
        } else {
          setError('Failed to submit comment');
          console.error('Error submitting comment:', error);
        }
      }
    }
  }
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      }}
    >
      <Typography variant="h5" component="h3" textAlign="center">
        Add Comment
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Comment"
          value={content}
          onChange={e => setContent(e.target.value)}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        />
        <Box mb={2}>
        <TextField
          autoComplete='given-userId'
          label="UserId"
          name="userId"
          variant="outlined"
          fullWidth
          type="number"
          value={userId !== null ? userId : ''}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </Box>
      <Box mb={2}>
        <TextField
          autoComplete='given-chapterId'
          label="ChapterId"
          name="chapterId"
          variant="outlined"
          fullWidth
          type="number"
          value={chapterId !== null ? chapterId : ''}
          onChange={(e) => setChapterId(Number(e.target.value))}
        />
      </Box>
      <Box mb={2}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CommentForm;
