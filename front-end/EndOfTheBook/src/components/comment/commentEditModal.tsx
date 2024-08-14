import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const CommentEditModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // כאן נוסיף את הלוגיקה לשמירת התגובה הערוכה
    if (!content || rating === null) {
      setError('Please provide both content and rating.');
      return;
    }

    console.log('Saving comment', { content, rating });
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Edit Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-comment-modal-title"
        aria-describedby="edit-comment-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="edit-comment-modal-title" variant="h6" component="h2">
            Edit Comment
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Comment"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setError('');
            }}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            label="Rating"
            type="number"
            value={rating ?? ''}
            onChange={(e) => {
              setRating(Number(e.target.value));
              setError('');
            }}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CommentEditModal;
