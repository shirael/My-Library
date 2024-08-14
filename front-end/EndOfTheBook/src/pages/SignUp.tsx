import { useState, ChangeEvent, FormEvent } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import { UserType } from '../types/user.types';
import { addUser } from '../services/user.service';
import { useAppDispatch } from '../redux/store';
import { PATHS } from '../routes/paths';
import { setUser as setUserUser } from '../redux/user/user.slice';
import { setUser as setUserAuth } from '../redux/auth/auth.slice';
import { Navigate, useNavigate } from 'react-router-dom';
import SuccessAlert from '../components/alert/successAlert';
import ErrorAlert from '../components/alert/errorAlert';
import axios from '../utils/axios';


export default function SignUp() {

  const [user, setUser] = useState<Omit<UserType, 'userId'>>({
      name:'',
      mail: '',
      password: '',
      phone: '',
      role: 1
  });
  const [errors, setErrors] = useState<string>('');
  const [errorAlert, setErrorAlert] = useState<string>('');
  const [successAlert, setSuccessAlert] = useState<string>('');

  // const validate = () => {
  //   let isValidData = true;
  //   const temp = { ...errors };
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValid = emailPattern.test(formData.email);
  //   if (!formData.email || formData.email === '' || !isValid) {
  //     isValidData = false;
  //     temp.email = 'Email is not valid';
  //   } else temp.email = '';
  //   if (!formData.password || formData.password === '' || formData.password.length < 6) {
  //     isValidData = false;
  //     temp.password = 'Password is not valid, enter at least 6 characters';
  //   } else temp.password = '';
  //   if (!formData.fullName || formData.fullName === '') {
  //     isValidData = false;
  //     temp.fullName = 'Name is required';
  //   } else temp.fullName = '';
  //   setErrors(temp);
  //   return isValidData;
  // };
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    // בדיקת שדות חובה
    if (!user.name || !user.mail || !user.password || !user.phone || !user.role) {
        setErrors('כל השדות הם שדות חובה');
        return;
    }
    try {
        const new_user = await addUser(user);
        dispatch(setUserUser(new_user));
        dispatch(setUserAuth(new_user));
        setSuccessAlert('The user has successfully registered');
        setTimeout(() => {
            navigate('/bookList'); // שנה את הנתיב לדף הרצוי
        }, 2000);

    } catch (error) {
        setErrorAlert('There was an error in the registration, try again');
        console.error('Error sending data:', error);
    }

    // איפוס שדות הטופס ושגיאות לאחר ההצלחה
    setUser({ name: '', mail: '', password: '', phone: '', role: 1 });
    setErrors('');
  };

  return (
    <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom textAlign={'center'}>
            What a pleasure you joined us
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField
                autoComplete="given-name"
                name="name"
                fullWidth
                id="name"
                value={user.name}
                label="name"         
                onChange={handleChange}
                required
                autoFocus
              />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-mail"
                        label="mail"
                        name="mail"
                        type="mail"
                        value={user.mail}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-password"
                        label="password"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-phone"
                        label="phone"
                        name="phone"
                        type="phone"
                        value={user.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                    <Grid item xs={12}>
                       <TextField
                        autoComplete="given-role"
                        fullWidth
                        type="role"
                        name="role"
                        label="role"
                        value={user.role}
                        onChange={handleChange}
                        required
                        // error={!!errors}
                    />
                    </Grid>
                {errors && (
                    <Grid item xs={12}>
                        <Typography variant="body2" color="error">
                            {errors}
                        </Typography>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        join us
                    </Button>
                </Grid>
            </Grid>
            {successAlert && (< SuccessAlert text={successAlert} />)}
            {errorAlert && (< ErrorAlert text={errorAlert} />)}
        </form>
    </Container>
 );
}
