import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

function Research() {


    return (
      <>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  Stuck on where to travel next? Our Travel Inspiration generator is the answer for you!
              </Typography>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <br></br>
          </CardContent>
      </Card>
      </>
  
    );
  }
  
  export default Research;
  