import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import Users from './components/Users/Users';

import requireAuth from './components/Guards/AuthGuard';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/resources" component={requireAuth(Resources)} />
          <Route path="/users" component={requireAuth(Users)} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
