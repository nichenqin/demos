<template>
  <div>
    <h1>Filter & Mixin</h1>
    <hr>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFuits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixins } from './fruitMixins';
export default {
  mixins: [fruitMixins],
  created() {
    console.log('List Created');
  }
}
</script>
