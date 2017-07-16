<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <h1>Vue Resource</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.userName">
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click.prevent="onSubmit">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    }
  }
}
</script>
