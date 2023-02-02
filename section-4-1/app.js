let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  template: `{{ message }}`
  // beforeCreate() {
  //   console.log('beforeCreate()', this.message)
  // },
  // created() {
  //   console.log('created()', this.message)
  // },
  // beforeMount() {
  //   console.log('beforeMount()', this.$el)
  // },
  // mounted() {
  //   console.log('mounted()', this.$el)
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate()')
  // },
  // updated() {
  //   console.log('updated()')
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount()')
  // },
  // unmounted() {
  //   console.log('unmounted()')
  // }
})


vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)

let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    return Vue.h(
      'h1',
      this.message
    )
  }
}).mount('#app2')