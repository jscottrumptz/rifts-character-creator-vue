<template>
  <div>
  <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
    Create a New Character
  </h2>
  <PickPsionics/>
  </div>
</template>

<script>
import PickPsionics from "@/components/sections/PickPsionics";

export default {
  name: 'CharacterCreator',
  components: {PickPsionics}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
