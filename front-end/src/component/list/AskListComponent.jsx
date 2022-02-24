import React, { Component } from 'react';
import ApiService from "../../ApiService";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AskListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      requests: [],
    }
  }

  componentDidMount(){
    this.reloadRequestList();
  }

  reloadRequestList = () => {
    ApiService.requestlist(window.localStorage.getItem("uid"))
      .then( res => {
        this.setState({
          requests: res.data
        })
      })
      .catch(err => {
        console.log('reloadAlarmList() Error!', err);
      })
  }
  
  deleterequest = (ID) => { //알림 삭제
    alert("삭제 완료");
    ApiService.deleteRequest(ID)
    window.location.reload();
  }

  saveBorrow = (request) => { //도서 대출 승인 db 저장
    alert("요청 승인 완료");
    let borrow = {
      guid:request.guid,
      tuid:request.tuid, 
      bid:request.bid
    }
    ApiService.insertBorrow(borrow)
    ApiService.deleteRequest(request.rqid)

    let alarm = { //'-- 대여 승락알림
      uid:request.tuid, //요청을 받을 회원
      bid:request.bid, //해당되는 도서 이름
      content:request.btitle+' 대여가 승락되었습니다.'
    }
    ApiService.insertAlarm(alarm)
    .then( res => {
        this.props.history.push('/ask-list');
    })
    .catch( err => {
      console.log('saveRequest() 에러', err);
    });
    window.location.reload();
  }

  BookDetail = (ID) => {
    window.localStorage.setItem("bookID", ID);
    this.props.history.push('/book-detail');
  }

  render(){

    const imagestyle = {
      weight: "40vh",  
    };
    return(
    <div>
    <Typography variant="h4" style={style}>대여 요청</Typography>
    <hr></hr><br></br>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="middle" style={{ minWidth: 180 }}>책 이름 내용</TableCell>
          <TableCell style={{ minWidth: 110 }}>요청인</TableCell>
          <TableCell align="left"></TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
          <TableBody>
          {this.state.requests.map((request) => (
              <TableRow>
                <TableCell align="middle" onClick={()=>this.BookDetail(request.uid)}>{request.btitle}</TableCell>
                <TableCell>{request.username}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined" onClick={()=>this.deleterequest(request.rqid)}>삭제</Button>
                </TableCell>
                <TableCell align="left">
                  <Button  variant="outlined" onClick={()=>this.saveBorrow(request)}>수락</Button>
                </TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
        
        
       
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

export default AskListComponent;