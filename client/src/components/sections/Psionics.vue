<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Psionics
      </h3>
      <p class="inline-block mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, and Other
      </p>
      <a v-on:click="extendPsionics = !extendPsionics" class="text-xs inline-block text-gray-300 hover:text-gray-500 p-1 px-2 ml-6 rounded-md bg-gray-900" href="#" onclick="return false;">
        <span v-if="extendPsionics === false">show descriptions</span>
        <span v-if="extendPsionics === true">hide descriptions</span>
      </a>
    </div>
    <div class="px-4 py-5 p-0">
      <ul v-for="(psionics,index) in psionics.known" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="border-t-8 border-gray-800 relative bg-white py-5 px-4">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <p class="text-lg font-medium text-gray-900 truncate">{{psionics.name}}</p>
              <p class="text-sm mb-2 text-gray-500">({{psionics.group}})</p>
              <p class="text-sm p-2 bg-gray-200 font-medium text-gray-700">
              <span v-if="psionics.cost" class="text-xs">Cost: <span class="font-normal"> {{psionics.cost}} </span><br></span>
              <span v-if="psionics.range" class="text-xs">Range: <span class="font-normal"> {{psionics.range}} </span><br></span>
              <span v-if="psionics.duration" class="text-xs">Duration: <span class="font-normal"> {{psionics.duration}} </span><br></span>
              <span v-if="psionics.damage" class="text-xs">Damage: <span class="font-normal"> {{psionics.damage}} </span><br></span>
              <span v-if="psionics.savingThrow" class="text-xs">Saving Throw: <span class="font-normal"> {{psionics.savingThrow}} </span><br></span>
              <span v-if="psionics.lengthOfTrance" class="text-xs">Trance Length: <span class="font-normal"> {{psionics.lengthOfTrance}} </span><br></span>
              <span v-if="psionics.base" class="text-xs">Base Skill: <span class="font-normal"> {{psionics.base}} </span><br></span>
              <span v-if="psionics.limitations" class="text-xs">Limitations: <span class="font-normal"> {{psionics.limitations}} </span><br></span>
              <span v-if="psionics.attacksPerMelee" class="text-xs">Attacks per Melee: <span class="font-normal"> {{psionics.attacksPerMelee}} </span><br></span>
              </p>
            </div>
          </div>
          <!-- Hidden Toggle Class -->
          <div v-bind:class="{ 'hidden': !extendPsionics }"  class="mt-1">
            <p class="whitespace-pre-wrap text-sm text-gray-600">
              {{psionics.description}}
              <span v-if="psionics.note" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{psionics.note}}</span>
              <span v-if="psionics.gm_note" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{psionics.gm_note}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Psionics",
  props: {
    psionics: Object
  },
  data: function(){
    return {
      extendPsionics: true,
    }
  },
}
</script>

<style scoped>

</style>