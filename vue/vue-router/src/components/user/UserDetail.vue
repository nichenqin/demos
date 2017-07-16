<template>
  <div>
    <h3>Edit User</h3>
    <hr>
    <p>router id: {{id}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route'(to, from) {
      this.id = to.params.id;
    }
  }
}
</script>