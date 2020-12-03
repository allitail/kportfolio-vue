<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <signUp></signUp>
    <!-- <login></login> -->
    <userList></userList>
  </div>
</template>

<script>
import signUp from './components/signUp.vue'
// import login from './components/login.vue'
import userList from './components/userList.vue'

export default {
  name: 'App',
  components: {
    signUp,
    // login,
    userList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
