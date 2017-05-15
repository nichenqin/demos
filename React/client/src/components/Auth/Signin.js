import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password }, this.props.history);
  }

  renderAlert() {
    const { error } = this.props.auth;

    if (error) return (
      <div className="alert alert-danger">
        <strong>Oops! </strong>{error}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="container">
          <fieldset className="form-group">
            <label>Email</label>
            <Field name="email" className="form-control" type="email" component="input" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <Field name="password" className="form-control" type="password" component="input" />
          </fieldset>
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </div>
      </form>
    );
  }
}

SignIn = reduxForm({ form: 'signin' })(SignIn);

export default connect(({ auth }) => ({ auth }), actions)(SignIn);
