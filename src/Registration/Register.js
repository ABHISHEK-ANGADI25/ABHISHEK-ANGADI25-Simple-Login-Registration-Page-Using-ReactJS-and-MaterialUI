import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: { 
    height: '70vh',
    backgroundColor:'#white',
    minWidth: 275,
  },
  table: {
    minWidth: 300,
  },
  title: {
    fontSize: 24,
  },
});

function Register(props) {
  const classes = useStyles();
    const [state , setState] = useState({
        email : "",
        name : "",
        phone : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    /*const sendDetailsToServer = () => {
        redirectToHome();
    }

    const redirectToHome = () => {
        //props.history.push('/dashboard');
    }*/
    const redirectToLogin = () => {
        props.history.push('/login'); 
    }
  return (
    <div mt={6} className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>
              <Typography className={classes.title} color="text-black" gutterBottom>
                  <span className="h2 align-items-center">Register/Login</span>
              </Typography>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <PersonIcon />
                  </IconButton>
                  <label htmlFor="exampleInputName"className="text-black">Full Name</label>
                </TableCell>
                <TableCell align="left">
                  <input type="text" 
                      className="form-control" 
                      id="name" 
                      aria-describedby="nameHelp" 
                      placeholder="Enter Full Name" 
                      value={state.name}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow >
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <EmailIcon />
                  </IconButton>
                  <label htmlFor="exampleInputEmail1"className="text-black">Email address</label>
                </TableCell>
                <TableCell align="left">
                  <input type="email" 
                      className="form-control" 
                      id="email" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter email" 
                      value={state.email}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow >
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <SmartphoneIcon />
                  </IconButton>
                  <label htmlFor="exampleInputPhone"className="text-black">Phone</label>
                </TableCell>
                <TableCell align="left">
                  <input type="phone" 
                      className="form-control" 
                      id="phone" 
                      aria-describedby="phoneHelp" 
                      placeholder="Enter phone" 
                      value={state.phone}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow >
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                    <LockIcon />
                  </IconButton>
                  <label htmlFor="exampleInputPassword1"className="text-black">Password</label>
                </TableCell>
                <TableCell align="left">
                  <input type="password" 
                      aria-describedby="passwordHelp"
                      className="form-control" 
                      id="password"
                      placeholder="Enter password" 
                      value={state.password}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                    <LockIcon />
                  </IconButton>
                  <label htmlFor="exampleInputPassword1" className="text-black">Confirm Password</label>
                </TableCell>
                <TableCell align="left">
                <input type="password" 
                    className="form-control"
                    aria-describedby="passwordHelp" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    value={state.confirmPassword}
                    onChange={handleChange} 
                />
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit" 
                    className="btn btn-primary"
                    //onClick={handleSubmitClick}
                >
                    Register
                </Button>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2" component="p">
                    <span>Already have an account? </span>
                    <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
                </Typography>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default withRouter(Register)
