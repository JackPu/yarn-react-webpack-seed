import React from 'react';
import { Link } from 'react-router'
let Links = React.createClass({ 

  render() {
    return(
      <div>
        <aside>
          <h4>Categories</h4>
          <ul role="nav">
            <li><Link to="/start" activeStyle={{color:'#3498db'}}>Start</Link></li>
            <li><Link to="/how" activeStyle={{color:'#3498db'}}>How</Link></li>
            <li><Link to="/guide" activeStyle={{color:'#3498db'}}>Guide</Link></li>
          </ul>
        </aside>
      
        <div className="page main">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Links;  