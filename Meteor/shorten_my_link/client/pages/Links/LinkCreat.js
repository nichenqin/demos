import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.refs;

    Meteor.call('links.insert', input.value, error => {
      this.setState({ error: error ? 'Enter a Valid URL' : '' });
      input.value = error ? input.value : '';
    });
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Links to Shorten</label>
          <input ref="input" type="text" className="form-control" />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary">Shorten</button>
      </form>
    );
  }
}

export default LinkCreate;
