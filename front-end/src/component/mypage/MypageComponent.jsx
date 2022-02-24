import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { styled } from '@mui/material/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';


class MypageComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      id: '',
      created_at: '',
      updated_at: '',
      addr: '',
      email: '',
      name: '',
      password: '',
      username: '',
      total_point: '',
      grade: ''
    }
  }

  componentDidMount(){
    this.loadUser();
  }
    loadUser = () => { //유저 정보 불러오기;
        ApiService.fetchUserByID(window.localStorage.getItem("user_info"))
          .then( res => {
            let user = res.data;
            this.setState({
              id: user.id,
              created_at: user.created_at,
              updated_at: user.updated_at,
              addr: user.addr,
              email: user.email,
              name: user.name,
              password: user.password,
              username: user.username,
              total_point: user.total_point,
              grade: user.grade
            })
            window.localStorage.setItem("uid", this.state.id);
          })
          .catch(err => {
            console.log('loadUser() 에러', err);
          });
      }

    likelist = (ID) => {
    window.localStorage.setItem("uid", ID);
    this.props.history.push('/likelist');
  }

  mybook = (ID) => {
    window.localStorage.setItem("uid", parseInt(ID));
    this.props.history.push('/mybooklist');
  }

  alarm = (ID) => {
    window.localStorage.setItem("uid", ID);
    this.props.history.push('/alarm');
  }

  ask = (ID) => {
    window.localStorage.setItem("uid", ID);
    this.props.history.push('/ask-list');
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
                    환영합니다! {this.state.username}회원님
                  </Item>
                  <Item >
                    포인트 : 100 | 온도 : {this.state.grade}
                  </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <Item style={{textAlign:"center"}}onClick={()=>this.props.history.push('/alarm')}>알림 </Item>
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
                <Item style={{textAlign:"center"}} onClick={()=> this.mybook(this.state.id)}> 
                  <img alt="mybook" style={imagestyle} src="img/mybook.png" /> 
                  <br></br>나의 책
                </Item>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Item style={{textAlign:"center"}} onClick={()=> this.likelist(this.state.id)}> 
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
                <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/point')}> 
                  <img alt="mypoint" style={imagestyle} src="img/mypoint.png" /> 
                  <br></br>포인트 사용 내역</Item>
                </Grid>

                <Grid item xs={12} sm={6} md={9}>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Item style={{textAlign:"center"}} onClick={()=>this.props.history.push('/reportuser')}>신고 </Item>
                </Grid>
              </Grid>
            </Container>

        );
      }

}    export default MypageComponent;