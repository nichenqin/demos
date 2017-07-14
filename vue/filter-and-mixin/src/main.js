import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
  created() {
    console.log('Globle Mixin - Created Hook');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
