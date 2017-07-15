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
          <!--only one element inside this transition  -->
          <div v-if="show" class="alert alert-info" key="info">some slide info</div>
          <div v-else class="alert alert-warning" key="warning">some slide warning info</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled" :css="false">
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <hr>
        <br>
        <br>
        <button class="btn btn-success" @click="selectedAlert = 'success-alert'">Success Alert</button>
        <button class="btn btn-danger" @click="selectedAlert = 'danger-alert'">Danger Alert</button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedAlert"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br></br>
        <transition-group name="slide" tag="ul" class="list-group">
          <li class="list-group-item" v-for="(number,index) in numbers" :key="number" @click="removeItem(index)" style="cursor: pointer">{{ number }}</li>
        </transition-group>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import dangerAlert from './DangerAlert.vue';
import successAlert from './SuccessAlert.vue';

export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 300,
      selectedAlert: 'success-alert',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  components: {
    dangerAlert, successAlert
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      console.log('enter');
      const interval = setInterval(() => {
        this.elementWidth++;
        el.style.width = this.elementWidth + 'px';
        if (+this.elementWidth >= 300) {
          clearInterval(interval);
          done();
        }
      }, 20)
      done();
    },
    afterEnter(el) { console.log('after enter'); },
    enterCancelled(el) { console.log('enter cancelled'); },
    beforeLeave(el) {
      console.log('before leave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      const interval = setInterval(() => {
        this.elementWidth--;
        el.style.width = this.elementWidth + 'px';
        if (this.elementWidth <= 100) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterLeave(el) { console.log('after leave'); },
    leaveCancelled(el) { console.log('leave cancelled'); },
    addItem() {
      this.numbers.push(this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
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
