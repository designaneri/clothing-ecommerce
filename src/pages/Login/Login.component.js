import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.styles.scss';
import { Button, Box, Typography } from '@mui/material';
import CustomizedInputs from '../../common/formControl';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('aneri@gmail.com');
  const [password, setPassword] = useState('Aneri@123');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const expectedEmail = 'aneri@gmail.com';
  const expectedPassword = 'Aneri@123';
  const validate = () => {
    let isValid = true;

    // Email validation
    if (email !== expectedEmail) {
      isValid = false;
      setErrors('Please enter aneri@gmail.com');
    }

    // Password validation
    if (password !== expectedPassword) {
      isValid = false;
      setErrors('Please enter Aneri@123 as password');
    } 

    return isValid;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate form data
    const isValid = validate();

    if (isValid) {
      if (email === expectedEmail && password === expectedPassword) {
        // Successful login, redirect to the homepage
        navigate('/');
      }
    }
  };

  return (
    <div className='login-page'>
      <div>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src='img/logo.png' className='logo-outer' />
        </Box>

        <form onSubmit={handleLogin}>
          <Typography component='h5' variant='h5' sx={{ mb: 2 }}>
            Login Page
          </Typography>
          <CustomizedInputs
            margin='normal'
            displayLabel='Email'
            name='Email'
            id='Email'
            inputType='email'
            inputProps={{ maxLength: 90 }}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            errorValue={errors.email}
            errorMessage={errors.email}
          />
          <CustomizedInputs
            margin='normal'
            displayLabel='Password'
            name='Password'
            id='Password'
            inputType='password'
            inputProps={{ maxLength: 90 }}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            errorValue={errors.password}
            errorMessage={errors.password}
          />
          <Button
            color='black'
            disableElevation
            size='large'
            sx={{ mt: 3 }}
            variant='contained'
            type='submit'
            fullWidth
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
