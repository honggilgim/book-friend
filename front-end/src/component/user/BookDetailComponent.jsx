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

  loadBook = () => {
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

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      id: this.state.id,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary
    }

    ApiService.editUser(user)
      .then( res => {
        this.setState({
          message : user.lastName + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/users');
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
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

        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookDetailComponent;