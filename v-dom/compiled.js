const CREATE = "CREATE";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const UPDATE = "UPDATE";

// DIFF

function changed(newNode, oldNode) {
  return typeof newNode !== typeof oldNode || typeof newNode === "string" && newNode !== oldNode || newNode.type !== oldNode.type;
}

function diffChildren(newNode, oldNode) {
  const patches = [];
  const patchLength = Math.max(newNode.children.length, oldNode.children.length);
  for (let i = 0; i < patchLength; i++) {
    patches[i] = diff(newNode.children[i], oldNode.children[i]);
  }
  return patches;
}

function diff(newNode, oldNode) {
  if (!oldNode) {
    return { type: CREATE, newNode };
  }
  if (!newNode) {
    return { type: REMOVE };
  }
  if (changed(newNode, oldNode)) {
    return { type: REPLACE, newNode };
  }
  if (newNode.type) {
    return {
      type: UPDATE,
      children: diffChildren(newNode, oldNode)
    };
  }
}

function patch(parent, patches, index = 0) {
  if (!patches) {
    return;
  }
  const el = parent.childNodes[index];
  switch (patches.type) {
    case CREATE:
      {
        const { newNode } = patches;
        const newEl = createElement(newNode);
        return parent.appendChild(newEl);
      }
    case REMOVE:
      {
        return parent.removeChild(el);
      }
    case REPLACE:
      {
        const { newNode } = patches;
        const newEl = createElement(newNode);
        return parent.replaceChild(newEl, el);
      }
    case UPDATE:
      {
        const { children } = patches;
        // console.log(children);
        for (let i = 0; i < children.length; i++) {
          patch(el, children[i], i);
        }
      }
  }
}

function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  setProps(el, node.props);
  node.children.map(createElement).forEach(el.appendChild.bind(el));
  return el;
}

function setProp(el, propName, propValue) {
  if (propName === "className") {
    return el.setAttribute("class", propValue);
  }
  el.setAttribute(propName, propValue);
}

function setProps(el, props) {
  if (!props) return;
  Object.keys(props).forEach(propName => {
    setProp(el, propName, props[propName]);
  });
}

function flatten(arr) {
  return [].concat.apply([], arr);
}

function h(type, props, ...children) {
  return { type, props, children: flatten(children) };
}

function view(count) {
  const r = [...Array(count).keys()];
  return h(
    "ul",
    { id: "cool", className: `my-class-${count % 3}` },
    r.map(n => h(
      "li",
      null,
      "Item ",
      count * n.toString()
    ))
  );
}

function tick(el, count) {
  const patches = diff(view(count + 1), view(count));
  patch(el, patches);
  console.log(count, patches);
  if (count > 20) return;
  setTimeout(() => tick(el, count + 1), 500);
}

function render(el) {
  el.appendChild(createElement(view(0)));

  setTimeout(() => tick(el, 0), 500);
}
