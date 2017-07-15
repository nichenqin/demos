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
        <component :is="currentComponent" @answered="answered($event)" @comfirmed="isRightAnswer = false"></component>
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
