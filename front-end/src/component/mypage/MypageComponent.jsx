import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { styled } from '@mui/material/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';


class MypageComponent extends Component{

    loadBook = () => { //유저 정보 불러오기
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

    likelist = (ID) => {
    window.localStorage.setItem("uid", ID);
    this.props.history.push('/likelist');
  }

  mybook = (ID) => {
    window.localStorage.setItem("uid", ID);
    this.props.history.push('/mybooklist');
  }

    render(){

        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
 
          }));

          const imagestyle = {
            height: "13vh",  
              
              };

        return(
            <Container maxWidth="xl">
              <Box sx={{ pb: 5 }}>
                <Typography variant="h4">My page</Typography>
              </Box>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                  <Item >
                      <p> 환영합니다! 김주희 회원님</p>
                      <p>포인트 : 100p | 평점 : 100점</p>
                  </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <Item style={{textAlign:"center"}}>알림 </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <Item style={{textAlign:"center"}}onClick={()=>this.props.history.push('/edituser')} >
                    회원 정보 수정 
                  </Item>
                </Grid>
                <Grid item xs={12} sm={0} md={8}>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/borrowed-list')}>
                    <img alt="mytake" style={imagestyle} src="img/mytake.png" /> 
                    <br></br>빌린책 </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/borrow-list')}>
                   <img alt="mygive" style={imagestyle} src="img/mygive.png" /> 
                   <br></br>빌려준책</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Item style={{textAlign:"center"}} onClick={()=> this.mybook(parseInt(1))}> 
                  <img alt="mybook" style={imagestyle} src="img/mybook.png" /> 
                  <br></br>나의 책
                </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Item style={{textAlign:"center"}} onClick={()=> this.likelist(parseInt(1))}> 
                    <img alt="myhaert" style={imagestyle} src="img/myheart.png" /> 
                    <br></br>찜목록
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/ask-list')}> 
                  <img alt="mylist" style={imagestyle} src="img/mylist.png" /> 
                  <br></br>요청목록</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/borrow-list')}> 
                  <img alt="mypoint" style={imagestyle} src="img/mypoint.png" /> 
                  <br></br>포인트 사용 내역</Item>
                </Grid>

                <Grid item xs={12} sm={6} md={9}>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Item style={{textAlign:"center"}}>신고 </Item>
                </Grid>
                

                
              </Grid>
            </Container>

        );
      }

}    export default MypageComponent;