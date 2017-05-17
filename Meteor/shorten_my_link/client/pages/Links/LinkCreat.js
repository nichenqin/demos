import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.input.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Links to Shorten</label>
          <input ref="input" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten</button>
      </form>
    );
  }
}

export default LinkCreate;
