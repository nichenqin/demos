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
    const me = this;
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
          me.observeArray(newValue, dep);
        } else {
          me.observe(newValue);
        }
        dep.notify();
      }
    });

    if (Array.isArray(value)) {
      this.observeArray(value, dep);
    } else {
      this.observe(value);
    }
  }

  observeArray(array, dep) {
    array.__proto__ = this.defineReactiveArray(dep);
    array.forEach(item => this.observe(item));
  }

  defineReactiveArray(dep) {
    const arrayPrototype = Array.prototype;
    const arrayMethods = Object.create(arrayPrototype);
    const me = this;

    [
      "pop",
      "push",
      "sort",
      "shift",
      "splice",
      "unshift",
      "reverse"
    ].forEach(method => {
      const origin = Reflect.get(arrayPrototype, method);
      Reflect.defineProperty(arrayMethods, method, {
        enumerable: true,
        writable: true,
        configurable: true,
        value() {
          const args = Array.from(arguments);
          const result = origin.apply(this, args);

          let inserted;
          switch (method) {
            case "push":
            case "unshift":
              inserted = args;
              break;
            case "splice":
              inserted = args.slice(2);
              break;
          }

          if (inserted && inserted.length) {
            me.observeArray(inserted, dep);
          }

          dep.notify({ method, args });
          return result;
        }
      });
    });

    Reflect.defineProperty(arrayMethods, "$set", {
      value(index, value) {
        if (index > this.length) {
          index = this.length;
        }
        return this.splice(index, 1, value);
      }
    });

    Reflect.defineProperty(arrayMethods, "$remove", {
      value(item) {
        const index = this.indexOf(item);
        if (index > -1) {
          return this.splice(index, 1);
        }
      }
    });

    return arrayMethods;
  }
}

export default Observer;
