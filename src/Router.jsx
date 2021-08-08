import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Body from './Body';
import Entries from './Entries';
import CreateEntry from './CreateEntry';
import Research from './Research';
import Footer from "./footer";


export default function Router() {

  return (
    <> 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Body}/>
                <Route exact path="/entries" component={Entries}/>
                <Route exact path="/compose" component={CreateEntry}/>
                <Route exact path="/research" component={Research}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
  );
}