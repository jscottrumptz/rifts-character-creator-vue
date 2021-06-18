<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Spells
      </h3>
      <p class="inline-block mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, and Other
      </p>
      <a v-on:click="extendSpells = !extendSpells" class="text-xs inline-block text-gray-300 hover:text-gray-500 p-1 px-2 ml-6 rounded-md bg-gray-900" href="#" onclick="return false;">
        <span v-if="extendSpells === false">show descriptions</span>
        <span v-if="extendSpells === true">hide descriptions</span>
      </a>
    </div>
    <div class="px-4 py-5 p-0">
      <ul v-for="(spells,index) in spells.known" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="border-t-8 border-gray-800 relative bg-white py-5 px-4">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <p class="text-lg font-medium text-gray-900 truncate">{{spells.name}}</p>
              <p class="text-sm mb-2 text-gray-500">({{spells.group}})</p>
              <p class="text-sm p-2 bg-gray-200 font-medium text-gray-700">
                <span v-if="spells.cost" class="text-xs">Cost: <span class="font-normal"> {{spells.cost}} </span><br></span>
                <span v-if="spells.range" class="text-xs">Range: <span class="font-normal"> {{spells.range}} </span><br></span>
                <span v-if="spells.duration" class="text-xs">Duration: <span class="font-normal"> {{spells.duration}} </span><br></span>
                <span v-if="spells.damage" class="text-xs">Damage: <span class="font-normal"> {{spells.damage}} </span><br></span>
                <span v-if="spells.savingThrow" class="text-xs">Saving Throw: <span class="font-normal"> {{spells.savingThrow}} </span><br></span>
                <span v-if="spells.lengthOfTrance" class="text-xs">Trance Length: <span class="font-normal"> {{spells.lengthOfTrance}} </span><br></span>
                <span v-if="spells.base" class="text-xs">Base Skill: <span class="font-normal"> {{spells.base}} </span><br></span>
                <span v-if="spells.limitations" class="text-xs">Limitations: <span class="font-normal"> {{spells.limitations}} </span><br></span>
                <span v-if="spells.attacksPerMelee" class="text-xs">Attacks per Melee: <span class="font-normal"> {{spells.attacksPerMelee}} </span><br></span>
              </p>
            </div>
          </div>
          <!-- Hidden Toggle Class -->
          <div v-bind:class="{ 'hidden': !extendSpells }"  class="mt-1">
            <p class="whitespace-pre-wrap text-sm text-gray-600">
              {{spells.description}}
              <span v-if="spells.note" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{spells.note}}</span>
              <span v-if="spells.gmNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{spells.gmNote}}</span>
              <span v-if="spells.specialNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{spells.specialNote}}</span>
              <span v-if="spells.penalties" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{spells.penalties}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Magic",
  props: {
    spells: Object
  },
  data: function(){
    return {
      extendSpells: true,
    }
  },
}
</script>

<style scoped>

</style>