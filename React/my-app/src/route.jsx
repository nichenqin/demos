import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App/App';
import About from './components/About/About';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/" component={App}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
