<template>
  <div>
    <button class="btn btn-primary" @click="increace">Increment</button>
    <button class="btn btn-primary" @click="decreace">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increace() {
      this.$store.state.counter++;
    },
    decreace() {
      this.$store.state.counter--;
    }
  }
}
</script>

