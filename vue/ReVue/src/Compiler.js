import Watcher from "./Watcher";

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
        if (isTextNode(child)) {
          this.compileTextNode(child, vm);
        } else if (isElementNode(child)) {
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

    attrs.forEach(({ name, value: exp }) => {
      const { type, prop } = checkDirective(name);
      if (type) {
        if (type === "for" || type === "if") {
          lazyCompileDir = type;
          lazyCompileExp = exp;
        } else {
          const handler = this[`${type}Handler`];
          if (handler) {
            handler.call(this, node, vm, exp, prop);
          } else {
            console.error(`找不到${type}指令`);
          }
        }
        node.removeAttribute(name);
      }
    });

    if (lazyCompileExp) {
      Reflect.get(this, `${lazyCompileDir}Handler`)(node, vm, lazyCompileExp);
      this.compile(node, vm);
    } else {
      this.compile(node, vm);
    }
  }

  bindWatcher(node, vm, exp, dir, prop) {
    const updateFn = Reflect.get(updater, dir);
    console.log("updateFn", updateFn);
    new Watcher(exp, vm, newValue => {
      updateFn && updateFn(node, newValue, prop);
    });
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

  showHandler(node, vm, exp, prop) {
    this.bindWatcher(node, vm, exp, "style", "display");
  }
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

const isTextNode = ({ nodeType }) => nodeType === 3;

const isElementNode = ({ nodeType }) => nodeType === 1;

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
  },
  style(node, newValue = "", attrName) {
    if (attrName === "display") {
      newValue = newValue ? "initial" : "none";
    }
    node.style[attrName] = newValue;
  }
};

export default Compiler;
