import { withRouter } from "react-router-dom";
import Entry from "./Entry";
import Button from '@material-ui/core/Button';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import travel from "./travel.jpg";

function Body() {
  
    return (
      <>  
      {/* if you want to return more than one thing */}
      <br/>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
              Hello, welcome to the ultimate travel journal! Click below to visit some of our most popular pages:
              </Typography>
          </CardContent>
      </Card>
      <br/>
      <Button color="primary" variant="contained" size="large" href="/entries" >Journal Entries</Button>
      <br></br>
      <br></br>
      <Button color="secondary" variant="contained" size="large" href="/research" >Travel Research</Button>
      <br></br>
      <br></br>
      <img src={travel} alt="Travel" width="90%" height="90%"/>
      <br/>     
           <br/>

           
      </>
    );
  }
  
  export default Body;