import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }} variant='div'>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
            <Link to='/appointments' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Appointment</Button></Link>
            {
              user.uid ? (
                <>
                  <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></Link>
                  <Button color="inherit" onClick={logout}>Logout</Button>
                </>
              ) : <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></Link>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
