import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      el.style.backgroundColor = binding.value;
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
