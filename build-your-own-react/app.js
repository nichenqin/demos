class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClickPlus() {
    this.setState({ count: this.state.count + 1 });
  }

  onClickMinus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("div", null, "The Famous Dan Abramov's Counter"),
      React.createElement("div", null, `${this.state.count}`),
      React.createElement(
        "button",
        { onClick: this.onClickPlus.bind(this) },
        "+"
      ),
      React.createElement(
        "button",
        { onClick: this.onClickMinus.bind(this) },
        "-"
      )
    );
  }
}

class Root extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Counter, null, null),
      React.createElement(Counter, null, null)
    );
  }
}

ReactDOM.render(
  React.createElement(Root, null, null),
  document.getElementById("root")
);
