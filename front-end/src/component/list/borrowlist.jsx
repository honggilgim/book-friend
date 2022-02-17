import React, { Component } from 'react';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Container, Typography } from "@material-ui/core";

function createData(name, borrowed, end) {
    return { name, borrowed, end};
  }

  const rows = [
    createData('겨울방학', 'test', '2022.02.25'),
    createData('몰입교육', 'test', '2022.02.25'),
    createData('예시1', 'test', '2022.02.25'),
    createData('예시2', 'test', '2022.02.25'),
    createData('예시3', 'test', '2022.02.25'),
  ];

  const useStyles = makeStyles({
    root: {
      background: (props) =>
        props.color === 'red'
          ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: (props) =>
        props.color === 'red'
          ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
          : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 35,
      padding: '0 30px',
      margin: 10,
    },
  });
  
  function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
  }

  MyButton.propTypes = {
    color: PropTypes.oneOf(['blue']).isRequired,
  };

class borrowlist extends Component{

    render() {
        return (
            <>
            <Typography variant="h4" style={style}>빌려준 책 리스트</Typography>
            <Container>
            </Container>
            <hr></hr><br></br>
            <Table sx={{ minWidth: 550 }} size="middle" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>book name</TableCell>
                        <TableCell align="middle">borrow</TableCell>
                        <TableCell align="middle">end day&nbsp;(g)</TableCell>
                        <TableCell align="middle"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="middle">{row.borrowed}</TableCell>
                            <TableCell align="middle">{row.end}</TableCell>
                            <TableCell align="right"> 
                            <MyButton variant="contained" color="blue" size="large" onClick={()=>this.props.history.push('/check')}>완료</MyButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </>
        );
    }
    
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 25
  }

export default borrowlist;