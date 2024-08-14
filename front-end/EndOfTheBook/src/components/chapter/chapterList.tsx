import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Box, Typography, Card, CardContent, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ChapterType } from '../../types/chapter.types';
import { getChapter, getChapterByBookId } from '../../services/chapter.service';
import { CommentType } from '../../types/comment.types';
import { getCommentByChapterId } from '../../services/comment.service';
import calculateTopRatedChapters from '../helpers';

// interface ChapterWithRating extends ChapterType {
//   ratingCount: number;
// }


const ChaptersList: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [chapters, setChapters] = useState<ChapterType[]>([]);
  const [topRatedChapters, setTopRatedChapters] = useState<ChapterType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<ChapterType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [openComments, setOpenComments] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chaptersData = await getChapterByBookId(Number(bookId));
        // const filterdChapters = chaptersData.filter((chapter: { bookId: string | undefined; }) => chapter.bookId === bookId);
        setChapters(chaptersData);
        
      } catch (error) {
        console.error('Error fetching chapters:', error);
        setError('Failed to fetch chapters. Please try again.');
      }
    }
    fetchChapters();
  }, [bookId]);


  const fetchComments = async (chapterId: number) => {
    try {
      const chaptersData = await getCommentByChapterId(chapterId);
      setComments(chaptersData);
    } catch(error) {
      console.error('Error fetching chapters:', error);
      setError('Failed to fetch comments. Please try again.')
    }
  };

  const handleClickOpen = (chapter: ChapterType) => {
    setSelectedChapter(chapter);
    setOpen(true);
  };
  const handleClickOpenComments = async (chapterId: number | undefined) => {
    if( chapterId !== undefined) {
      await fetchComments(chapterId);
      setOpenComments(true);
    } else {
      console.error('CHapter ID is undefined');
      setError('Failed to fetch comments. Chapter ID is undefined.')
    }
  }

  const handleClose = () => {
    setOpen(false);
    setSelectedChapter(null);
  };
  const handleCloseComments = () => {
    setOpenComments(false);
    setComments([]);
};

  
  const handleAddComment = (chapterId: number | undefined) => {
    navigate(`/CommentAddForm/${chapterId}`);
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ mt: 3, mx: 'auto', maxWidth: 600}}>
      <Typography variant="h6" gutterBottom>
        Chapter List
      </Typography>
      <List>
        {chapters.map((chapter) => (
          <Card key={chapter.chapterId} sx={{ mb: 2}} onClick={() =>handleClickOpen(chapter)}>
            <CardContent>
              <Typography variant="body1">
                {chapter.contentChapter}
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={() => handleAddComment(chapter.chapterId)}>Add a comment</Button>
            <Button size="small" onClick={() => handleClickOpenComments(chapter.chapterId)}>View Comments</Button>
            {/* <Typography variant="body2" color="textSecondary">
                Five star Comments: {calculateTopRatedChapters(chapters).length}
            </Typography> */}
            </CardActions>
          </Card>
        ))}
      </List>
      {selectedChapter && (
        <Dialog open={open} onClose={handleClickOpen} maxWidth="sm" fullWidth>
          <DialogTitle>The Chapter</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {selectedChapter.contentChapter}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    {openComments && (
        <Dialog open={openComments} onClose={handleCloseComments} maxWidth="sm" fullWidth>
          <DialogTitle>Comments</DialogTitle>
          <DialogContent>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <DialogContentText key={comment.commentId}>
                  <strong>User {comment.userId}:</strong> {comment.content} (Rating: {comment.rating})
                </DialogContentText>
              ))
            ) : (
              <DialogContentText>No comments available</DialogContentText>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseComments} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ChaptersList;
