import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    return (
      <h1>
        Home
      </h1>
    );
  }
}

const mapStateToProps = ({ posts }) => { return { posts }; };

export default connect(mapStateToProps)(Home);
