import './App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
import "firebase/database";
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
      <br></br>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  Write about the sights, smells, and sounds of what you 
                  encountered while on vacation!
              </Typography>
              <br></br>
              <Button color="primary" variant="contained">
              <a
                className="App-link"
                href="https://penzu.com/travel-journal-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Writing Inspiration
              </a>
              </Button>
              
          </CardContent>
      </Card>
      <br></br>
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
      <Button color="secondary" variant="contained" size="large" onClick={onSubmit}>Submit Entry</Button>
      <br></br>
      </>
  
    );
  }
  
  export default withRouter(CreateEntry);