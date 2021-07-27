import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import pic from "./pic.jpeg";
import Router from "./Router";
import NavBar from "./NavBar";
import "firebase/auth";
import SignIn from "./SignIn";
import firebase from "firebase/app";
import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import Journal from "./Journal";
import Button from '@material-ui/core/Button';

function Entries() {
    return (
        <div>
            <Button color="secondary" variant="contained" size="large" href="/compose" >Create New Entry</Button>
          <Journal/>
          
        </div>
    );
}

export default Entries;
