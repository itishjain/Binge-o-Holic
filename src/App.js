import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import InfoShow from './Pages/InfoShow';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/watch-list">
        <Starred />
      </Route>
      <Route exact path="/shows/:id">
        <InfoShow />
      </Route>
      <Route>
        <h1 align="center">*************** Error 404 *************** </h1>
        <h1 align="center">An unkown error occured.</h1>
      </Route>
    </Switch>
  );
}

export default App;
