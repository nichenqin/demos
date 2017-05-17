import React, { Component } from 'react';
import Header from './Header/Header';
import LinkCreate from './Links/LinkCreat';
import LinkList from './Links/LinkList';

class APP extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <LinkCreate />
          <LinkList />
        </div>
      </div>
    );
  }
}

export default APP;
