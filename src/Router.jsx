import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Body from './Body';
import Entries from './Entries';
import CreateEntry from './CreateEntry';
import Inspiration from './Inspiration';
import Footer from "./footer";


export default function Router() {

  return (
    <> 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Body}/>
                <Route exact path="/entries" component={Entries}/>
                <Route exact path="/compose" component={CreateEntry}/>
                <Route exact path="/inspiration" component={Inspiration}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
  );
}