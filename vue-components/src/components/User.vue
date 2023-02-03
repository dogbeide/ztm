<template>
  <button type="button" @click="age++">Update age</button>
  <p>The User is {{ age  }} years old</p>
</template>

<script>
export default {
  name: 'User',
  props: ["age"]
}
</script>