import React, { useState } from 'react';

//MUI IMPORTS

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
//INTERNAL IMPORTS
import '../style/Account.css';

const MARGIN_BOTTOM = { marginBottom: '7%' };
export default function Account() {
  let navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  //snackbar
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  //change password button press
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentPassword === localStorage.getItem('password') &&
      newPassword !== ''
    ) {
      localStorage.setItem('password', newPassword);
      setOpen(true);
    } else {
      setOpenError(true);
    }
  };

  //handle snackbar close
  const handleClose = () => {
    setOpen(false);
    setOpenError(false);
  };

  //logout button press
  const handleLogOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
    window.location.reload(true);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleLogOut}>
          <div className="toRight">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '100px',
                backgroundColor: '#2FA4FF',
              }}
            >
              Log-out
            </Button>
          </div>
        </form>
      </div>
      <div>
        <p className="centerText">
          Change your password if you`d like to be extra safe :)
        </p>
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
                onChange={(e) => setCurrentPassword(e.target.value)}
                id="filled-error-helper-text"
                label="Current Password"
                variant="filled"
                color="secondary"
                size="small"
                type="password"
              />
              <TextField
                onChange={(e) => setNewPassword(e.target.value)}
                id="filled-error-helper-text"
                label="New Password"
                variant="filled"
                color="secondary"
                size="small"
                type="password"
              />
            </Box>
            <div className="centered" style={MARGIN_BOTTOM}>
              <Button
                variant="contained"
                type="submit"
                sx={{ width: '150px', backgroundColor: '#2FA4FF' }}
              >
                Change Password
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="password changed"
              />
              <Snackbar
                open={openError}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Could not change password"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
