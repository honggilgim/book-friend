import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { styled } from '@mui/material/styles';
import Grid from '@material-ui/core/Grid';

import { Box, Card, Typography, Stack } from '@mui/material';

class LikeBookListComponent extends Component{

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
    ApiService.likelist(window.localStorage.getItem("uid"))
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

  render(){

    const ProductImgStyle = styled('img')({
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute'
    });

    return(
    
      <div>

    <Typography variant="h4" style={style}>나의찜목록</Typography>
    <hr></hr><br></br>
    <Grid container spacing={3} >
      {this.state.books.map((book) => (
        <Grid key={book.bid} item xs={12} sm={6} md={3}  onClick={()=> this.BookDetail(book.bid)}>
          <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
              {book.btag && (
               <Typography >
               {book.btag}
             </Typography>
              )}
              <ProductImgStyle alt={book.bphoto} src={book.bphoto}/>
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
                <Typography variant="subtitle2" noWrap>
                  {book.btitle}
                </Typography>

              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1">
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      color: 'text.disabled',
                      textDecoration: 'line-through'
                    }}
                  >
                  </Typography>
                  &nbsp;
                  {book.bpoint}포인트
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
        
        
       
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
export default LikeBookListComponent;