<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/user/login">User-login</router-link> |
      <router-link to="/user/register">user-register</router-link>
    </div>
    <PageTranstion type="bk-fade">
      <router-view/>
    </PageTranstion>
  </div>
</template>

<style lang="css">
  body, html {
    width: 100%;
    height: 100%;
  }

  .navbar {
    position: relative;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
</style>