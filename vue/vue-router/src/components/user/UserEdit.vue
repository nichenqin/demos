<template>
  <div>
    <h3>Edit User</h3>
    <input type="text" v-model="id">
    <p>User Id: {{ id }}</p>
    <p>User Local: {{ local }}</p>
    <p>User Q: {{ q }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      local: this.$route.query.local,
      q: this.$route.query.q
    }
  }
}
</script>

