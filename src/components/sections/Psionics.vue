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
    <!-- Begin Psionics Loop-->
    <div v-for="(psionics,index) in psionics" v-bind:key="index" class="bg-white border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="divide-y divide-gray-200">
        <!-- Begin Psionic -->
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            <p class="text-gray-800 pb-2">{{psionics.name}}<br><span class="font-normal text-xs" > ({{psionics.psionic_group.name}}) </span></p>
            <span v-if="psionics.cost" class="text-xs">Cost: <span class="font-normal"> {{psionics.cost}} </span><br></span>
            <span v-if="psionics.range" class="text-xs">Range: <span class="font-normal"> {{psionics.range}} </span><br></span>
            <span v-if="psionics.duration" class="text-xs">Duration: <span class="font-normal"> {{psionics.duration}} </span><br></span>
            <span v-if="psionics.damage" class="text-xs">Damage: <span class="font-normal"> {{psionics.damage}} </span><br></span>
            <span v-if="psionics.saving_throw" class="text-xs">Saving Throw: <span class="font-normal"> {{psionics.saving_throw}} </span><br></span>
            <span v-if="psionics.trance_length" class="text-xs">Trance Length: <span class="font-normal"> {{psionics.trance_length}} </span><br></span>
            <span v-if="psionics.base_skill" class="text-xs">Base Skill: <span class="font-normal"> {{psionics.base_skill}} </span><br></span>
            <span v-if="psionics.limitations" class="text-xs">Limitations: <span class="font-normal"> {{psionics.limitations}} </span><br></span>
            <span v-if="psionics.attacks_per_melee" class="text-xs">Attacks per Melee: <span class="font-normal"> {{psionics.attacks_per_melee}} </span><br></span>
          </dt>
          <dd v-on:click="isActive = !isActive" v-bind:class="{ 'line-clamp-5': isActive }" class="whitespace-pre-wrap mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            <a href="#" onclick="return false;">{{psionics.description}}</a>
            <span v-if="psionics.gm_note" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{psionics.gm_note}}</span>
          </dd>
        </div>
        <!-- End Psionic  -->
      </dl>
    </div>
    <!-- End Psionics Loop-->
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