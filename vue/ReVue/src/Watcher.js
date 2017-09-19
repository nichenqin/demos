import Dep from "./Dep";

let $uid = 0;

class Watcher {
  constructor(exp, vm, callback) {
    this.exp = exp;
    this.vm = vm;
    this.callback = callback || function() {};

    this.value = null;
    this.$uid = $uid++;
    this.update();
  }

  get() {
    Dep.target = this;
    const value = new Function(this.exp).bind(this.vm);
    Dep.target = null;
    return value;
  }

  update(options) {
    const newValue = this.get();
    if (!deepEqual(newValue, this.value)) {
      this.callback && this.callback(newValue, this.value, options);
      this.value = deepCopy(newValue);
    }
  }
}

const isObject = obj => obj !== null && typeof obj === "object";

const deepEqual = (x, y) => {
  return isObject(x) && isObject(y)
    ? Object.keys(x).length === Object.keys(y).length &&
      Object.keys(x).every(key => deepEqual(x[key], y[key]))
    : x === y;
};

const deepCopy = obj => (isObject(obj) ? JSON.parse(JSON.stringify(obj)) : obj);

export default Watcher;
