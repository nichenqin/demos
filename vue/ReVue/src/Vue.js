class Vue {
  constructor(option) {
    this.$data = option.data || {};
    this.$el =
      typeof option.el === "string"
        ? document.querySelector(option.el)
        : option.el;

    option = {
      computed: {},
      methods: {},
      ...option
    };

    this._proxy(option);

    this.$option = option;
  }

  _proxy(option) {
    const proxyList = ["data", "computed"];
    proxyList.forEach(proxy => {
      Object.keys(Reflect.get(option, proxy)).forEach(key => {
        Reflect.defineProperty(this, key, {
          configurable: true,
          enumerable: true,
          get() {
            if (typeof Reflect.get(this.$data, key) !== "undefined") {
              return Reflect.get(this.$data, key);
            } else if (
              typeof Reflect.get(this.$option.computed, key) !== "undefined"
            ) {
              return Reflect.get(this.$option.computed, key);
            } else {
              return undefined;
            }
          },
          set(newValue) {
            if (this.$data.hasOwnProperty(key)) {
              Reflect.set(this.$data, key, newValue);
            } else if (this.$option.computed.hasOwnProperty(key)) {
              Reflect.set(this.$option.computed, key, newValue);
            }
          }
        });
      });
    });
  }
}

export default Vue;
