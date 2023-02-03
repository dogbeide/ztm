<template>
  <div class="result">
      <div class="title">{{ results[resultIndex].title }}</div>
      <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["answersCorrect", "results"],
  computed: {
    resultIndex() {
      let index = 0;
      this.results.forEach((result, i) => {
        if(this.answersCorrect >= result.min && this.answersCorrect <= result.max) {
          index = i;
        }
      });

      return index;
    },
  },
}
</script>

<style>

</style>