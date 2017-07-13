<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <keep-alive>
          <component :is="selectedComponent">
            default quote
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data() {
    return {
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author,
  }
}
</script>

<style>

</style>
