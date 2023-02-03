let vm = Vue.createApp({
  // template: `{{ message }}`
})

vm.component('basic', {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Basic component, hi what's up"
    }
  }
})

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2')