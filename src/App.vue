<template>
  <div id="app">
    <div>
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/user/register">user-register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    width: 100%;
    height: 100%;
  }
</style>
