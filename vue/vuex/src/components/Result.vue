<template>
  <div>
    <p>count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>
