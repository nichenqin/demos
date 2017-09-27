(() => {
  function anElement(element, props, children) {
    if (isClass(element)) {
      return handleClass(element, props);
    } else if (isStatelessFunc(element)) {
      return element(props);
    } else {
      return handleHTMLElement(element, props, children);
    }
  }

  function handleHTMLElement(element, props, children) {
    const anElement = document.createElement(element);
    children.forEach(appendChild.bind(null, anElement));
    Object.keys(props).forEach(appendProp.bind(null, anElement, props));
    return anElement;
  }

  function appendChild(anElement, child) {
    if (typeof child === "object") {
      anElement.appendChild(child);
    } else {
      anElement.innerHTML += child;
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

  function handleClass(clazz, props) {
    const component = new clazz(props);
    return component.render();
  }

  function createElement(el, props, ...children) {
    return anElement(el, props, children);
  }

  class Component {
    constructor(props) {
      this.props = props;
      this.componentDidMount();
    }

    componentDidMount() {
      console.log("mount");
    }
  }

  window.React = {
    createElement,
    Component
  };

  window.ReactDOM = {
    render(el, domEl) {
      domEl.appendChild(el);
    }
  };
})();
