(() => {
  let rootDOMElement, rootReactElement;
  const classMap = {};
  let classCounter = 0;
  const REACT_CLASS = "REACT_CLASS";

  function anElement(element, props, children) {
    if (isClass(element)) {
      return handleClass(element, props, children);
    } else if (isStatelessFunc(element)) {
      return element(props);
    } else {
      return handleHTMLElement(element, props, children);
    }
  }

  function handleHTMLElement(element, props, children) {
    const anElement = document.createElement(element);
    children.forEach(appendChild.bind(null, anElement));
    if (props !== null) {
      Object.keys(props).forEach(appendProp.bind(null, anElement, props));
    }
    return anElement;
  }

  function appendChild(element, child) {
    if (child.type === REACT_CLASS) {
      appendChild(element, child.render());
    } else if (Array.isArray(child)) {
      child.forEach(item => appendChild(element, item));
    } else if (typeof child === "object") {
      element.appendChild(child);
    } else {
      element.innerHTML += child;
    }
  }

  function appendProp(anElement, props, propName) {
    if (shouldAddEventListener(propName)) {
      anElement.addEventListener(
        propName.substring(2).toLowerCase(),
        props[propName]
      );
    } else {
      anElement.setAttribute(propName, props[propName]);
    }
  }

  function handleClass(clazz, props, children) {
    classCounter++;
    if (classMap[classCounter]) {
      return classMap[classCounter];
    }
    const reactElement = new clazz(props);
    reactElement.children = children;
    reactElement.type = REACT_CLASS;
    classMap[classCounter] = reactElement;
    return reactElement;
  }

  function createElement(el, props, ...children) {
    return anElement(el, props, children);
  }

  class Component {
    constructor(props) {
      this.props = props;
      this.componentDidMount();
    }

    componentDidMount() {}

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      this.reRender();
    }

    reRender() {
      while (rootDOMElement.hasChildNodes()) {
        rootDOMElement.removeChild(rootDOMElement.lastChild);
      }
      classCounter = 1;
      ReactDOM.render(rootReactElement, rootDOMElement);
    }
  }

  window.React = {
    createElement,
    Component
  };

  window.ReactDOM = {
    render(el, domEl) {
      rootReactElement = el;
      rootDOMElement = domEl;
      const currentDOM = rootReactElement.render();
      rootDOMElement.appendChild(currentDOM);
    }
  };
})();
