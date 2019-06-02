<script>
export default {
  name: 'UserLayout',
  render() {
    return (
      <PageTranstion type="fade-page">
        <router-view />
      </PageTranstion>
    )
  }
}
</script>
