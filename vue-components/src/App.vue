<template>
  <p>some text</p>
  <Greeting></Greeting>
</template>

<script>
  import Greeting from '@/components/Greeting.vue'

  export default {
    name: 'App',
    components: {
      Greeting
    }
  }
</script>
