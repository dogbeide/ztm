<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>

  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">some text</h2>
    <h2 v-else key="other">Anther txt</h2>
  </transition>
  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  opacity: 0;
  transition: all 0.08s linear;
}
</style>


