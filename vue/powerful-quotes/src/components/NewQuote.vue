<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <label for="">Quote</label>
      <textarea class="form-control" rows="3" v-model="quote"></textarea>
    </div>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <button class="btn btn-primary btn-block" @click.prevent="createNewQuote">create New Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    createNewQuote() {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    }
  }
}
</script>
