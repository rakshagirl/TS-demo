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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'serif',
    ].join(','),
  },});

const firebaseConfig = {
  apiKey: "AIzaSyAolP8hDSd2clBhrN47Ep95GEQyiGzGHmY",
  authDomain: "traveljournal-ts.firebaseapp.com",
  projectId: "traveljournal-ts",
  storageBucket: "traveljournal-ts.appspot.com",
  messagingSenderId: "6990798076",
  appId: "1:6990798076:web:22a2947f33320df513cb79"
};

firebase.initializeApp(firebaseConfig);

function App(props) {
  const [user, setUser] = useState(false);
  const [busy, setBusy] = useState(true);
  
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      setUser(true);
    } else {
      // User is signed out
      // ...
      setUser(false);
    }
    setBusy(false);
  });
  
  const signOut = () => {
    firebase.auth().signOut().then(() => {
        props.history.push({
            pathname: "/"
        });
        window.location.reload();
    });
  }

    return (
      <ThemeProvider theme={theme}>
        <div className="App" style={{ backgroundImage:`url(${pic})`, display: busy ? "none" : "", minHeight: "100vh" }}>
          
          <Container maxWidth="md" style={{ backgroundColor: '#aed581', minHeight: "100vh" }}>
            <br/>
            <Typography className="font-link" color="primary" variant='h2' style={{paddingBottom: ".3em"}}>
                  <b>
                    The Ultimate Travel Organizer
                  </b>
            </Typography>
            {user == false ? 
              <SignIn/>
              : 
              <div>
              <NavBar signOut={signOut}/>
              <Router/>
              </div>}
            
          </Container>
        </div>
      </ThemeProvider>
    );
}

export default withRouter(App);
