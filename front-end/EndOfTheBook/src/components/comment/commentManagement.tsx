import React from 'react';
import axios from 'axios';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CommentManagementProps {
  comments: Comment[];
  onDelete: (commentId: number) => void;
}

interface Comment {
  id: number;
  content: string;
}

const CommentManagement: React.FC<CommentManagementProps> = ({ comments, onDelete }) => {
  const handleDelete = (commentId: number) => {
    axios.delete(`/api/comments/${commentId}`)
      .then(() => {
        onDelete(commentId);
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" component="h3" gutterBottom>
        Manage Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText primary={comment.content} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(comment.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommentManagement;
