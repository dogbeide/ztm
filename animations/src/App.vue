<template>
  <button type="button" @click="flag = !flag">Toggle animation</button>

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">some text</h2>
    <h2 v-else key="other">Anther txt</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">some more text</h2>
  </transition> -->

  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h1 v-if="flag">js animated</h1>
  </transition>
  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter()', el)
    },
    enter(el) {
      console.log('enter()', el)

      // const animation = el.animate([{ transform: "scale3d(0,0,0)"}, {}], {
      //   duration: 1000
      // })
      // animation.onFinish = () => {done()}
    },
    afterEnter(el) {
      console.log('afterEnter()', el)
    },
    beforeLeave(el) {
      console.log('beforeLeave()', el)
    },
    leave(el) {
      console.log('leave()', el)
      // const animation = el.animate([{ }, {transform: "scale3d(0,0,0)"}], {
      //   duration: 1000
      // })
      // animation.onFinish = () => {done()}
    },
    afterLeave(el) {
      console.log('afterLeave()', el)
    }
  }
}
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
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

.zoom-enter-from {
  opacity: 0;
}
.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 0.2s linear;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 0.15s linear;
}
.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to {
    transform: scale(0,0);
  }
}
</style>


