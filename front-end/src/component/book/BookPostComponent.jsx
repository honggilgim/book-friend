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





class BookPostComponent extends Component{

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

  
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
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
        <Typography variant="h4" style={style}>Book Post</Typography>
        <Button variant="contained" color="primary" onClick={this.mypage}> mypage </Button>
        <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={this.mypage}> post </Button>
        </Grid>
        <div><TextField id="outlined-basic" label="제목" variant="outlined" /></div>
        <br></br>
        <div><TextField id="outlined-basic" label="포인트" variant="outlined" /></div>
        <br></br>
        <div><TextField id="outlined-basic" label="시간" variant="outlined" /></div>
        <br></br>
        <div><TextField id="outlined-basic" label="장소" variant="outlined" /></div>
        <br></br>
        <div><img src="https://i.pinimg.com/originals/49/f7/25/49f725a9f2b62ea80603f3fe51289735.jpg" style={imagestyle} /></div>
        <div>
        <br></br>
        
          <div>{profile_preview}</div>
          <br></br>
          <input type = 'file'
            accept = 'image/jpg,impge/png,image/jpeg,image/gif'
            name='profile_img'
            onChange={this.handleFileOnChange}>
          </input>  
          
        </div>
        
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookPostComponent;