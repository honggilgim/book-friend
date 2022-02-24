import React, { Component } from 'react';
import { signup } from '../util/APIUtils'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      addr: '',
      message: null
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  saveUser = (e) => {
    e.preventDefault();

    let signupRequest = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      addr: this.state.addr,
    }

    signup(signupRequest)
    .then( res => {
        this.setState({
          message: signupRequest.username + '님이 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        this.props.history.push('/login');
    })
    .catch( err => {
      console.log('saveUser() 에러', err);
    });

  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>회원가입</Typography>
        <form style={formContainer}>
         
        <TextField placeholder="닉네임을 입력하세요." name="name" 
fullWidth margin="normal" value={this.state.name}  onChange={this.onChange}/>
            
            <TextField  placeholder="아이디를 입력하세요." name="username" 
fullWidth margin="normal" value={this.state.username}  onChange={this.onChange}/>

            <TextField placeholder="이메일을 입력하세요." name="email" 
fullWidth margin="normal" value={this.state.email}  onChange={this.onChange}/>

            <TextField type="password" placeholder="패스워드를 입력하세요." name="password" 
fullWidth margin="normal" value={this.state.password}  onChange={this.onChange}/>

            <TextField placeholder="주소를 입력하세요." name="addr" 
fullWidth margin="normal" value={this.state.addr}  onChange={this.onChange}/>
          <Button  variant="contained" color="primary" onClick={this.saveUser}>회원가입</Button>

        </form>
      </div>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default AddUserComponent;