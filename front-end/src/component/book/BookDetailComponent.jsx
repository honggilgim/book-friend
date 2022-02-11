import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class BookDetailComponent extends Component{

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

  saveRequest = (e) => { //도서 대출 요청 db 저장
    e.preventDefault();

    let request = {
      guid:this.state.uid,
      tuid:1, //로그인 중인 user id
      bid:this.state.bid
    }

    ApiService.addrequest(request)
    .then( res => {
        
        this.props.history.push('/book-detail');
    })
    .catch( err => {
      console.log('saveRequest() 에러', err);
    });
  }

  saveLike = (e) => { //찜하기 db 저장
    e.preventDefault();

    let like = {
      uid:1, //로그인 중인 user id
      bid:this.state.bid
    }

    ApiService.addLike(like)
    .then( res => {
        
        this.props.history.push('/book-detail');
    })
    .catch( err => {
      console.log('saveLike() 에러', err);
    });
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Book Detail</Typography>
        <Table>
          <TableBody>
              <TableRow>
                <TableCell align="right" rowSpan={6}>{this.state.bphoto}</TableCell>
                <TableCell >{this.state.btitle}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">{this.state.btag}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">{this.state.uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">{this.state.bpoint}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">{this.state.btime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">{this.state.bplace}</TableCell>
              </TableRow>
          </TableBody>
        </Table>

      <Button variant="contained" color="primary" onClick={this.saveRequest}>대출 신청</Button>
      <Button variant="contained" color="primary" onClick={this.saveLike}>찜 하기</Button>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookDetailComponent;