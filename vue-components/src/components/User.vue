<template>
  <button type="button" @click="onUpdateAge">Update age</button>
  <p>The User is {{ age  }} years old</p>
  <p>{{ ageX2 }}</p>
</template>

<script>
export default {
  name: 'User',
  props: ["age"],
  emits: ['age-inc'],
  computed: {
    ageX2() {
      return this.age*2
    }
  },
  methods: {
    onUpdateAge() {
      this.$emit('age-inc', 3)
    }
  }
}
</script>