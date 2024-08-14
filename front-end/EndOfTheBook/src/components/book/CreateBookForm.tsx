// import React, { ChangeEvent, FormEvent, useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Box, Typography, Container, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../../redux/store';
// import { BookType } from '../../types/book.types';
// import { addBook } from '../../services/book.service';
// import SuccessAlert from '../albookName: string, summary: string, userId: number | null, book: Omit<BookType, import>ErrorAlert from '../alert/errorAlert';

// const CreateBookForm: React.FC = () =>
// {

//   // const [book, setBook] = useState<Omit<BookType, 'bookId'>>({
//   //     bookName:'',
//   //     summary: '',
//   //     numChapter: 15,
//   //     userId: undefined,
//   //     deadlineDate: new Date()
//   //     //chapters:[] as ChapterType[]  // התחלתי עם רשימה ריקה של פרקים
//   //   });
//     const [errors, setErrors] = useState<string>('');
//     const [errorAlert, setErrorAlert] = useState<string>('');
//     const [successAlert, setSuccessAlert] = useState<string | null>(null);
//     const [summary, setSummary] = useState('');
//     const [userId, setUserId] = useState<number | null>(null);
//     const [numChapter, setNumChapter] = useState<number | null>(null);
//     const [bookName, setBookName] = useState('');
//     const [deadlineDate, setDeadlineDate] = useState<string>(new Date().toISOString().split('T')[0]);

//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();

//     // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     //   const { name, value } = event.target;
//     //   setBook({ ...book, [name]: value });
//     // };
  
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();

//       if (bookName && summary && numChapter && deadlineDate && userId) {
//         try {
//           const newBook = await addBook({
//             bookName,
//             summary,
//             numChapter,
//             userId,
//             deadlineDate: new Date(deadlineDate)
//           });
//           console.log('Book created successfully:', newBook);
//           setSuccessAlert('Book created successfully');
//           setBookName('');
//           setSummary('');
//           setNumChapter(15);
//           setDeadlineDate(new Date().toISOString().split('T')[0]);
//         }catch (error) {
//           if(axios.isAxiosError(error) && error.response?.status === 400) {
//             setErrorAlert('Error creating book');
//             console.error('Error creating book:', error);
//           } else {
//             setErrorAlert('All fields are required');
//             setSuccessAlert(null);
//           }
//         }
//       }
//     }
  


//   return (
//     <Container maxWidth="sm">
//       <Typography variant='h5' gutterBottom textAlign={'center'}>
//         Hello author!
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete='given-bookName'
//               name='bookName'
//               label="Book Name"
//               variant="outlined"
//               fullWidth
//               value={book.bookName}
//               required
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete='given-summary'
//               label="Summary"
//               variant="outlined"
//               fullWidth
//               multiline
//               required
//               //rows={4}
//               value={book.summary}
//               onChange={(e) => setSummary(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete='given-userId'
//               label="User ID"
//               variant="outlined"
//               fullWidth
//               type="number"
//               required
//               value={book.userId}
//               //value={userId !== null ? userId : ''}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete='given-numChapter'
//               label="Number of Chapters"
//               variant="outlined"
//               fullWidth
//               type="number"
//               value={book.numChapter}
//               required
//               //value={book.numChapter !== null ? book.numChapter : ''}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete='given-deadlineDate'
//               label="Deadline Date"
//               variant="outlined"
//               fullWidth
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               value={book.deadlineDate.toISOString().split('T')[0]}
//               //value={book.deadlineDate || ''}
//               onChange={handleChange}
//             />
//           </Grid>
//           {errors && (
//             <Grid item xs={12}>
//             <Typography variant="body2" color="error">
//               {errors}
//             </Typography>
//           </Grid>    
//           )}
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               create Book
//             </Button>
//           </Grid>
//         </Grid>
//         {successAlert && (<SuccessAlert text={successAlert} />)}
//         {errorAlert && (<ErrorAlert text={errorAlert} />)}
//       </form>
//     </Container>
    
        
//   );
// };


import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import { addBook } from '../../services/book.service';
import { useNavigate } from 'react-router-dom';

const CreateBookForm: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [summary, setSummary] = useState('');
  const [userId, setUserId] = useState<number | null>(null);
  const [numChapter, setNumChapter] = useState<number | null>(15);
  const [deadlineDate, setDeadlineDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const navigate = useNavigate();

  // הנח שה- role של המשתמש נגיש מהקונטקסט של המשתמש

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bookName && summary && numChapter && deadlineDate && userId) {
      try {
        const newBook = await addBook({
          bookName,
          summary,
          numChapter,
          userId,
          deadlineDate: new Date(deadlineDate)
        });
        console.log('Book created successfully:', newBook);
        setSuccess('Book created successfully');
        setBookName('');
        setSummary('');
        setNumChapter(15);
        setDeadlineDate(new Date().toISOString().split('T')[0]);
        // setTimeout(() => {
        //   navigate(`/books`); // שנה את הנתיב לדף הרצוי
        // }, 2000);
        setError(null);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          console.error('Error creating book:', error);
          setError('This user is not allowed to add a book');
        } else {
          setError('Failed to submit book');
          console.error('Error submitting book:', error);
        }
      }
    } else {
      setError('All fields are required');
      setSuccess(null);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        Create Book
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">{success}</Typography>}
      <Box mb={2}>
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Summary"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
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
          label="Number of Chapters"
          variant="outlined"
          fullWidth
          type="number"
          value={numChapter !== null ? numChapter : ''}
          onChange={(e) => setNumChapter(Number(e.target.value))}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Deadline Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          value={deadlineDate}
          onChange={(e) => setDeadlineDate(e.target.value)}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Create Book
      </Button>
    </Box>
  );
};

export default CreateBookForm;
