class Vue {
  constructor(option) {
    this.$date = option.data || {};
    this.$el =
      typeof option.el === "string"
        ? document.querySelector(option.el)
        : option.el;

    option = {
      computed: {},
      methods: {},
      ...option
    };

    this.$option = option;
  }
}

export default Vue;
