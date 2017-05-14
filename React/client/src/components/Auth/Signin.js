import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
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
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(SignIn);
