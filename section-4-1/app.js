let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

vm.mount();

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)