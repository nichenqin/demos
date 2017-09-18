let $$id = 0;

class Compiler {
  constructor(el, vm) {
    this.$el = el;
    this.vm = vm;

    this.$fragment = nodeToFragment(this.$el);
    this.compile(this.$fragment, this.vm);
    this.$el.appendChild(this.$fragment);
  }

  compile(node, vm) {
    node.$id = $$id++;
    const children = Array.from(node.childNodes);
    if (children && children.length) {
      children.forEach(child => {
        if (child.nodeType === 3) {
          this.compileTextNode(child, vm);
        } else if (child.nodeType === 1) {
          this.compileElementNode(child, vm);
        }
      });
    }
  }

  compileTextNode(node, vm) {
    const text = node.textContent.trim();
    if (!text) return;
  }

  compileElementNode(node, vm) {
    const attrs = Array.from(node.attributes);
    let lazyCompileDir = "";
    let lazyCompileExp = "";
    attrs.forEach(({ name, value }) => {
      const directive = checkDirective(name);
      if (directive.type) {
        if (directive.type === "for" || directive.type === "if") {
          lazyCompileDir = directive.type;
          lazyCompileExp = value;
        } else {
          let handler = this[`${directive.type}Handler`];
          if (handler) {
            handler.call(this, node, vm, value, directive.prop);
          } else {
            console.error(`找不到${directive.type}指令`);
          }
        }
        node.removeAttribute(name);
      }
    });
  }

  bindWatcher(node, vm, exp, dir, prop) {
    const updateFn = Reflect.get(updater, dir);
    console.log("updateFn", updateFn);
  }

  onHandler(node, vm, method, event) {
    if (!event) {
      return console.error("绑定方法有误");
    }
    const fn = Reflect.get(vm, method);
    if (typeof fn === "function") {
      node.addEventListener(event, fn.bind(vm));
    } else {
      node.addEventListener(event, new Function(method).bind(vm));
    }
  }

  modelHandler(node, vm, exp, prop) {}

  bindHandler(node, vm, exp, prop) {}

  ifHandler(node, vm, exp, prop) {}

  textHandler(node, vm, exp, prop) {}
}

const nodeToFragment = node => {
  const fragment = document.createDocumentFragment();
  let child;

  while ((child = node.firstChild)) {
    if (isIgnorable(child)) {
      node.removeChild(child);
    } else {
      fragment.appendChild(child);
    }
  }

  return fragment;
};

const isIgnorable = node => {
  const reg = /^[\t\n\r]+/;
  return (
    node.nodeType === 8 || (node.nodeTYpe === 3 && reg.test(node.textContent))
  );
};

const checkDirective = attrName => {
  if (attrName.startsWith("v-")) {
    const [type, prop] = attrName.substring(2).split(":");
    return { type, prop };
  } else if (attrName.startsWith("@")) {
    return { type: "on", prop: attrName.substring(1) };
  } else if (attrName.startsWith(":")) {
    return { type: "bind", prop: attrName.substring(1) };
  } else {
    return {};
  }
};

const updater = {
  attr(node, newValue = "", attrName) {
    node.setAttribute(attrName, newValue);
  }
};

export default Compiler;
