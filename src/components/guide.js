/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchList, fetchTags } from '../actions/guide';


class Guide extends Component {

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    const { dispatch } = this.props;
    dispatch(fetchList());
    dispatch(fetchTags());
  }

  render() {
    const { data, tags} = this.props;
    let movies = null;
    let tagCom = null;
    if (tags && tags.length > 0 ) {
      tagCom = tags.map((item) => {
        return (
          <a href="#">{ item }</a>
        );
      });
    }
    if (data && data.length > 0 ) {
      movies = data.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p> ✨ {item.rank}</p>
          </div>
        );
      });
    }
    return (
      <div>
        <h3>This is guide</h3>
        <h4>Redux Test</h4>
        <p className="tag-list">{ tagCom }</p>
        { movies }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state['guide']['data'],
  tags: state['guide']['tags'],
});

export default connect(mapStateToProps)(Guide);
