<template>
  <div>
    <Login v-if="!loggedIn"/>
  </div>
</template>

<script>
import Login from "./sections/Login";

export default {
  name: 'Home',
  props: {
    loggedIn: Boolean
  },
  components: { Login }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
