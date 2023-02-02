let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    }
  },
  methods: {
    onReset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async onCopy() {
      let text = `transform: ${this.computed_styles.transform};`
      await navigator.clipboard.writeText(text)
      alert('Copied stats to clipboard')
    }
  },
  computed: {
    get_perspective() {
      return this.perspective
    },
    get_rotateX() {
      return this.rotateX
    },
    get_rotateY() {
      return this.rotateY
    },
    get_rotateZ() {
      return this.rotateZ
    },
    computed_styles() {
      return {
        transform: `
          perspective(${this.perspective}px) 
          rotateX(${this.rotateX}deg) 
          rotateY(${this.rotateY}deg) 
          rotateZ(${this.rotateZ}deg)`
      }
    }
  }
}).mount('#app')