import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();


  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit" href="/" >Home</Button>
            <Button color="inherit" href="/entries" >Journal Entries</Button>
            <Button color="inherit" href="/research" >Travel Research</Button>
            <Button color="inherit" onClick={props.signOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
