import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';


import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";

import Icon from "@material-ui/core/Icon";
import PageviewIcon from "@material-ui/icons/Pageview";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";

import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

// Search
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";

//Tabs
import { withStyles } from "@material-ui/core/styles";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class AskListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      bid: '',
      btitle: '',
      bphoto: '',
      btag: '',
      uid: '',
      bpoint: '',
      bplace: '',
      btime: ''
    }
  
  }
  
  render(){
    let profile_preview = null;
    if(this.state.file !== ''){
      profile_preview = <img className='profile_preview' src={this.state.previewURL }></img>
    }
    const imagestyle = {
      height: "500px",  
            width: "500px",
                };
    
    return(
      <div>
        <Typography variant="h4" style={style}>요청 목록</Typography>
        <Button variant="contained" color="primary" onClick={this.mypage}> mypage </Button>
        <Grid container justifyContent="flex-end">
        </Grid>
        <Table>
          <TableBody>
              <TableRow>
                <TableCell align="left" >{this.state.btitle}책 제목</TableCell>
                <TableCell align="center">{this.state.btag}유저 </TableCell>
                <TableCell align="right" ><Checkbox  /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" >{this.state.btitle}책 제목</TableCell>
                <TableCell align="center">{this.state.btag}유저 </TableCell>
                <TableCell align="right" ><Checkbox  /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" >{this.state.btitle}책 제목</TableCell>
                <TableCell align="center">{this.state.btag}유저</TableCell>
                <TableCell align="right" ><Checkbox  /></TableCell>
              </TableRow>
          </TableBody>
        </Table>
        <br></br>
        <Grid container justifyContent="center">
          <Button variant="contained" color="primary" onClick={this.mypage}> 수락 </Button>
        </Grid>
        <br></br>
        
        </div> 
      
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default AskListComponent;