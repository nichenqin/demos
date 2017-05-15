import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  class AuthGuard extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) this.context.router.history.push('/');
    }

    componentWillUpdate() {
      if (!this.props.authenticated) this.context.router.history.push('/');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  AuthGuard = connect(({ auth: { authenticated } }) => ({ authenticated }))(AuthGuard);

  return AuthGuard;
};
