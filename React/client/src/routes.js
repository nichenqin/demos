import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Header from './components/Header/Header';
import SignIn from './components/Auth/Signin';
import SignOut from './components/Auth/Signout';
import SignUp from './components/Auth/Signup';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
); 
