import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class AuthGuard extends Component {

    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.auth) this.context.router.history.push('/');
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth) this.context.router.history.push('/');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => { return { auth }; };

  return connect(mapStateToProps)(AuthGuard);
}
