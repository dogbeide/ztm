<template>
  <h1>Home text</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('unmounted()')
  },
  activated() {
    console.log('activated()')
  },
  deactivated() {
    console.log('deactivated()')
  }
}
</script>