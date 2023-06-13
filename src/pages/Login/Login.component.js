import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.styles.scss';
import { Button, Box, Typography } from '@mui/material';
import CustomizedInputs from '../../common/formControl';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('aneri@gmail.com');
  const [password, setPassword] = useState('Aneri@123');
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ email: '', password: '' });
  const expectedEmail = 'aneri@gmail.com';
  const expectedPassword = 'Aneri@123';
  const validate = () => {
    let isValid = true;
    let temp = { ...errorMessage };
    // Email validation
    if (email !== expectedEmail) {
      setErrors(true);
      isValid = false;
      temp.email = 'Please enter aneri@gmail.com';
      // setErrors('Please enter aneri@gmail.com');
    }

    // Password validation
    if (password !== expectedPassword) {
      setErrors(true);
      isValid = false;
      temp.password = 'Please enter Aneri@123 as password';
      // isValid = false;
      // setErrors('Please enter Aneri@123 as password');
    } 
    if (!isValid) {
      setErrorMessage({
        ...temp,
      });
      return;
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
          <Typography component='h4' variant='h4' sx={{ mb: 2 }}>
            Login to your account
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
            errorValue={errors}
            errorMessage={errorMessage.email}
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
            errorValue={errors}
            errorMessage={errorMessage.password}
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
