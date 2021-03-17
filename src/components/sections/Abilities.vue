<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Abilities
      </h3>
      <p class="inline-block mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, Cybernetic, and Other
      </p>
      <a v-on:click="extended = !extended" class="text-xs inline-block text-gray-300 hover:text-gray-500 p-1 px-2 ml-6 rounded-md bg-gray-900" href="#" onclick="return false;">
        <span v-if="extended === false">show descriptions</span>
        <span v-if="extended === true">hide descriptions</span>
      </a>
    </div>
    <div class="px-4 py-5 p-0">
      <ul v-for="(abilities,index) in abilities" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="border-t-8 border-gray-800 px-4 py-5 relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <p class="text-lg font-medium text-gray-900 truncate">{{abilities.name}}</p>
              <p class="text-sm mb-2 text-gray-500">({{abilities.type}})</p>
              <p class="text-sm p-2 bg-gray-200 font-medium text-gray-700">
                <span v-if="abilities.cost" class="text-xs">Cost: <span class="font-normal"> {{abilities.cost}} </span><br></span>
                <span v-if="abilities.range" class="text-xs">Range: <span class="font-normal"> {{abilities.range}} </span><br></span>
                <span v-if="abilities.duration" class="text-xs">Duration: <span class="font-normal"> {{abilities.duration}} </span><br></span>
                <span v-if="abilities.damage" class="text-xs">Damage: <span class="font-normal"> {{abilities.damage}} </span><br></span>
                <span v-if="abilities.savingThrow" class="text-xs">Saving Throw: <span class="font-normal"> {{abilities.saving_throw}} </span><br></span>
                <span v-if="abilities.tranceLength" class="text-xs">Trance Length: <span class="font-normal"> {{abilities.trance_length}} </span><br></span>
                <span v-if="abilities.baseSkill" class="text-xs">Base Skill: <span class="font-normal"> {{abilities.base_skill}} </span><br></span>
                <span v-if="abilities.limitations" class="text-xs">Limitations: <span class="font-normal"> {{abilities.limitations}} </span><br></span>
                <span v-if="abilities.attacksPerMelee" class="text-xs">Attacks per Melee: <span class="font-normal"> {{abilities.attacks_per_melee}} </span><br></span>
              </p>
            </div>
          </div>
          <!-- Hidden Toggle Class -->
          <div v-bind:class="{ 'hidden': !extended }"  class="mt-1">
            <p class="whitespace-pre-wrap text-sm text-gray-600">
              {{abilities.description}}
              <span v-if="abilities.gmNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{abilities.gmNote}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- REMOVE BELOW
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Abilities
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, Cybernetic, and Other
      </p>
    </div>
    -- Begin Abilities Loop--
    <div v-for="(abilities,index) in abilities" v-bind:key="index" class="bg-white border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="divide-y divide-gray-200">
        -- Begin Ability --
        <div v-if="abilities.display === true" class="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            <p class="text-gray-800 pb-2">{{abilities.name}}<br><span class="font-normal text-xs" >({{abilities.type}})</span></p>
            <span v-if="abilities.baseSkill" class="text-xs">Base Skill: {{abilities.baseSkill}}% <br></span>
            <span v-if="abilities.skillPerLevel" class="text-xs">per Level: {{abilities.skillPerLevel}}% <br></span>
            <span v-if="abilities.ispCost" class="text-xs">Cost: {{abilities.ispCost}} ISP <br></span>
            <span v-if="abilities.recastTime" class="text-xs">{{abilities.recastTime}} <br></span>
          </dt>
          <dd v-on:click="isActive = !isActive" v-bind:class="{ 'line-clamp-5': isActive }" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            <a href="#" onclick="return false;" class="whitespace-pre-wrap">{{abilities.description}}</a>
            <span v-if="abilities.gmNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{abilities.gmNote}}</span>
          </dd>
        </div>
        -- End Ability  --
      </dl>
    </div>
    -- End Abilities Loop--
  </div>
  -->

</template>

<script>
export default {
  name: "Abilities",
  props: {
    abilities: Array,
  },
  data: function(){
    return {
      extended: false,
    }
  },
}
</script>

<style scoped>

</style>