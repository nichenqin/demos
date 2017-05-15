import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';

const validate = ({ email, password, passwordConfirm }) => {
  const error = {};

  if (!email) {
    error.email = 'email is required';
  }

  if (!password) {
    error.password = 'password is required';
  }

  if (!passwordConfirm) {
    error.passwordConfirm = 'Password Confirm is required';
  }

  if (password !== passwordConfirm) {
    error.password = 'password not match';
  }

  return error;
};



class SignUp extends Component {
  handleFromSubmit(formProps) {
    this.props.signupUser(formProps, this.props.history);
  }

  renderField = field => {
    const { type, label, input, meta: { error, touched } } = field;

    return (
      <div className={classnames('form-group', { 'has-danger': touched && error })}>
        <label>{label}</label>
        <input type={type} className="form-control" {...input} />
        {error && touched && <div className="help-block">{error}</div>}
      </div>
    );

  }

  renderAlert = () => {
    if (this.props.auth.error) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong> {this.props.auth.error}
        </div>
      );

    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFromSubmit.bind(this))}>
        <Field type="email" label="Email" name="email" component={this.renderField} />
        <Field type="password" label="Password" name="password" component={this.renderField} />
        <Field type="password" label="Password Confirm" name="passwordConfirm" component={this.renderField} />
        {this.renderAlert()}
        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
      </form>
    );
  }
}

SignUp = reduxForm({ form: 'signup', validate })(SignUp);
SignUp = connect(({ auth }) => ({ auth }), actions)(SignUp);

export default SignUp;
