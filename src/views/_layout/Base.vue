<script>
export default {
  name: 'BaseLayout',
  render() {
    return (
      <PageTranstion type="bk-fade">
        <router-view />
      </PageTranstion>
    );
  }
};
</script>
