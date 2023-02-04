import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        // id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="current-password"
      />
      <TextField
        // id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </Box>

    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
  );
};

export default LoginForm;
