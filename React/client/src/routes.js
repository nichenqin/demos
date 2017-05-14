import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Header from './components/Header/Header';
import SignIn from './components/Auth/Signin';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
); 
