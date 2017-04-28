import React, { Component } from 'react';
import BookList from '../containers/books';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
