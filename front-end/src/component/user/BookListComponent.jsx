import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class BookListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      books: [],
      message: null
    }
  }

  componentDidMount(){
    this.reloadBookList();
  }

  reloadBookList = () => {
    ApiService.fetchBooks()
      .then( res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err => {
        console.log('reloadBookList() Error!', err);
      })
  }

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then( res => {
        this.setState({
          message: 'User Deleted Successfully.'
        });
        this.setState({
          users: this.state.books.filter( user =>
            user.id !== userID)
          });
        })
      .catch(err => {
        console.log('deleteUser() Error!', err);
      })
  }
  
  BookDetail = (ID) => {
    window.localStorage.setItem("bookID", ID);
    this.props.history.push('/book-detail');
  }

  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-user');
  }

  render(){

    return(
      <div>
        <Typography variant="h4" style={style}>Book List</Typography>
        <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">photo</TableCell>
              <TableCell align="right">tag</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.books.map( book => 
              <TableRow key={book.bid} onClick={()=> this.BookDetail(book.bid)}>
                <TableCell component="th" scope="book">{book.btitle}</TableCell>
                <TableCell align="right">{book.bphoto}</TableCell>
                <TableCell align="right">{book.btag}</TableCell>
                <TableCell align="right">{book.uid}</TableCell>
                <TableCell align="right">{book.bpiont}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
    
  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default BookListComponent;