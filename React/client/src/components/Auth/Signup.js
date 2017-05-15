import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';

const validate = ({ email, password, passwordConfirm }) => {
  const error = {};

  if (password !== passwordConfirm) {
    error.password = 'password not match';
  }

  return error;
};



class SignUp extends Component {
  handleFromSubmit({ email, password, passwordConfirm }) {

  }

  renderField = field => {
    const { label, input, meta: { error, touched } } = field;

    return (
      <div className={classnames('form-group', { 'has-danger': touched && error })}>
        <label>{label}</label>
        <input type="text" className="form-control" {...input} />
        {error && touched && <div className="help-block">{error}</div>}
      </div>
    );

  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFromSubmit.bind(this))}>
        <Field label="Email" name="email" component={this.renderField} />
        <Field label="Password" name="password" component={this.renderField} />
        <Field label="Password Confirm" name="passwordConfirm" component={this.renderField} />
        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
      </form>
    );
  }
}

SignUp = reduxForm({ form: 'signup', validate })(SignUp);
SignUp = connect(null, actions)(SignUp);

export default SignUp;
