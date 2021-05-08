<template>
  <div>
    <Login v-if="!loggedIn"/>
    <PickRace/>
    <PickPsionics/>
  </div>
</template>

<script>
import PickPsionics from "./sections/PickPsionics";
import PickRace from "./sections/PickRace";

import Login from "./sections/Login";

export default {
  name: 'Home',
  props: {
    loggedIn: Boolean
  },
  components: {Login, PickRace, PickPsionics}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
