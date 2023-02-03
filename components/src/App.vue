<template>
  <h3>some text</h3>
  <greeting :age="age"></greeting>
  <user :age="age" @age-inc="updateAge" :updateAgeCB="updateAgeCB"></user>
</template>

<script>

import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      if (this.age + num >= 130) {
        this.age = 130
      } else {
        this.age += num
      }
    },
    updateAgeCB(num) {
      this.updateAge(num)
    }
  }
}
  
</script>
