import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const isLoggedIn = false;

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/345">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>;

const App = () =>
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route
          path="/new/:num"
          render={({ match }) =>
            <h1>
              New: {match.params.num}
            </h1>}
        />
        <Route
          path="/old/:num"
          render={({ match }) => <Redirect to={`/new/${match.params.num}`} />}
        />
        <Route
          path="/protected"
          render={() => (isLoggedIn ? <h1>Welcom</h1> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  </Router>;

export default App;
