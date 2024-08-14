import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CommentType } from '../../types/comment.types';
import calculateTopRatedChapters from '../helpers';
import { ChapterType } from '../../types/chapter.types';


const CommentList: React.FC = () => {
  const { chapterId} = useParams<{chapterId: string}>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [chapters, setChapters] = useState<ChapterType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchComments();
  }, [chapterId]);
  
  useEffect(() => {
    const topRatedChapters = calculateTopRatedChapters(chapters);
    console.log('Top rated chapters:', topRatedChapters);
  }, [comments]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://localhost:7269/api/Comments/chapter/${chapterId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      setError('Error fetching comments');
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Comments
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.commentId} sx={{ borderBottom: '1px solid #ddd' }}>
              <ListItemText 
                primary={`User ${comment.userId}: ${comment.content}`} 
                secondary={`Rating: ${comment.rating}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CommentList;
