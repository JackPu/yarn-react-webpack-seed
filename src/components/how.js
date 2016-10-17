import React from 'react';


let How = React.createClass({ 
  
  render() {
    return(
      <div>
        <h3>How to Use it</h3>
        <pre>
git clone https://github.com/JackPu/yarn-react-webpack-seed
        </pre>
        <p>Then you could use <code>yarn install</code></p>
        <i>Of course <code>npm install</code> does the same thinkg</i>
      </div>
    );
  }
});

export default How;  