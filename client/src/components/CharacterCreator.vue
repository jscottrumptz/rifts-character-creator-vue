<template>
  <div>
    <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
      Create a New Character
    </h2>
    <form v-if="newCharacter.race.name !== ''" class="inline-flex">
      <input type="text" v-model="charName" id="charName" name="charName" placeholder="character name" class="ml-10 max-h-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" >
      <p class="ml-2 my-auto text-white text-lg font-medium"> | {{newCharacter.race.name}}<span v-if="newCharacter.occ.name !== ''"> | {{newCharacter.occ.name}}</span></p>
      <button v-on:click="saveCharacter" class="ml-6 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Save Character</button>
    </form>
    <PickRace v-if="newCharacter.race.name === ''" :newCharacter="newCharacter"/>
    <Feeble v-if="newCharacter.race.name !== '' && !newCharacter.attributes.confirmAttributes" :attributes="newCharacter.attributes" :bonuses="newCharacter.bonuses"/>
    <PickRandomPsionics v-if="newCharacter.psionics.ability !== 'None' && newCharacter.attributes.confirmAttributes && !newCharacter.psionics.selected" :newCharacter="newCharacter"/>
    <PickOCC v-if="newCharacter.race.name !== '' && newCharacter.occ.name === '' && newCharacter.attributes.confirmAttributes && (newCharacter.psionics.selected || newCharacter.psionics.ability === 'None')" :newCharacter="newCharacter"/>
    <PickOCCSkills v-if="newCharacter.occ.name !== '' && !newCharacter.skills.selected && newCharacter.skills.choices " :newCharacter="newCharacter"/>
    <PickOCCRelatedSkills v-if="newCharacter.occ.name !== '' && !newCharacter.skills.selected && !newCharacter.skills.choices" :newCharacter="newCharacter"/>
    <PickSecondarySkills v-if="newCharacter.skills.selected && !newCharacter.skills.secondary" :newCharacter="newCharacter"/>
  </div>
</template>

<script>
import PickRandomPsionics from "./sections/PickRandomPsionics";
import PickRace from "./sections/PickRace";
import gql from "graphql-tag";
import Feeble from "./sections/Feeble";
import PickOCC from "./sections/PickOCC";
import PickOCCRelatedSkills from "./sections/PickOCCRelatedSkills";
import PickOCCSkills from "./sections/PickOCCSkills";
import PickSecondarySkills from "./sections/PickSecondarySkills";

const Character = require('../../lib/Character');

export default {
  components: {PickSecondarySkills, PickOCCSkills, PickOCCRelatedSkills, PickOCC, Feeble, PickRace, PickRandomPsionics},
  name: 'CharacterCreator',
  data: function(){
    return {
      newCharacter: new Character,
      charName: ''
    }
  },
  methods: {
    async saveCharacter() {
      this.newCharacter.info.name = this.charName
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
