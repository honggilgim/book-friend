import React, { Component } from 'react';
import ApiService from "../../ApiService";
import { styled } from '@mui/material/styles';
import { Button, Typography, TableBody, TableCell, TableRow, TableHead, Table } from '@mui/material';

class AlarmComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      alarms: [],
    }
  }

  componentDidMount(){
    this.reloadAlarmList();
  }

  reloadAlarmList = () => {
    ApiService.alarmlist(window.localStorage.getItem("uid"))
      .then( res => {
        this.setState({
          alarms: res.data
        })
      })
      .catch(err => {
        console.log('reloadAlarmList() Error!', err);
      })
  }
  
  deletealarm = (ID) => { //알림 삭제
    alert("삭제 완료");
    ApiService.deleteAlarm(ID)
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

    const ProductImgStyle = styled('img')({
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute'
    });

    return(
    
    <div>
    <Typography variant="h4" style={style}>알림</Typography>
    <hr></hr><br></br>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="middle">알림 내용</TableCell>
          <TableCell>시간</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
          <TableBody>
          {this.state.alarms.map((alarm) => (
              <TableRow>
                <TableCell align="middle" onClick={()=>this.BookDetail(alarm.bid)}>{alarm.content}</TableCell>
                <TableCell>{alarm.time}</TableCell>
                <TableCell align="left">
                  <Button onClick={()=>this.deletealarm(alarm.aid)}>삭제</Button>
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
export default AlarmComponent;