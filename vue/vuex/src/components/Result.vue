<template>
  <div>
    <p>count: {{ doubleCounter }}</p>
    <p>count clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    }),
  }
}
</script>
