<template>
  <div>
    <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
      Home Page
    </h2>
    <Login v-if="!loggedIn"/>
    <Signup v-if="!loggedIn"/>
    <PickRace/>
    <PickPsionics/>
  </div>
</template>

<script>
import PickPsionics from "./sections/PickPsionics";
import PickRace from "./sections/PickRace";
import Login from "./sections/Login";
import Signup from "./sections/Signup";

export default {
  name: 'Home',
  props: {
    loggedIn: Boolean
  },
  components: {Signup, Login, PickRace, PickPsionics}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
