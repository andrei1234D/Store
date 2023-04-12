import '../style/Login.css';

import React, { useState, useEffect } from 'react';

// MUI imports
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

// Internal imports
import { useNavigate } from 'react-router-dom';

//Axios
import axios from 'axios';

const MARGIN_BOTTOM = { marginBottom: '5%' };

const FORM_FIELDS = ['username', 'password'];
const INITIAL_STATE = {
  username: '',
  password: '',
};
let usernameArray = [];
let passwordArray = [];
export default function Register() {
  const navigate = useNavigate();
  //error handlers
  const [form, setForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);
  //snackbar
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/users',
    }).then((res) => {
      res.data.forEach((item) => usernameArray.push(item.username));
      res.data.forEach((item) => passwordArray.push(item.password));
    });
  }, []);

  const validateSubmit = () => {
    const errors = {};

    FORM_FIELDS.forEach((field) => {
      if (form[field] === '') {
        errors[field] = 'This field can not be empty !';
      }
    });

    setError(errors);
  };

  //handle snackbar close
  const handleClose = () => {
    setOpen(false);
  };

  //on button press
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(INITIAL_STATE);

    validateSubmit();

    for (let i = 0; i <= 9; i++) {
      if (form.username === usernameArray[i])
        localStorage.setItem('username', form.username);
      if (form.password === passwordArray[i])
        localStorage.setItem('password', form.password);
    }

    if (Object.keys(error).length === 0) {
      if (
        form.username === localStorage.getItem('username') &&
        form.password === localStorage.getItem('password')
      ) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/search');
        window.location.reload(true);
      } else {
        setOpen(true);
      }
    }
  };

  return (
    <div>
      <div className="centered">
        <form className="layout" onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              id="filled-error-helper-text"
              label="Username"
              helperText={error.username}
              variant="filled"
              color="secondary"
              size="small"
              error={error.username}
            />
            <TextField
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              id="filled-error-helper-text"
              label="Password"
              helperText={error.password}
              variant="filled"
              color="secondary"
              size="small"
              error={error.password}
              type="password"
            />
          </Box>
          <div className="centered" style={MARGIN_BOTTOM}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                ':hover': {
                  bgcolor: 'var(--button_hover)',
                  color: 'var(--button_hover_text)',
                },
                width: '100px',
                backgroundColor: 'var(--button_background_color)',
              }}
            >
              Login
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              message="Wrong credentials"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
