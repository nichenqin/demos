import Vue from "./Vue.js";
let vm = new Vue({
  el: "#app",
  data: {
    formodel: "this is for v-model",
    fortext: "this is for v-text",
    forhtml: '<span style="color: #f00;">我是v-html指令的结果</span><span></spam>',
    red: "red",
    array: ["sdf", "sdfd"]
  },
  methods: {
    changeclass: function(e) {
      var rand = Math.round(Math.random() * 1000000);
      console.log(e.target.previousSibling.previousSibling);
      e.target.style.backgroundColor = "#" + rand;
    },
    addItem: function(value) {
      this.array.push(value);
      console.log(this.array);
    },
    change: function() {
      this.array[0] = "vue无法监听到这次改变";
    }
  }
});
// console.log(rand)
// let vm = new MVVM({
//     el: '#app',
//     data: {
//         firstName: "hello ",
//         htmlStr: '<span style="color: #f00;">我是v-html指令的结果</span><span></spam>',
//         child: {
//             lastName: ' World !'
//         },
//         array: ["sdf","sdfd"]
//     },
//     methods: {
//         clickBtn: function (e) {
//             this.array[0] = "dfsdf";
//         },
//         addItem: function (value) {
//             this.array.push(value);
//             console.log(this.array);
//         }
//     }
// });

console.log(vm);
