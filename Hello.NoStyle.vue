<template>
  <p class="hello-vue">{{message}}</p>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: 'Hello, Vue without style tag'
    }
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>