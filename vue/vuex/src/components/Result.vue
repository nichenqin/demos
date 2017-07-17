<template>
  <div>
    <p>count: {{ doubleCounter }}</p>
    <p>count clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ]),
  }
}
</script>
