import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is my home page
      </Route>
      <Route exact path="/starred">
        This is starred page
      </Route>
      <Route>
        <h1 align="center">*************** Error 404 *************** </h1>
        <h1 align="center">An unkown error occured.</h1>
      </Route>
    </Switch>
  );
}

export default App;
