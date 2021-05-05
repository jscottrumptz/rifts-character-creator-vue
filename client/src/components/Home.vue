<template>
  <div>
  <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
    Home Page
  </h2>
  <PickRace/>
  <PickPsionics/>
  </div>
</template>

<script>
import PickPsionics from "@/components/sections/PickPsionics";
import PickRace from "@/components/sections/PickRace";

export default {
  name: 'Home',
  components: {PickRace, PickPsionics}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
