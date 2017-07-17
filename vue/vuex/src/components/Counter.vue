<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement(100)">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({by:50,duration:1000})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'asyncIncrement', 'asyncDecrement'
    ])
  }
}
</script>

