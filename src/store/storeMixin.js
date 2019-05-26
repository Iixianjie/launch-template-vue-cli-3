export default {
  methods: {
    $commit(...arg) {
      this.$store.commit(...arg);
    },
    $dispatch(...arg) {
      this.$store.dispatch(...arg);
    },
  }
};
