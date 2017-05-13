import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

export default () => (
  <BrowserRouter>
    <div>
      {/*<Header />*/}
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
); 
