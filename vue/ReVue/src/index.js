import Vue from "./Vue.js";

const vm = new Vue({
  el: "#app",
  data: {
    msg: "hello world",
    number: 1001,
    obj: {
      key: "value"
    },
    arr: [1, 2, 3]
  },
  methods: {
    onClick() {
      console.log("methods");
    }
  }
});
console.log("vm", vm);

vm.arr = ["array1", "array2"];

vm.arr.push("array3");
