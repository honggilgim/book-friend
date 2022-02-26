import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ACCESS_TOKEN, isLogined } from '../constants';

const Click = () => {
  localStorage.clear();
}

const NavBar = () => {
  const bg = {
    left: 0,
    right: 0,
    top: 0,
    zIndex: -2,
    background: '#2E3B55'
  }



  
   if(localStorage.getItem(isLogined)){
     
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
          <Button style={{color : 'white'}} onClick={() => {localStorage.clear();
          window.location.reload();
          }}> LOGOUT </Button>
        </Toolbar>
      </AppBar>
    </div>
    );

   }
   else
   {
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
                  
            <Link href="/signup" underline="none" color="white">
            &nbsp;&nbsp;SIGN-IN  
            </Link>

            <Link href="/login" underline="none" color="white">
            &nbsp;&nbsp;LOGIN
            </Link>
          </Toolbar>
        </AppBar>
      </div>
     );
   }

}

const style = {
  flexGrow: 1,
  color : 'white',
  underline:'none'

}

export default NavBar;