import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@mui/material/Link';

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
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