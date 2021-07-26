import './App.css';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from "firebase/app";

function SignIn() {
    const uiConfig = ({
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID]
    });
    
    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
    );
}

export default SignIn;
