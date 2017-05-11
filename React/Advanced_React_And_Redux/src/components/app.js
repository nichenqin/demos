import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>Add a comment</h4>
        <CommentList></CommentList>
        <CommentBox></CommentBox>
      </div>
    );
  }
}
