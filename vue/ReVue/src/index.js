import Vue from "./Vue.js";

const vm = new Vue({
  el: "#app",
  data: {
    msg: "hello word",
    text: "iam a string",
    obj: {
      key: "value"
    }
  }
});
console.log(vm);
console.log(vm.msg);
