import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';




//Card

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

//Tabs

//Download Image

import { saveAs } from 'file-saver';



class BookPostComponent extends Component {

  constructor(props) {
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
      file: '',
      previewURL: '',
    }

    this.state = {
      maxbid: 0,
      urlString:''
    }

    this.state = {
      id: '',
      username: ''
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.bid]: e.target.value
    });
  }

  handlePostnameChange = (event) => {
    this.setState({
      btitle: event.target.value
    });

  }
  handlePointChange = (event) => {
    this.setState({
      bpoint: event.target.value
    });
  }
  handleTimeChange = (event) => {
    this.setState({
      btime: event.target.value
    });
  }
  handlePlaceChange = (event) => {
    this.setState({
      bplace: event.target.value
    });
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      })
    };
    reader.readAsDataURL(file);
  }

  downloadImage = (event) => //사진 imageDB에 저장
  {
    event.preventDefault();
    /*Add image*/

    ApiService.searchBid()
      .then(res => {
        console.log("bid:"+res.data.bid);
        this.setState({
          maxbid: res.data.bid
        });
        console.log("maxbid:"+this.state.maxbid);
        let temp = res.data.bid + 1;
        
        this.setState({
         bphoto: (temp+ ".jpg")
         
        });
        window.localStorage.setItem("photo",temp+ ".jpg");//임시 테스트용
        console.log("localstorage:"+window.localStorage.getItem("photo"));
        console.log("setstate:"+this.state.bphoto);
        
      })
      .catch(err => {
        console.log('findBid()', err);
      });

      
        
      


    //유저 id 정보 불러오기


    /*Add book*/

    let book = {
      btitle: this.state.btitle,
      bphoto:"img/"+window.localStorage.getItem("photo"),
      btag: "대출가능",
      uid: window.localStorage.getItem("uid"),
      bpoint: this.state.bpoint,
      bplace: this.state.bplace,
      btime: this.state.btime
    }
    console.log("book: " + book);

    ApiService.addBook(book)


      .then(res => {
        this.props.history.push('/main');
      })
      .catch(err => {
        console.log('handleUpload() addBook에러', err);
      });


  }


  handleSearch = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      })
    };
    reader.readAsDataURL(file);
  }



  render() {
    let profile_preview = null;
    if (this.state.file !== '') {
      profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
    }
    const imagestyle = {
      height: "500px",
      width: "500px",
    };

    return (
      <div>
        <Typography variant="h4" style={style}>Book Post</Typography>

        <div><TextField ref="postname" id="outlined-basic" label="제목" variant="outlined" onChange={this.handlePostnameChange} /></div>
        <br></br>
        <div><TextField ref="point" id="outlined-basic" label="포인트" variant="outlined" onChange={this.handlePointChange} /></div>
        <br></br>
        <div><TextField ref="time" id="outlined-basic" label="시간" variant="outlined" onChange={this.handleTimeChange} /></div>
        <br></br>
        <div><TextField ref="place" id="outlined-basic" label="장소" variant="outlined" onChange={this.handlePlaceChange} /></div>
        <br></br>

        <br></br>

        <div>{profile_preview}

          <br></br>
        </div>
        <input type='file'
          accept='image/jpg'
          name='profile_img'
          onChange={this.handleFileOnChange}>
        </input>
        <br></br>
        <Button variant="contained" color="primary" onClick={this.downloadImage}> Upload </Button>
        <br></br>


      </div>


    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookPostComponent;