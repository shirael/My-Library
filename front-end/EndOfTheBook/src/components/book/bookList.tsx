import React, { useState, useEffect, useCallback } from 'react';
import axios, {AxiosResponse} from 'axios';
import { List, ListItem, ListItemText, Box, Typography, debounce, TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, getBookById } from '../../services/book.service';
import { BookType } from '../../types/book.types';


const BooksList: React.FC = () => {
  // const {userId} = useParams<{ userId: string}>();
  const [books, setBooks] = useState<BookType[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBook();
        console.log('Fetched books:', booksData);
        setBooks(booksData);
        setFilteredBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to fetch books. Please try again');
      }
    }
    fetchBooks();
  },[]);

  const handleBookClick = (bookId: number | undefined) => {
    console.log(`Navigating to book details with ID: ${bookId}`);
    navigate(`/bookDetails/${bookId}`);
  };

  const handleAddNewBook = () => {
    navigate('/createBookForm');
  };

  const filterAndSortBooks = useCallback(debounce((searchTerm: string) => {
    const filtered = books.filter(book => 
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered)
  }, 300), [books]);

  return (
    <Box sx={{ mt: 3, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        Books
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField 
        fullWidth
        label="Search books..."
        variant="outlined"
        onChange={(e) => filterAndSortBooks(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddNewBook}
        sx={{ mb: 2 }}
      >
        Add New Book
      </Button>
      <List>
        {filteredBooks.map((book) => (
          <ListItem button key={book.bookId} onClick={() => handleBookClick(book.bookId)}>     
            <ListItemText primary={book.bookName} secondary={book.summary} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BooksList;
