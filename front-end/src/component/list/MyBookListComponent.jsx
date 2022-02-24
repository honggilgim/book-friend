import React, { Component } from 'react';
import ApiService from "../../ApiService";
import { styled } from '@mui/material/styles';
import { Button, Typography, TableBody, TableCell, TableRow, Table } from '@mui/material';

class MyBookListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      books: [],
    }
  }

  componentDidMount(){
    this.reloadBookList();
  }

  reloadBookList = () => {
    ApiService.mybooklist(window.localStorage.getItem("uid"))
      .then( res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err => {
        console.log('reloadBookList() Error!', err);
      })
  }
  
  BookDetail = (ID) => {
    window.localStorage.setItem("bookID", ID);
    this.props.history.push('/book-detail');
  }

    deletebook = (ID) => { //알림 삭제
    alert("삭제 완료");
    ApiService.deleteBook(ID)
    window.location.reload();
  }

  render(){

    const imagestyle = {
      height: "15vh",  
    };

    const ProductImgStyle = styled('img')({
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute'
    });

    return(
    
    <div>

    <Typography variant="h4" style={style}>나의 책 목록</Typography>
    <hr></hr>
    {this.state.books.map((book) => (
    <Table style={{marginBottom: 30}}>
      <TableBody>
        <TableRow style={{borderStyle: 'hidden none hidden'}}>
          <TableCell style={{fontSize:'13pt', fontWeight:'bold'}} align="left" colSpan={5}>{book.btitle}</TableCell>
        </TableRow>
          <TableRow>
            <TableCell align="center" rowSpan={2} style={{ maxWidth: '10vh' }}>
              <img alt="mybook" style={imagestyle} src={book.bphoto} /> 
            </TableCell>
            <TableCell align="center">상태</TableCell>
            <TableCell align="right">{book.btag}</TableCell>
            <TableCell align="center">포인트</TableCell>
            <TableCell align="right">{book.bpoint}</TableCell>
            <TableCell align="right" rowSpan={2} style={{ maxWidth: '3vh' }}>
              <Button onClick={()=>this.deletebook(book.bid)}>삭제</Button>
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell align="center">시간</TableCell>
            <TableCell align="right">{book.btime}</TableCell>
            <TableCell align="center">장소</TableCell>
            <TableCell align="right">{book.bplace}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      ))}
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
export default MyBookListComponent;