import React, { useState, useEffect } from 'react';
import { getBookById } from '../../services/book.service';
import { BookType } from '../../types/book.types';
import { Box, Button, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';


const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(Number(bookId));
        setBook(bookData);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Failed to fetch book details. Please try again');
      }
    };

    fetchBook();
  }, [bookId]);

  const handleAddChapter = () => {

    console.log('Navigate to create chapter form page');
    navigate('/CreateChapterForm'); 
  };

  const handleChapterList = () => {
    console.log('Navigate to view the attempts of the book chapters');
    navigate(`/ChapterList/${bookId}`);
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!book) {
    return <Typography>Loading...</Typography>;
  }

  const currentDate = new Date();
  const deadlineDate = new Date(book.deadlineDate);
  const isDateOver = currentDate > deadlineDate;

  return (
    <Box sx={{ mt: 3, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom>
        {book.bookName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {book.summary}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Number of Chapters: {book.numChapter}
      </Typography>
      {/* <Typography variant="body2" color="textSecondary" gutterBottom>
        Comments: {book.comments}
      </Typography> */}
      <Typography variant="body2" color="textSecondary" gutterBottom>
        User ID: {book.userId}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Deadline Date: {new Date(book.deadlineDate).toLocaleDateString()}
      </Typography>
      {isDateOver ? (
        <Typography variant="body2" color="error" gutterBottom>
            The date is passed
        </Typography>
      ) : (
        <Button variant="contained" onClick={handleAddChapter}>
            Add the final chapter
        </Button>
      )}
      <Box mt={2}>
          <Button variant="outlined" onClick={handleChapterList}>
            Attempts of the last chapters
          </Button>
      </Box>
    </Box>
  );
};

export default BookDetails;
