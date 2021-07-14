import { withRouter } from "react-router-dom";
import Journal from "./Journal";

function Body() {
  
    return (
      <>  
      {/* if you want to return more than one thing */}
              <Journal/>
           <br/>
      </>
    );
  }
  
  export default Body;