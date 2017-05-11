import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Resources from './components/Resources/Resources';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route path="/resources" component={Resources} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
