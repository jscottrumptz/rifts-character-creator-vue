<template>
  <div class="pl-5 md:pl-10 pb-5 md:pb-0 mr-6 w-full max-w-xs">
    <!-- Character Selector -->
    <label for="selectRace" class="block text-base font-medium text-gray-300">Race</label>
    <div class="mt-1.5 relative">
      <select id="selectRace" v-on:change="onChange($event)" name="selectRace" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
        <option value="character-viewer" selected disabled> Select a race... </option>
        <option value="character-viewer" v-for="(races,index) in races" v-bind:key="index" :id="races.name" >{{races.name}}</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
const Races = require('../../../lib/Races/PickRace');

export default {
  name: "PickRace",
  data: function(){
    return {
      races: new Races,
      race: null
    }
  },
  methods: {
    onChange(event) {
      const raceName = event.target.selectedOptions[0].id
      console.log(raceName)
    }
  }
}
</script>

<style scoped>

</style>