import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Links from './components/links';
import Start from './components/start';
import Guide from './components/guide';
import How from './components/how';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links></Links>

          <div className="page main">
            <Route path="/start" component={Start} />
            <Route path="/how" component={How} />
            <Route path="/guide" component={Guide} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
