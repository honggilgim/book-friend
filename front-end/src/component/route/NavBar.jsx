import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const NavBar = () => {
  const bg = {
    left: 0,
    right: 0,
    top: 0,
    zIndex: -2,
    background: '#2E3B55'
  }
  return(
    <div>
      <AppBar position="static" style={bg}>
        <Toolbar>
          <Typography variant="h6" style={style}>
          <Link href="/" underline="none" color="white">
            Book friend
          </Link>

          </Typography>
          <Link href="/mypage" underline="none" color="white">
            MYPAGE
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const style = {
  flexGrow: 1,
  color : 'white',
  underline:'none'

}

export default NavBar;