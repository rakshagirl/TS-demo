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
                  <b><h1>Travel Research</h1></b>
                  Need some quick info on places to travel next? Our Travel Research generator is the answer for you!
                  <br/>
                  Don't know the exact spelling? No worries-- our algorithm is not case sensitive!
              </Typography>
              <br/><br/>
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
      {info === null || info['results'].length === 0 ? null : <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  <h2><b>{info['results'][0]['name']}, {info['results'][0]['country_id']}</b></h2>
                  <b>Latitude: {info['results'][0]['coordinates']['latitude']} degrees </b> <br/>
                  <b>Longitude: {info['results'][0]['coordinates']['longitude']} degrees </b> <br/>
                  <h3>Description: </h3>
                  {info['results'][0]['snippet']} <br/> <br/>
                  
              </Typography>
              <Typography>
                    <b>{info['results'][0]['images'][0]['caption']}</b>
              </Typography>
              <img src={info['results'][0]['images'][0]['sizes']['medium']['url']}/>
          </CardContent>
      </Card>}
      
      </>
  
    );
  }
  
  export default Research;
  