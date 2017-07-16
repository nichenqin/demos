<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <transition name="flip" mode="out-in">
          <component :is="currentComponent" @answered="answered($event)" @comfirmed="isRightAnswer = false"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Answer from './components/Answer.vue';
import Question from './components/Question.vue';

export default {
  data() {
    return {
      isRightAnswer: false
    }
  },
  methods: {
    answered(isCorrect) {
      this.isRightAnswer = isCorrect;
    }
  },
  computed: {
    currentComponent() {
      return this.isRightAnswer ? 'app-answer' : 'app-question';
    }
  },
  components: {
    appAnswer: Answer,
    appQuestion: Question
  }
}
</script>

<style>
.flip-enter {}

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave {}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
