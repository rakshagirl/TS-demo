import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Body from './Body';

export default function Router() {

  return (
    <> 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Body}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}