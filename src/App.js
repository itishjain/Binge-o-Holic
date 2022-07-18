import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route>
        <h1 align="center">*************** Error 404 *************** </h1>
        <h1 align="center">An unkown error occured.</h1>
      </Route>
    </Switch>
  );
}

export default App;
