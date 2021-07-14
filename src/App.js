import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import pic from "./pic.jpeg";
import Journal from "./Journal";
import Router from "./Router";

function App() {
    return (
        <div className="App" style={{ backgroundImage:`url(${pic})` }}>
          <Container maxWidth="md" style={{ backgroundColor: '#aed581' }}>
            <br/>
            <Typography variant='h1' style={{paddingBottom: ".3em"}}>
                <b>
                  The Ultimate Travel Organizer
                </b>
            </Typography>
            <Router/>
          </Container>
        </div>
    );
}

export default App;
