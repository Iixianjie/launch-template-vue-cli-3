<template>
  <div id="app">
    <div>
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/user/login">User-login</router-link> |
      <router-link to="/user/register">user-register</router-link>
    </div>
    <router-view/>
  </div>
</template>