import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
        // id="outlined-name-input"
        label="Username"
        type="text"
        name="name"
      />
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
        Signup
      </Button>
    </Box>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};

export default RegisterForm;
