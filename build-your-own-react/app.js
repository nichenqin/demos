class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "button",
      { onclick: this.props.onClick, class: "red" },
      "Click Me!!"
    );
  }
}
const button = React.createElement(
  MyButton,
  {
    onClick: () => {
      alert("it works");
    }
  },
  null
);
ReactDOM.render(button, document.getElementById("root"));
