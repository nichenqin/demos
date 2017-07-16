const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");
const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello Js
      <input />
      <p>${new Date().toString()}</p>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React",
      React.createElement("input"),
      React.createElement("p", null, new Date().toString())
    ),
    reactContainer
  );
};

setInterval(render, 1000);
