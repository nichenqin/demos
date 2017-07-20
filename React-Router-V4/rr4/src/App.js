import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom";

const Home = () => <h1>Home</h1>;

const Form = class extends React.Component {
  state = { isDirty: false };

  handleInput = () => this.setState({ isDirty: true });

  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.handleInput} />
        <Prompt when={this.state.isDirty} message="message not saved yet" />
      </div>
    );
  }
};

const App = () =>
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  </Router>;

export default App;
