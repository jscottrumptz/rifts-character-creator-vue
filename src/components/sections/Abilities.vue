<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Abilities
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, Cybernetic, and Other
      </p>
    </div>
    <!-- Begin Abilities Loop-->
    <div v-for="(abilities,index) in abilities" v-bind:key="index" class="bg-white border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="divide-y divide-gray-200">
        <!-- Begin Ability -->
        <div v-if="abilities.display === true" class="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            <p class="text-gray-800 pb-2">{{abilities.name}}<br><span class="font-normal text-xs" >({{abilities.type}})</span></p>
            <span v-if="abilities.baseSkill" class="text-xs">Base Skill: {{abilities.baseSkill}}% <br></span>
            <span v-if="abilities.skillPerLevel" class="text-xs">per Level: {{abilities.skillPerLevel}}% <br></span>
            <span v-if="abilities.ispCost" class="text-xs">Cost: {{abilities.ispCost}} ISP <br></span>
            <span v-if="abilities.recastTime" class="text-xs">{{abilities.recastTime}} <br></span>
          </dt>
          <dd v-on:click="isActive = !isActive" v-bind:class="{ 'line-clamp-5': isActive }" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            <a href="#" onclick="return false;">{{abilities.description}}</a>
            <span v-if="abilities.gmNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{abilities.gmNote}}</span>
          </dd>
        </div>
        <!-- End Ability  -->
      </dl>
    </div>
    <!-- End Abilities Loop-->
  </div>
</template>

<script>
export default {
  name: "Abilities",
  props: {
    abilities: Array,
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