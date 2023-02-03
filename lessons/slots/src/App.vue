<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="username">
      <input type="text" placeholder="email">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>fill in extra empty slot</p>
  </app-form>
  <app-form>
    <template v-slot:help>
      <p>send us a msg for feedback!</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="msg">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "@/components/Form.vue"

export default {
  name: "App",
  components: {
    AppForm
  },
  data() {
    return {
      help: "how to fill out this form"
    }
  }
}
</script>

