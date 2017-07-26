const toArray = o => Array.prototype.slice.call(o);

class Observer {
  constructor(value) {
    this.$value = value;
    this.walk(this.$value);
  }

  walk(obj) {
    const keys = Object.keys(obj);
    keys.forEach(key => this.convert(key, obj[key]));
  }

  convert(key, val) {
    defineReactive(this.$value, key, val);
  }
}

const me = {
  firstName: "ni",
  lastName: "chenqin",
  address: {
    city: "shanghai",
    country: "china"
  },
  techs: ["js", "css"]
};

observe(me);

function observe(value) {
  if (!value || typeof value !== "object") return;

  return new Observer(value);
}

function defineReactive(obj, key, val) {
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) return;

  const getter = property && property.get;
  const setter = property && property.set;

  let childObserve = observe(val);

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      console.log("访问：" + key, "值：" + value);
      return value;
    },
    set: function reactiveSetter(newValue) {
      const value = getter ? getter.call(obj) : val;
      if (newValue === value) return;
      setter ? setter.call(obj, newValue) : (val = newValue);
      childObserve = observe(val);
      console.log("更新：" + key + " = " + newValue);
    }
  });
}

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    configurable: true,
    writable: true,
    enumerable: !!enumerable
  });
}

["push", "pop", "shift"].forEach(method => {
  const origrin = arrayProto[method];
  console.log(origrin);
  def(arrayMethods, method, function mutator() {});
});

class Hares {
  constructor({ data, el }) {
    this.$data = data;
    this.$el = document.querySelector(el);
    this.renderDom(this.$el);
  }

  render(node) {
    const sTag = "{{";
    const eTag = "}}";

    const matches = node.textContent.split(sTag);
    if (matches.length) {
      let ret = "";
      matches.forEach(matchStr => {
        const match = matchStr.split(eTag);
        ret = match.length === 1 ? matchStr : this.$data[match[0]];
        node.textContent = ret;
      });
    }
  }

  renderDom(dom) {
    const attrs = toArray(dom.attributes);
    const nodes = toArray(dom.childNodes);

    attrs.forEach(attr => this.render(attr));
    nodes.forEach(
      node => (node.nodeType === 1 ? this.renderDom(node) : this.render(node))
    );
  }
}

const app = new Hares({
  el: "#app",
  data: {
    nameClass: "ninini",
    name: "nichenqin",
    age: 26,
    color: "yellow"
  }
});
