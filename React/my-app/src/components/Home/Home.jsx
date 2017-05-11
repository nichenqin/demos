import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => { return { posts }; };

export default connect(mapStateToProps)(Home);
