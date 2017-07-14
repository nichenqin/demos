<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filter & Mixin</h1>
        <p>{{ text | toUpperCase }}</p>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFuits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFuits() {
      return this.fruits.filter(fruit => fruit.match(this.filterText))
    }
  }
}
</script>

<style>

</style>
