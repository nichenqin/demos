<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <select class="form-control" v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <button class="btn btn-primary" @click="show = !show">show alert</button>
        <br>
        <br>
        <transition :name="alertAnimation">
          <div v-if="show" class="alert alert-info">some info</div>
        </transition>
        <transition name="slide">
          <div v-if="show" class="alert alert-info">some slide info</div>
        </transition>
        <transition name="fade" appear mode="out-in">
          <!--only one element inside this transirion  -->
          <div v-if="show" class="alert alert-info" key="info">some slide info</div>
          <div v-else class="alert alert-warning" key="warning">some slide warning info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      alertAnimation: 'fade'
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {
  /* opacity: 1; */
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px)
  }
  to {
    transform: translateY(0)
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(20px)
  }
}
</style>
