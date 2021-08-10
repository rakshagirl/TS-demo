import './App.css';
import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Research(props) {
    const [text, setText] = useState("");
    const [info, setInfo] = useState(null);

    function onSubmit() {
        const url = "https://www.triposo.com/api/20210615/location.json?account=BHLO0H3O&token=evra0uru4bxucwfr10jklfq3p5f05v8l&trigram=>=0.5&order_by=-score&count=1&annotate=trigram:" + text;
        fetch(url)
        .then(response => response.json())
        .then(data => setInfo(data))
        .catch(error => console.log(error));
    }
    return (
      <>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  Stuck on where to travel next? Our Travel Inspiration generator is the answer for you!
              </Typography>
              <br></br>
              <TextField 
                id="outlined-basic" 
                label="Search a city or country" 
                variant="outlined" 
                onChange={(event) => setText(event.target.value)}/>
              <br></br>
              <br></br>
              <Button color="secondary" variant="contained" size="large" onClick={onSubmit}>Submit</Button>
          </CardContent>
      </Card>
      <br/>
      {info === null ? null : <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  <b>{info['results'][0]['name']}</b>
              </Typography>
              
          </CardContent>
      </Card>}
      
      </>
  
    );
  }
  
  export default Research;
  