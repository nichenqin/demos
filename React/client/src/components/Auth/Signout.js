import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        Sorry to see you go...
      </div>
    );
  }
}

SignOut = connect(null, actions)(SignOut);

export default SignOut;
