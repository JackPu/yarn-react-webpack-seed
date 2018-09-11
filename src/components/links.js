import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <aside>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/start">Start</Link></li>
            <li><Link to="/how">How</Link></li>
            <li><Link to="/guide">Guide</Link></li>
          </ul>
        </aside>
      </div>
    );
  }
}


export default Links;
