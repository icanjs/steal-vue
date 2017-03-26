<template>
  <p class="hello-vue">{{message}}</p>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
p {
  padding: 100px;
}

p.hello-vue {
  color: lightseagreen;
  font-weight: bold;
}
</style>
