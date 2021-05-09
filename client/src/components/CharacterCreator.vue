<template>
  <div>
    <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
      Create a New Character
    </h2>
    <PickRace :newCharacter="newCharacter"/>
    <PickPsionics/>
  </div>
</template>

<script>
import PickPsionics from "./sections/PickPsionics";
import PickRace from "./sections/PickRace";

const Character = require('../../lib/Character');

export default {
  components: {PickRace, PickPsionics},
  name: 'CharacterCreator',
  data: function(){
    return {
      newCharacter: new Character
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
