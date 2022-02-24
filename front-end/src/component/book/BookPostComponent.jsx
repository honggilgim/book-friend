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
      formdata: ''
    }

    this.state = {
      formData: ''
    };

    this.state = {
      books: '',
      setBooks: ''
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


  handleUpload = (event) => //책 db에 저장
  {
    event.preventDefault();


    // window.localStorage.setItem("uid",6);//임시 테스트용
    //유저 id 정보 불러오기
    console.log("this.state.uid: " + this.state.uid);
    this.setState({

      uid: window.localStorage.getItem("uid")

    });
    console.log("this.state.uid: " + this.state.uid);
    /*Add image*/

    let maxbid;

    ApiService.searchBid()
      .then(res => {
        let maxBook = res.data;
        console.log(maxBook);
        maxbid = maxBook.bid;
        console.log(maxBook.bid);
        maxbid++;
        console.log(maxbid);
        let temp = maxbid + ".jpg";
        console.log(temp);

        saveAs(this.state.file, temp);

        temp = "img/" + temp;

        this.setState({
          bphoto: temp
        });
      })
      .catch(err => {
        console.log('findBid()', err);
      });


    /*Add book*/

    console.log("bphoto:"+this.state.bphoto);

    let book = {
      btitle: this.state.btitle,
      bphoto: "img/10.jpg",
      btag: "대출가능",
      uid: this.state.uid,
      bpoint: this.state.bpoint,
      bplace: this.state.bplace,
      btime: this.state.btime
    }
    console.log("book: " + book);
    console.log('bphoto' + this.state.bphoto);

    ApiService.addBook(book)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('handleUpload() addBook에러', err);
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

<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>

  <div><TextField ref="postname" id="outlined-basic" label="제목" variant="outlined" onChange={this.handlePostnameChange} /></div>
  <br></br>
  <div><TextField ref="point" id="outlined-basic" label="포인트" variant="outlined" onChange={this.handlePointChange} /></div>
  <br></br>
  <div><TextField ref="time" id="outlined-basic" label="시간" variant="outlined" onChange={this.handleTimeChange} /></div>
  <br></br>
  <div><TextField ref="place" id="outlined-basic" label="장소" variant="outlined" onChange={this.handlePlaceChange} /></div>
  <br></br>
  </Grid>

  <br></br>

  {profile_preview}


  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>
    <br></br>
  
  <input type='file'
    accept='image/jpg'
    name='profile_img'
    onChange={this.handleFileOnChange}>
  </input>
  <br></br>
  
  <br></br>
  <Button variant="contained" color="primary" onClick={this.handleUpload}> Upload </Button>
  </Grid>



</div>



    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookPostComponent;