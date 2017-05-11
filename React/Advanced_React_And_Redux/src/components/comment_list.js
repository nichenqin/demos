import React, { Component } from 'react';

class CommentList extends Component {

  renderCommentList() {

  }

  render() {
    return (
      <ul
        className="comment-list"
      >
        {this.renderCommentList()}
      </ul>
    );
  }
}

export default CommentList;
