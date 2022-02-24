import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      addr: '',
      email: '',
      username: '',
      message: null
    }
  }

  componentDidMount(){
    this.loadUser();
  }

  loadUser = () => {
    ApiService.fetchUserinfobyemail(localStorage.getItem("uid"))
      .then( res => {
        let user = res.data;
        this.setState({
          id: user.id,
          created_at: user.created_at,
          updated_at: user.updated_at,
          addr: user.addr,
          email:user.email,
          name:user.name,
          password:user.password,
          username:user.username,
          total_point:user.total_point,
          grade: user.grade
        })
      })
      .catch(err => {
        console.log('loadUser() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      id:this.state.id,
      created_at:this.state.created_at,
      updated_at:this.state.updated_at,
      addr:this.state.addr,
      email:this.state.email,
      name: this.state.name,
      password: this.state.password,
      username: this.state.username,
      total_point: this.state.total_point,
      grade:this.state.grade
    }

    console.log(user);
    ApiService.edituser(user)
      .then( res => {
        this.setState({
          message : user.name + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/mypage');
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>회원정보 수정</Typography>
        <form>
        <TextField placeholder="email" type="text" name="username" readOnly={true} 
fullWidth margin="normal" value={this.state.username} />

            <TextField placeholder="email" type="text" name="email"
fullWidth margin="normal" value={this.state.email} onChange={this.onChange}/>

            <TextField placeholder="Edit your addr" name="addr" 
fullWidth margin="normal" value={this.state.addr} onChange={this.onChange} />

            <TextField placeholder="Edit your name" name="name" 
fullWidth margin="normal" value={this.state.name} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default EditUserComponent;