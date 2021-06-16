<template>
  <div>
    <h2 class="text-xl font-bold text-center text-gray-600">Current Attributes</h2>
    <p class="text-lg font-medium text-center text-gray-400">
      IQ: <span class="text-gray-50">{{newCharacter.attributes.iq.total}}</span> ||
      ME: <span class="text-gray-50">{{newCharacter.attributes.me.total}}</span> ||
      MA: <span class="text-gray-50">{{newCharacter.attributes.ma.total}}</span> ||
      PS: <span class="text-gray-50">{{newCharacter.attributes.ps.total}}</span> ||
      PP: <span class="text-gray-50">{{newCharacter.attributes.pp.total}}</span> ||
      PE: <span class="text-gray-50">{{newCharacter.attributes.pe.total}}</span> ||
      PB: <span class="text-gray-50">{{newCharacter.attributes.pb.total}}</span> ||
      Spd: <span class="text-gray-50">{{newCharacter.attributes.spd.total}}</span>
    </p>
    <h2 class="text-xl font-bold text-center text-gray-600">Current Secondary Stats</h2>
    <p class="text-lg font-medium text-center text-gray-400">
      HP: <span class="text-gray-50">{{newCharacter.secondaryStats.hp.total}}</span> ||
      SDC: <span class="text-gray-50">{{newCharacter.secondaryStats.sdc.total}}</span> ||
      MDC: <span class="text-gray-50">{{newCharacter.secondaryStats.mdc.total}}</span> ||
      PPE: <span class="text-gray-50">{{newCharacter.secondaryStats.ppe.total}}</span> ||
      ISP: <span class="text-gray-50">{{newCharacter.secondaryStats.isp.total}}</span>
    </p>
    <form v-if="newCharacter.race.name !== ''" class="inline-flex">
      <input type="text" v-model="charName" id="charName" name="charName" placeholder="character name" class="ml-10 max-h-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" >
      <p class="ml-2 my-auto text-white text-lg font-medium"> | {{newCharacter.race.name}}<span v-if="newCharacter.occ.name !== ''"> | {{newCharacter.occ.name}}</span></p>
      <button v-on:click="saveCharacter" class="ml-6 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Save Character</button>
    </form>
    <PickRace v-if="newCharacter.race.name === ''" :newCharacter="newCharacter"/>
    <Feeble v-if="newCharacter.race.name !== '' && !newCharacter.attributes.confirmAttributes" :attributes="newCharacter.attributes" :bonuses="newCharacter.bonuses" :newCharacter="newCharacter"/>
    <PickRandomPsionics v-if="(newCharacter.psionics.ability === 'Major' || newCharacter.psionics.ability === 'Minor') && newCharacter.attributes.confirmAttributes && !newCharacter.psionics.selected" :newCharacter="newCharacter"/>
    <PickOCC v-if="newCharacter.race.name !== '' && newCharacter.occ.name === '' && newCharacter.attributes.confirmAttributes && (newCharacter.psionics.selected || newCharacter.psionics.ability === 'None')" :newCharacter="newCharacter"/>
    <PickPsionics v-if="newCharacter.attributes.confirmAttributes && (newCharacter.psionics.ability === 'Racial' || newCharacter.psionics.ability === 'OCC') && !newCharacter.psionics.selected" :newCharacter="newCharacter"/>
    <PickSkills v-if="newCharacter.occ.name !== '' && !newCharacter.skills.selected && newCharacter.skills.choices && (newCharacter.psionics.selected || newCharacter.psionics.ability === 'None')" :newCharacter="newCharacter"/>
    <PickRelatedSkills v-if="newCharacter.occ.name !== '' && !newCharacter.skills.selected && !newCharacter.skills.choices" :newCharacter="newCharacter"/>
    <PickSecondarySkills v-if="newCharacter.skills.selected && !newCharacter.skills.secondary" :newCharacter="newCharacter"/>
  </div>
</template>

<script>
import PickRandomPsionics from "./sections/PickRandomPsionics";
import PickRace from "./sections/PickRace";
import gql from "graphql-tag";
import Feeble from "./sections/Feeble";
import PickOCC from "./sections/PickOCC";
import PickRelatedSkills from "./sections/PickRelatedSkills";
import PickSkills from "./sections/PickSkills";
import PickSecondarySkills from "./sections/PickSecondarySkills";
import PickPsionics from "./sections/PickPsionics";

const Character = require('../../lib/Character');

export default {
  components: { PickPsionics, PickSecondarySkills, PickSkills, PickRelatedSkills, PickOCC, Feeble, PickRace, PickRandomPsionics },
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
