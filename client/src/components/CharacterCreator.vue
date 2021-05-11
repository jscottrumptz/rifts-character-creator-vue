<template>
  <div>
    <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
      Create a New Character
    </h2>
    <div v-if="newCharacter.race.name != ''" class="inline-flex">
      <p class="ml-6 my-auto text-white text-lg font-medium"> {{newCharacter.race.name}}<span v-if="newCharacter.occ.name != ''"> || {{newCharacter.race.occ}}</span></p>
      <button v-on:click="saveCharacter" class="ml-6 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Save Character</button>
    </div>
    <PickRace v-if="newCharacter.race.name === ''" :newCharacter="newCharacter"/>
    <PickPsionics v-if="newCharacter.psionics.ability != 'None'" :newCharacter="newCharacter"/>
  </div>
</template>

<script>
import PickPsionics from "./sections/PickPsionics";
import PickRace from "./sections/PickRace";
import gql from "graphql-tag";

const Character = require('../../lib/Character');

export default {
  components: {PickRace, PickPsionics},
  name: 'CharacterCreator',
  data: function(){
    return {
      newCharacter: new Character
    }
  },
  methods: {
    async saveCharacter() {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation addCharacter($characterData: JSON) {
        addCharacter(characterData: $characterData) {
          _id
          createdAt
          characterData
        }
      }`,
          variables: {characterData: this.newCharacter}
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
