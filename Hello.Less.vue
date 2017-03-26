<template>
  <p class="hello-less">{{message}}</p>
</template>

<script>
export default {
  name: 'hello-less',
  data () {
    return {
      message: 'Hello, Vue with Less!'
    }
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less">
p {
  padding: 100px;
  &.hello-less {
    color: lightseagreen;
    font-weight: bold;
  }
}
</style>
