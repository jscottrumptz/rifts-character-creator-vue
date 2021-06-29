<template>
  <div>
    <Login v-if="!loggedIn"/>
    <Welcome v-if="loggedIn"/>
  </div>
</template>

<script>
import Login from "./sections/Login";
import Welcome from "./sections/Welcome";

export default {
  name: 'Home',
  props: {
    loggedIn: Boolean
  },
  components: {Welcome, Login }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
