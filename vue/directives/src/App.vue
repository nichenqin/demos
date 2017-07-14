<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build in Directives </h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight.delayed="'red'">Color this</p>
        <p v-local-highlight.delayed.blink="'red'">Color this local</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value;
          let subColor = 'blue';
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == subColor ? currentColor = mainColor : currentColor = subColor;
              console.log(currentColor);
              el.style.backgroundColor = currentColor;
            }, 1000)
          }, delay)
        } else {
          setTimeout(() => {
            el.style.backgroundColor = binding.value;
          }, delay)
        }
      }
    }
  }
}
</script>

<style>

</style>
