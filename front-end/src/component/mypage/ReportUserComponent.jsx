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





class ReportUserComponent extends Component{

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

    this.state = {
      image: null
    }

    this.state = {
      file: '',
      previewURL :''
    }
  
  }

  

  onChange = (e) => {
    this.setState({
      [e.target.bid] : e.target.value
    });
  }

   
  
 
  

  render(){

    
    
    
    return(
      <div>
        <Typography variant="h4" style={style}>Report</Typography>
        <br></br>
        <Grid container justifyContent="center">
        <div><TextField id="outlined-basic" label="신고할 유저" variant="outlined" /></div>
        <br></br>
        </Grid>
        <br></br>
        <Grid container justifyContent="center">
        <div><TextField
            id="outlined-multiline-static"
            label="신고 내용"
            multiline
            rows={4}
            defaultValue="신고 내용"
        /></div>
        </Grid>
        <br></br>
        <Grid container justifyContent="center">
        <Button variant="contained" color="primary" onClick={this.mypage}> 신고 </Button>
        </Grid>
        
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default ReportUserComponent;