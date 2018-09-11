import React, { Component } from 'react';

class Guide extends Component {
  render() {
    return (
      <div>
        <h3>This is guide</h3>
        <p><a href="http://www.jackpu.com/shi-yong-yarn-zhi-zuo-ge-webpack-react-chong-zi/">See this article to get more</a></p>
        <p><a href="https://github.com/JackPu/yarn-react-webpack-seed">Get this repositories</a></p>
        <i>Of course <code>npm install</code> does the same thinkg</i>
      </div>
    );
  }
}

export default Guide;
