import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Comoponents/Navbar';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
