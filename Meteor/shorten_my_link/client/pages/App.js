import React, { Component } from 'react';
import Header from './Header/Header';
import LinkCreate from './Links/LinkCreat';

class APP extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <LinkCreate />
        </div>
      </div>
    );
  }
}

export default APP;
