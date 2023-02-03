let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      r: 141,
      g: 129,
      b: 243
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
      let text = `
        transform: ${this.computed_styles.transform};
        background: ${this.color};
      `
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
    color() {
      if (this.perspective <= 100) { 
        return `rgb(
          ${this.r * (this.perspective/100)},
          ${this.g * (this.perspective/100)},
          ${this.b * (this.perspective/100)}
        )`
      } else if (this.perspective > 100 && this.perspective < 333) {
        return `rgb(
          ${this.r + ((this.perspective - 100)/3)},
          ${this.g},
          ${this.b}
        )` 
      } else if (this.perspective >= 333 && this.perspective < 666) {
        return `rgb(
          ${255 - (this.perspective - 333)/3},
          ${this.g + (this.perspective - 333)/3},
          ${this.b}
        )` 
      } else if (this.perspective >= 666) {
        return `rgb(
          ${this.r + (this.perspective - 666) / (333/this.r)},
          ${255},
          ${this.b + (this.perspective - 666) / (333/this.b)}
        )` 
      }
    },
    computed_styles() {
      return {
        transform: `
          perspective(${this.perspective}px) 
          rotateX(${this.rotateX}deg) 
          rotateY(${this.rotateY}deg) 
          rotateZ(${this.rotateZ}deg)`,
        background: this.color
      }
    },
    x_style() {
      return this.rotateX == 0 ? {
        color: '#fff'
      } : this.rotateX > 0 ? {
        color: `rgb(255,${255 - this.rotateX},${255 - this.rotateX})`
      } : {
        color: `rgb(${255 + parseInt(this.rotateX)},255,${255 + parseInt(this.rotateX)})`
      }
    },
    y_style() {
      return this.rotateY == 0 ? {
        color: '#fff'
      } : this.rotateY > 0 ? {
        color: `rgb(255,${255 - this.rotateY},${255 - this.rotateY})`
      } : {
        color: `rgb(${255 + parseInt(this.rotateY)},255,${255 + parseInt(this.rotateY)})`
      }
    },
    z_style() {
      return this.rotateZ == 0 ? {
        color: '#fff'
      } : this.rotateZ > 0 ? {
        color: `rgb(255,${255 - this.rotateZ},${255 - this.rotateZ})`
      } : {
        color: `rgb(${255 + parseInt(this.rotateZ)},255,${255 + parseInt(this.rotateZ)})`
      }
    },
  }
}).mount('#app')