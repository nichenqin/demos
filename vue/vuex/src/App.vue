<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-result></app-result>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  components: {
    appCounter: Counter,
    appResult: Result
  }
}
</script>
