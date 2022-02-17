import React, { Component } from 'react';
import ApiService from "../../ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';

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

    alert("대출 요청 완료");

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
    alert("찜 등록 완료");
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
    

    const imagestyle = {
      weight: "40vh",  
    };

    return(
      <div>
        <Typography variant="h4" style={style}>Book Detail</Typography>
        <hr></hr><br></br>
        <Table >
          <TableBody>
              <TableRow>
                <TableCell align="center" rowSpan={6} style={{ maxWidth: 180 }}>
                  <img alt="mybook" style={imagestyle} src={this.state.bphoto} /> 
                </TableCell>
                <TableCell align="center">이름</TableCell>
                <TableCell align="right">{this.state.btitle}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">상태</TableCell>
                <TableCell align="right">{this.state.btag}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">대여인</TableCell>
                <TableCell align="right">{this.state.uid}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">포인트</TableCell>
                <TableCell align="right">{this.state.bpoint}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">시간</TableCell>
                <TableCell align="right">{this.state.btime}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell align="center">장소</TableCell>
                <TableCell align="right">{this.state.bplace}</TableCell>
              </TableRow>
          </TableBody>
        </Table>

      <Button variant="contained" color="primary" onClick={this.saveRequest} >대출 신청</Button><br></br>
      <Button variant="contained" color="primary" onClick={this.saveLike}>찜 하기</Button>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 60,
  marginBottom: 25
}

export default BookDetailComponent;