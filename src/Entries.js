import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import pic from "./pic.jpeg";
import Router from "./Router";
import NavBar from "./NavBar";
import "firebase/auth";
import SignIn from "./SignIn";
import firebase from "firebase/app";
import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import Entry from "./Entry";
import Button from '@material-ui/core/Button';

function Entries() {
    const [entries, setEntries] = useState(null);

    useEffect(() => {
        var userId = firebase.auth().currentUser.uid;
        var starCountRef = firebase.database().ref(userId + "/entries/");
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setEntries(data);
            console.log(data);
        });
    }, []);



    return (
        <div>
            <br></br>
            <Button color="secondary" variant="contained" size="large" href="/compose" >Create New Entry</Button>
            <Typography>
            <h5><b>_________________________________________________________________</b></h5>
                <h2><b>Here are your past entries:</b></h2>
            </Typography>
          {entries != null ? Object.keys(entries).reverse().map((entry) => {
              var text = entries[entry]['contents']['text'];

              return <Entry date={entry} text={text}/>
          }) : null}
          
        </div>
    );
}

export default Entries;
