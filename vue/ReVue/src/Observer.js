import Dep from "./Dep";

class Observer {
  constructor(data) {
    this.data = data;
    this.observe(data);
  }

  observe(data) {
    if (!data || typeof data !== "object") {
      return;
    }
    Object.keys(data).forEach(key => {
      this.observeObject(data, key, Reflect.get(data, key));
    });
  }

  observeObject(data, key, value) {
    const dep = new Dep();
    Reflect.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get() {
        if (Dep.target) dep.addSub(Dep.target);
        return value;
      },
      set(newValue) {
        if (value === newValue) {
          return;
        }
        value = newValue;

        if (Array.isArray(newValue)) {
          this.observeArray(newValue, dep);
        } else {
          this.observe(newValue);
        }
        dep.notify();
      }
    });
  }
}

export default Observer;
