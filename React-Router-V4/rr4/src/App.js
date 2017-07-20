import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Links = () =>
  <nav>
    <Link to="?id=123">Inline</Link>
    <Link to={{ pathName: "/", search: "id=456" }}>Object</Link>
  </nav>;

const App = () =>
  <Router>
    <div>
      <Links />
      <Route
        path="/"
        render={({ match, location }) =>
          <div>
            <p>Root</p>
            <p>
              location: {JSON.stringify(location)}
            </p>
            <p>
              match: {JSON.stringify(match)}
            </p>
            <p>
              {new URLSearchParams(location.search).get("id")}
            </p>
          </div>}
      />
    </div>
  </Router>;

export default App;
