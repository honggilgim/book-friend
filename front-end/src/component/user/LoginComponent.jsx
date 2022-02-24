import React, { Component } from "react";
import "./style.css";
import CustomInput from "./Custominput";
import Button from "./Button";
import { ACCESS_TOKEN, isLogined, user_info } from '../constants';
import { login } from '../util/APIUtils';
import TextField from '@material-ui/core/TextField';
import ApiService from "../../ApiService";
import NavBar from "../route/NavBar";
import Typography from '@material-ui/core/Typography';

class LoginComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.LoginUser = this.LoginUser.bind(this);
// }

// onChange = (e) => {
//   this.setState({
//     [e.target.name] : e.target.value
//   })
// }

// LoginUser(event) {
//   event.preventDefault();
//   console.log("first" + event);   
//   this.props.form((err, values) => {
//       if (!err) {
//           const loginRequest = Object.assign({}, values);
//           console.log(values);
//           console.log(loginRequest);
//           login(loginRequest)
//           .then(response => {
//               localStorage.setItem(ACCESS_TOKEN, response.accessToken);
//               this.props.onLogin();
//           }).catch(error => {
//               if(error.status === 401) {
//                 alert('Your Username or Password is incorrect. Please try again!');
//               } else {
//                 alert('something err!');                                 
//               }
//           });
//       }
//   });
// }

constructor(props){
  super(props);

  this.state = {
    usernameOrEmail: '',
    password: '',
    message: null
  }

}

onChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}
/*
loaduid = (id) => {
  let value;
  ApiService.fetchbyUseridbyemail(id)
    .then( res => {
      this.setState({
        value: res.data
      })
      console.log(value);
      localStorage.setItem(user_info, value);
    })
    .catch(err => {
      console.log('loaduid() Error!', err);
    })
}*/

LoginUser = (e) => {
  e.preventDefault();
  console.log(this.state);
  let LoginRequest = {
    usernameOrEmail: this.state.usernameOrEmail,
    password: this.state.password
  }
  console.log(LoginRequest);
  login(LoginRequest)
  .then(response => {
    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(isLogined, true);
    localStorage.setItem(user_info, LoginRequest.usernameOrEmail);
    this.props.history.push('/mypage');
    window.location.reload();
})
.catch(error => {
  if(error.status === 401) {
    alert('Your Username or Password is incorrect. Please try again!');                    
  } else {
    alert('something err!');
    console.log(error);                                           
  }
});

}
  render() {
    return (
      <div className="App">
        <Typography variant="h4" style={style}>LOG-IN</Typography>
        <form className="form">
        <TextField placeholder="please input your id" name="usernameOrEmail" 
fullWidth margin="normal" value={this.state.usernameOrEmail}  onChange={this.onChange}/>
            <TextField type="password" placeholder="please input your password" name="password" 
fullWidth margin="normal" value={this.state.password}  onChange={this.onChange}/>
          <Button type="button" color="primary" className="form__custom-button" onClick={this.LoginUser}>
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default LoginComponent;