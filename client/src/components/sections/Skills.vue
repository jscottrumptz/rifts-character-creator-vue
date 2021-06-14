<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Skills
      </h3>
      <p class="inline-block mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, and Other
      </p>
      <a v-on:click="extendSkills = !extendSkills" class="text-xs inline-block text-gray-300 hover:text-gray-500 p-1 px-2 ml-6 rounded-md bg-gray-900" href="#" onclick="return false;">
        <span v-if="extendSkills === false">show descriptions</span>
        <span v-if="extendSkills === true">hide descriptions</span>
      </a>
    </div>
    <div class="px-4 py-5 p-0">
      <ul v-for="(skill,index) in skills.known" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="border-t-8 border-gray-800 relative bg-white py-5 px-4">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <p class="text-lg font-medium text-gray-900 truncate">{{skill.name}}
                <span v-if="skill.takenTwice" class="my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">
                taken twice
                </span>
              </p>
              <p class="text-sm mb-2 text-gray-500">({{skill.group}})</p>
              <p class="text-sm p-2 bg-gray-200 font-medium text-gray-700">
                <span v-if="skill.base" class="text-xs">Base Skill: <span class="font-normal"> {{skill.base}}% </span>
                <span v-if="skill.baseTwo" class="font-normal"> / {{skill.baseTwo}}% </span>
                <span v-if="skill.perLvl" class="font-normal">+ {{skill.perLvl}}% per lvl</span><br></span>
                <span v-if="skill.raceBonus" class="text-xs">Race Bonus: <span class="font-normal"><span v-show="skill.raceBonus > 0">+</span>{{skill.raceBonus}}% </span><br></span>
                <span v-if="skill.occBonus" class="text-xs">OCC Bonus: <span class="font-normal"><span v-show="skill.occBonus > 0">+</span>{{skill.occBonus}}% </span><br></span>
                <span v-if="skill.takenTwice && skill.takeTwiceBonus" class="text-xs">Taken Twice Bonus: <span class="font-normal">{{skill.takeTwiceBonus}} </span><br></span>
                <span v-if="skill.base && skills.bonus.attributeBonus" class="text-xs">IQ Bonus: <span class="font-normal"><span v-show="skills.bonus.attributeBonus > 0">+</span>{{skills.bonus.attributeBonus}}% </span><br></span>
                <span v-if="skill.base && skill.skillBonus" class="text-xs">Bonus from Other Skills: <span class="font-normal">+{{skill.skillBonus}}% </span><br></span>
              </p>
            </div>
          </div>
          <!-- Hidden Toggle Class -->
          <div v-bind:class="{ 'hidden': !extendSkills }"  class="mt-1">
            <p class="whitespace-pre-line text-sm text-gray-600">
              {{skill.description}}
              <span v-if="skill.note" class="italic"><br><br><span class="font-medium not-italic">Note:</span> {{skill.note}}</span>
              <span v-if="skill.bonus" class="italic"><br><br><span class="font-medium not-italic">Bonuses:</span> {{skill.bonus}}</span>
              <span v-if="skill.penalty" class="italic"><br><br><span class="font-medium not-italic">Penalties:</span> {{skill.penalty}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skills: Object
  },
  data: function(){
    return {
      extendSkills: true,
    }
  },
}
</script>

<style scoped>

</style>