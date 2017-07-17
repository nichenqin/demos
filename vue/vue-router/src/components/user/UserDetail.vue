<template>
  <div>
    <h3>Edit User</h3>
    <hr>
    <p>router id: {{ id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userEdit', params: { id }, query: { local: 'en', q: 100 } }">Edit User {{ id }}</router-link>
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
