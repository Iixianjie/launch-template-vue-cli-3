<template lang="pug">
  .home 
    div(:class="sty.test") home
    HomeFoot
</template>

<script>
import HomeFoot from './HomeFoot';

export default {
  components: {
    HomeFoot
  }
}
</script>

<style lang="scss" src="./home.scss" module="sty"></style>
