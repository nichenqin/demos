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
        <hr>
        <button class="btn btn-success" @click="fetchData">fetch data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" :key="user.userName">{{user.userName}} / {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const url = 'https://vue-resource-6724f.firebaseio.com/';

export default {
  data() {
    return {
      user: {
        userName: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    onSubmit() {
      this.$http
        .post(`${url}data.json`, this.user)
        .then(response => { console.log(response); });
    },
    fetchData() {
      this.$http
        .get(`${url}data.json`)
        .then(response => response.json())
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
}
</script>
