<template>
  <div>
    <h1> New </h1>
    <button @click="counter++">increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>

<style>

</style>
