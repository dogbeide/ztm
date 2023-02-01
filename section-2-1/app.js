const vm = Vue.createApp({
  data() {
    return {
      firstName: 'David',
      middleName: '',
      lastName: 'Ogbeide',
      url: 'https://dogbeide.github.io',
      raw_url: '<a href="https://dogbeide.github.io" target="_blank">portfolio</a>',
      age: 27
    }
  },
  methods: {
    asdf: () => 'yuss',
    increment() {
      this.age++
    },
    updateMiddleName(event) {
      this.middleName = event.target.value
    },
    updateLastName(msg, event) {
      // event.preventDefault();
      // console.log(msg)
      this.lastName = event.target.value
    }
    // decrement() {
    //   this.age--
    // }
  },
  computed: {
    fullName() {
      console.log('fullName() computed property')
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 27;
      }, 3000);
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Osamede';
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Boyowa',
//       lastName: 'Ogbeide'
//     }
//   }
// }).mount('#app2')