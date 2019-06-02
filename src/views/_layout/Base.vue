<script>
export default {
  name: 'BaseLayout',
  render() {
    return (
      <PageTranstion type="fade-page">
        <router-view />
      </PageTranstion>
    );
  }
};
</script>
