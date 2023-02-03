<template>
  <div class="questions-ctr">
      <div class="progress">
          <div class="bar" :style="{
            width: `${questionsAnswered / questions.length * 100}%`
          }"></div>
          <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
      </div>

      <transition-group name="fade">
        <template v-for="(question, index) in questions" :key="question.q">
        <div class="single-question" v-show="activeQuestion == index">
          <div class="question">{{ question.q }}</div>
          <div class="answers">
              <div class="answer"
                v-for="answer in question.answers" :key="answer.text"
                @click.prevent="onClickAnswer(answer)"
              >{{ answer.text }}</div>
          </div>
        </div>
        </template>
      </transition-group>
      
      
  </div>
</template>

<script>
export default {
  name: 'Questions',
  props: {
    questions: Array,
    questionsAnswered: Number,
    activeQuestion: Number,
  },
  emits: ['question-answered'],
  methods: {
    onClickAnswer(answer) {
      const correct = answer.is_correct;
      this.$emit('question-answered', correct);
    }
  }
}
</script>

<style>

</style>