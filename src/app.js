import React, { Component } from 'react';
import { render } from 'react-dom';
import {  Router, Route, hashHistory } from 'react-router';
// components
import Links from './components/links.js';
import Start from './components/start.js';
import Guide from './components/guide.js';
import How from './components/how.js';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Links}>
          <Route path="/start" component={Start}/>
          <Route path="/how" component={How}/>
          <Route path="/guide" component={Guide}/>
        </Route>
    </Router>  
    );
  }
}

export default App;