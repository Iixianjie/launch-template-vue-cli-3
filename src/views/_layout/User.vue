<script>
export default {
  name: 'UserLayout',
  render() {
    return (
      <PageTranstion type="bk-fade">
        <router-view />
      </PageTranstion>
    )
  }
}
</script>
