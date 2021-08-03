import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Entry(props) {


    return (
      <>
      <Card variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  {props.date}:
                  {props.text}
              </Typography>
              <br></br>
          </CardContent>
      </Card>
      </>
  
    );
  }
  
  export default Entry;
  