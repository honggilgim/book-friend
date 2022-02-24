import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class BookEditComponent extends Component{

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

  componentDidMount(){
    this.loadBook();
  }

  loadBook = () => { //도서 정보 불러오기
    ApiService.fetchBookByID(window.localStorage.getItem("bookID"))
      .then( res => {
        let book = res.data;
        this.setState({
          bid: book.bid,
          btitle: book.btitle,
          bphoto: book.bphoto,
          btag: book.btag,
          uid: book.uid,
          bpoint: book.bpoint,
          bplace: book.bplace,
          btime: book.btime
        })
      })
      .catch(err => {
        console.log('loadBook() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.bid] : e.target.value
    });
  }

  saveBook = (e) => {
    e.preventDefault();

    let book = {
      bid: this.state.bid,
      btitle: this.state.btitle,
      bphoto: this.state.bphoto,
      btag: this.state.btag,
      uid: this.state.uid,
      bpoint: this.state.bpoint,
      bpalce: this.state.bpalce,
      btime: this.state.btime
    }

    ApiService.editBook(book)
      .then( res => {
        this.setState({
          message : btitle.lastName + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/mybooklist');
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Edit User</Typography>
        <form>
            <TextField type="text" name="username" readOnly={true} 
fullWidth margin="normal" value={this.state.username} />

            <TextField placeholder="Edit your first name" name="firstName" 
fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange} />

            <TextField placeholder="Edit your last name" name="lastName" 
fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange} />

            <TextField type="number" placeholder="Edit your age" name="age" 
fullWidth margin="normal" value={this.state.age} onChange={this.onChange} />

            <TextField type="number" placeholder="Edit your salary" name="salary" 
fullWidth margin="normal" value={this.state.salary} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default EditUserComponent;