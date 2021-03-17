<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Psionics
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, and Other
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <ul v-for="(psionics,index) in psionics" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <!-- Hidden Toggle Button -->
              <a href="#" onclick="return false;" v-on:click="isActive = !isActive" class="block focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-lg font-medium text-gray-900 truncate">{{psionics.name}}</p>
                <p class="text-sm mb-2 text-gray-500">({{psionics.psionic_group.name}})</p>
                <p class="text-sm p-2 bg-gray-200 font-medium text-gray-700">
                <span v-if="psionics.cost" class="text-xs">Cost: <span class="font-normal"> {{psionics.cost}} </span><br></span>
                <span v-if="psionics.range" class="text-xs">Range: <span class="font-normal"> {{psionics.range}} </span><br></span>
                <span v-if="psionics.duration" class="text-xs">Duration: <span class="font-normal"> {{psionics.duration}} </span><br></span>
                <span v-if="psionics.damage" class="text-xs">Damage: <span class="font-normal"> {{psionics.damage}} </span><br></span>
                <span v-if="psionics.saving_throw" class="text-xs">Saving Throw: <span class="font-normal"> {{psionics.saving_throw}} </span><br></span>
                <span v-if="psionics.trance_length" class="text-xs">Trance Length: <span class="font-normal"> {{psionics.trance_length}} </span><br></span>
                <span v-if="psionics.base_skill" class="text-xs">Base Skill: <span class="font-normal"> {{psionics.base_skill}} </span><br></span>
                <span v-if="psionics.limitations" class="text-xs">Limitations: <span class="font-normal"> {{psionics.limitations}} </span><br></span>
                <span v-if="psionics.attacks_per_melee" class="text-xs">Attacks per Melee: <span class="font-normal"> {{psionics.attacks_per_melee}} </span><br></span>
                </p>
              </a>
            </div>
          </div>
          <!-- Hidden Toggle Class -->
          <div v-bind:class="{ 'hidden': isActive }"  class="mt-1">
            <p class="whitespace-pre-wrap text-sm text-gray-600">
              {{psionics.description}}
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
    psionics: Array
  },
  data: function(){
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped>

</style>