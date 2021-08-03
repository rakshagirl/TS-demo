import './App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
import "firebase/database";
import { withRouter } from "react-router-dom";

function CreateEntry(props) {

const [text, setText] = useState("");

    async function onSubmit() {
        var userId = firebase.auth().currentUser.uid;
        const now = new Date();  
        const utcMilli = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);  
        const utcSec = Math.round(utcMilli / 1000);
        await firebase.database().ref(userId + "/entries/" + utcSec + "/contents").set({
            text: text
          });
          props.history.push({
            pathname: "/entries"
        });
        //window.location.reload();
    }


    return (
      <>
          <TextField
          id="outlined-multiline-static"
          multiline
          rows={20}
          placeholder="Start your entry here!"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <br/>
        <Button color="secondary" variant="contained" size="large" onClick={onSubmit}>Submit Entry</Button>
      </>
  
    );
  }
  
  export default withRouter(CreateEntry);