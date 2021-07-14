import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Journal() {


    return (
      <>
      <Card variant='outlined'>
          <CardContent>
              <Typography color="primary">
                  <b>
                  Write down your travel thoughts here! It could be a 
                  favorite memory, recent trip experience, or any random 
                  thought. No wrong answers here...
                  </b>
              </Typography>
              <br></br>
          </CardContent>
      </Card>
      </>
  
    );
  }
  
  export default Journal;
  