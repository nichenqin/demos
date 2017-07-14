<template>
  <div>
    <div class="switch" id="on" @click="switched(true)" :class="{'active': value}">On</div>
    <div class="switch" id="off" @click="switched(false)" :class="{'active': !value}">Off</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    switched(isOn) {
      this.$emit('switchOn', isOn);
    }
  }
}
</script>

<style>
.switch {
  width: 40px;
  height: 20px;
  background: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background: lightgreen;
}

#off:hover,
#off.active {
  background: lightcoral;
}
</style>
