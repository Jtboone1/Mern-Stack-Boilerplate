import { useState, useEffect } from "react"
import io from 'socket.io-client';
import { Card, CardContent, makeStyles, Button, TextField } from '@material-ui/core';
import RaveNav from "./components/RaveNav";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <>
      <Router>
      <RaveNav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
