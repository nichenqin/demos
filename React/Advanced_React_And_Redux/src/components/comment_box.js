import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button>Submit Comment</button>
      </form>
    );
  }
}
