<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-result></app-result>
        <hr>
        <input type="text" v-model="value" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  computed: {
    value: {
      get() { return this.$store.getters.value },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result
  }
}
</script>
