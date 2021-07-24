import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import pic from "./pic.jpeg";
import Router from "./Router";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="App" style={{ backgroundImage:`url(${pic})` }}>
          
          <Container maxWidth="md" style={{ backgroundColor: '#aed581' }}>
            <br/>
            <Typography color="primary" variant='h2' style={{paddingBottom: ".3em"}}>
                <b>
                  The Ultimate Travel Organizer
                </b>
            </Typography>
            <NavBar/>
            <Router/>
          </Container>
        </div>
    );
}

export default App;
