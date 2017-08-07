<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Age: {{userAge}}</p>
    <p>random</p>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    userAge: Number
  },
  created() {
    eventBus.$on('changeAge', (age) => {
      this.userAge = age;
    })
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
