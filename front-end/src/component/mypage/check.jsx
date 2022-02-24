import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ApiService from '../../ApiService';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class CheckboxComponent extends Component {

  constructor(props){
    super(props);
  }
  

    render() {
        let value=0;
        return (
            <>
            <br></br>
            <br></br>
          <Typography variant="h4" style={style}>설문조사 페이지입니다.</Typography>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <div>
          <><FormGroup name="checked">
          <Typography variant="h6" style={style}>Q1. 책 상태가 손상되었나요?</Typography>
          <div style={style}>
          
            <FormControlLabel control={<Checkbox />} label="예" />
            <FormControlLabel control={<Checkbox onClick={() => value--}/>} label="아니오." />
          
          </div>
          <br></br>
      
          <div>
          <Typography variant="h6" style={style}>Q2. 시간 약속은 잘 지켜지셨나요?</Typography>
          <div style={style}>
          
            <FormControlLabel control={<Checkbox />} label="예" />
            <FormControlLabel control={<Checkbox onClick={() => value--}/>} label="아니오." />
          
          </div>
          </div>
          <br></br>
      
          <div>
          <Typography variant="h6" style={style}>Q3. 상대방은 친절했을까요?</Typography>
          <div style={style}>
          
            <FormControlLabel control={<Checkbox />} label="예" />
            <FormControlLabel control={<Checkbox onClick={() => value--}/>} label="아니오." />
          
          </div>
          </div>
          <br></br>
      
          <div>
          <Typography variant="h6" style={style}>Q4. 전체적으로 상대방에게 만족했을까요?</Typography>
          <div style={style}>
          
            <FormControlLabel control={<Checkbox />} label="예" />
            <FormControlLabel control={<Checkbox onClick={() => value--}/>} label="아니오." />
          
          </div>
          </div>
      
          <br></br>
          <div style= {style}>
          <Button variant="contained" color="primary" size = "large" onClick={() => {
            this.props.history.push('/mypage');
            ApiService.minusgrade(localStorage.getItem("user_info"), value);
            }
            }>
            Submit</Button>
          </div>
          </FormGroup></>
          </div>
          </>
        )
    };
}

const style = {
    display: 'flex',
    justifyContent: 'center'
  }

  const right = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  export default withRouter(CheckboxComponent);