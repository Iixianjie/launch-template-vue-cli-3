<script>
export default {
  name: 'BaseLayout',
  render() {
    return (
      <div>
        <div>base layout</div>
        <router-view></router-view>
      </div>
    )
  }
}
</script>
