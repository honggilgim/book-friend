import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { styled } from '@mui/material/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';


class MainComponent extends Component{

    render(){

        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
 
          }));

          const imagestyle = {
            height: "16vh",  
          };

          const title = {
            display: 'flex',
            justifyContent: 'center',
            color: 'white'
          };

          const bg = {
            background: 'url(/img/main3.jpg)',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 70,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
          }

          const box ={
            textAlign:'center', 
            background:'rgba(255, 255, 255, 0.54)',
            fontWeight: "bold"
          }

        return(
            <section style={bg}>
            <Container maxWidth="xl" >
              <Box sx={{ pb: 5 }}>
                <br></br><br></br>
                <Typography style={title} variant="h2">Book Friend</Typography>
              </Box>  <br></br><br></br><br></br><br></br>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} >
                  <Item style={box}>
                    <img alt="mytake" style={imagestyle} src="img/mytake.png" onClick={()=>this.props.history.push('/books')}/>
                      <br></br>책 빌리기
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <Item style={box}>
                 <img alt="mygive" style={imagestyle} src="img/mygive.png" onClick={()=>this.props.history.push('/book-post')}/>
                 <br></br>책 빌려주기
                </Item>
                </Grid>  
              </Grid>
            </Container>
            </section>
        );
      }

}    export default MainComponent;