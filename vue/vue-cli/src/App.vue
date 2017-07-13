<template>
  <div>
    <h1> Server Status: {{status}} </h1>
    <app-home></app-home>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status: 'Critical'
    }
  }
}
</script>

<style lang="scss">

</style>
