import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Inspiration() {


    return (
      <>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  Stuck on where to travel next? Our Travel Inspiration generator is the answer for you!
              </Typography>
              <br></br>
          </CardContent>
      </Card>
      </>
  
    );
  }
  
  export default Inspiration;
  