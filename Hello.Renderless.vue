<script>
export default {
  name: 'HelloRenderless',
  data () {
    return {
      message: 'Hello, Renderless Vue component!',
      total: 0
    }
  },
  methods: {
    up () {
      this.total = this.total + 1
    },
    down () {
      this.total = this.total - 1
    }
  },
  render (h) {
    return this.$scopedSlots.default({
      message: this.message,
      total: this.total,
      up: this.up,
      down: this.down
    })
  }
}
</script>