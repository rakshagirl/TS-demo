import './App.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";

function Entry(props) {

    function convertDate(UTCSec) {
        var d = new Date(0);
        d.setUTCSeconds(UTCSec);
        d.setHours(d.getHours() - d.getTimezoneOffset() / 60);
        return (d).toLocaleString();
    }

    function deleteEntry() {
        if(window.confirm("Are you sure to want to delete this entry? ")){
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref(userId + "/entries/" + props.date);
            ref.remove();
        }
    }

    return (
      <>
      
      <Card width='10vw' variant='outlined' style={{flex:1, backgroundColor:'#CFF3B6'}}>
          <CardContent>
              <Typography>
                  <b>{convertDate(props.date)}</b> 
                  <br></br>
                  {props.text}
                  <br/><br/>
              </Typography>
              <Button color="inherited" variant="contained" onClick={deleteEntry}>Delete</Button>
              <br></br>
          </CardContent>
      </Card>
      <br></br>
      </>
  
    );
  }
  
  export default Entry;
  