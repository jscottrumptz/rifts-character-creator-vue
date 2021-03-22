<template>
  <div class="p-10 grid grid-cols-4 gap-4">

    <!-- Selected List -->
    <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
      <h2 class="text-white p-5">Psionic Picks Remaining:</h2>
      <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
        <ul v-for="(psionics,index) in selectedPsionics" v-bind:key="index" class="text-gray-300 divide-y divide-gray-200 ">
          <li v-on:click="picked(index)" class="hover:bg-indigo-300 hover:text-gray-900 border-b border-gray-600 px-6 py-2">{{ psionics.name }} ({{ psionics.group }})</li>
        </ul>
      </div>
      <button v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3  m-7 px-3 py-2 text-xs text-white">Remove Selected</button>
    </div>

    <!-- Psionic Lists -->
    <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
      <!-- Nav & Tabs -->
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option value="healing">Healing Psionics</option>
          <option value="physical">Physical Psionics</option>
          <option value="sensitive">Sensitive Psionics</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 m-3" aria-label="Tabs">
          <a v-on:click="toggle='healing'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'healing', 'bg-gray-100 text-gray-700': toggle === 'healing'}" href="#" onclick="return false;">
            Healing Psionics
          </a>
          <a v-on:click="toggle='physical'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'physical', 'bg-gray-100 text-gray-700': toggle === 'physical'}" href="#" onclick="return false;">
            Physical Psionics
          </a>
          <a v-on:click="toggle='sensitive'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'sensitive', 'bg-gray-100 text-gray-700': toggle === 'sensitive'}" href="#" onclick="return false;">
            Sensitive Psionics
          </a>
        </nav>
      </div>

      <!-- Healing List -->
      <div v-if="toggle==='healing'" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
        <ul v-for="(psionics,index) in healingPsionics" v-bind:key="index" class="text-gray-300 divide-y divide-gray-200 ">
          <li v-on:click="selected('healing',index)" class="hover:bg-indigo-300 hover:text-gray-900 border-b border-gray-600 px-6 py-2">{{ psionics.name }}</li>
        </ul>
      </div>

    <div v-if="toggle==='physical'" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
      <ul v-for="(psionics,index) in physicalPsionics" v-bind:key="index" class="text-gray-300 divide-y divide-gray-200">
        <li v-on:click="selected('physical',index)" class="hover:bg-indigo-300 hover:text-gray-900 border-b border-gray-600 px-6 py-2">{{ psionics.name }}</li>
      </ul>
    </div>

    <div v-if="toggle==='sensitive'" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
      <ul v-for="(psionics,index) in sensitivePsionics" v-bind:key="index" class="text-gray-300 divide-y divide-gray-200">
        <li v-on:click="selected('sensitive',index)" class="hover:bg-indigo-300 hover:text-gray-900 border-b border-gray-600 px-6 py-2">{{ psionics.name }}</li>
      </ul>
    </div>
      <button v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
    </div>

    <!-- Info Section -->
    <div class="col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
      <div class="text-gray-300 m-10">
        <h2 class="font-medium text-2xl">{{displayPsionic[0].name}}</h2><br>
        <span class="font-medium text-gray-200">Cost:</span> {{displayPsionic[0].cost}}<br>
        <span class="font-medium text-gray-200">Range:</span> {{displayPsionic[0].range}}<br>
        <span class="font-medium text-gray-200">Duration:</span> {{displayPsionic[0].duration}}<br>
        <span class="font-medium text-gray-200">Saving Throw:</span> {{displayPsionic[0].savingThrow}}<br>
        <br>
        <span class="font-medium text-gray-200">Description:</span>
        <div class="overflow-y-auto max-h-96">
          {{displayPsionic[0].description}}<br>
          <br>
          <span class="font-medium text-gray-200">Note:</span>
          {{displayPsionic[0].note}}</div>
      </div>
    </div>
  </div>
</template>

<script>
const HealingPsionics = require('../../../lib/Psinoics/HealingPsionics');
const PhysicalPsionics = require('../../../lib/Psinoics/PhysicalPsionics');
const SensitivePsionics = require('../../../lib/Psinoics/SensitivePsionics');

export default {
name: "PickPsionics",
  data: function(){
    return {
      componentKey: 0,
      healingPsionics: new HealingPsionics,
      physicalPsionics: new PhysicalPsionics,
      sensitivePsionics: new SensitivePsionics,
      selectedPsionics: {},
      displayPsionic: [{name:'Select a Psionic'}],
      toggle: "healing",
      selectedPsionic: null,
      selectedProperty: null,
      pickedPsionic: null,
      pickedProperty: null,
      remaining: 8,
      physicalActive: true,
      healingActive: true,
      sensitiveActive: true,
      finalizePsionicsActive: false,
      tabsActive: true,
      healingCount: 0,
      physicalCount: 0,
      sensitiveCount: 0
    }
  },methods: {
    selected: function (group,index){
      let psionicGroup = null;
      if(group === 'healing'){
        psionicGroup = this.healingPsionics
      } else if (group === 'physical'){
        psionicGroup = this.physicalPsionics
      } else {
        psionicGroup = this.sensitivePsionics
      }

      this.selectedPsionic = psionicGroup[index];
      this.selectedProperty = index;
      this.displayPsionic = [];
      this.displayPsionic.push(psionicGroup[index]);
    },
    picked: function (index){
      this.pickedPsionic = this.selectedPsionics[index];
      this.displayPsionic = [];
      this.displayPsionic.push(this.selectedPsionics[index]);
      this.pickedProperty = index;
    },
    addSelected: function (){
      const prop = this.selectedProperty;
      const psionic = this.selectedPsionic
      if (psionic !== null){
        this.selectedPsionics[prop] = psionic
        if(psionic.group === 'Healing'){
          delete this.healingPsionics[prop]
          this.healingCount++;
        } else if (psionic.group === 'Physical'){
          delete this.physicalPsionics[prop]
          this.physicalCount++;
        } else {
          delete this.sensitivePsionics[prop]
          this.sensitiveCount++;
        }
        this.selectedPsionic = null;
        this.selectedProperty = null;
        console.log(this.sensitiveCount)
        this.$forceUpdate();
      }
    },
    removePicked: function (){
      const prop = this.pickedProperty;
      const psionic = this.pickedPsionic;
      if (psionic !== null){
        if(psionic.group === 'Healing'){
          this.healingPsionics[prop] = psionic;
          this.healingCount--;
        } else if (psionic.group === 'Physical'){
          this.physicalPsionics[prop] = psionic;
          this.physicalCount--;
        } else {
          this.sensitivePsionics[prop] = psionic;
          this.sensitiveCount--;
        }
        delete this.selectedPsionics[prop]
        this.pickedPsionic = null;
        this.pickedProperty = null
        console.log(this.sensitiveCount)
        this.$forceUpdate();
      }
    },
    init: function() {
      let psionicPicked = Object.keys(this.selectedPsionics).length;
      let psionicStart = 8 //character.psionics.total;
      let psionicHealing = this.healingCount
      let psionicPhysical = this.physicalCount
      let psionicSensitive = this.sensitiveCount

      // determine how many picks are left
      let availablePicks = psionicStart - psionicPicked

      // see if the character is spreading it's picks over multiple groups, if so deduct 2 picks from the available total
      if ((psionicHealing > 0 && psionicPhysical > 0) || (psionicHealing > 0 && psionicSensitive > 0) || (psionicSensitive > 0 && psionicPhysical > 0)) {
        availablePicks = availablePicks - 2;
      }

      // determine what tabs are available
      if ((psionicHealing > 0 && psionicStart === 2) || (psionicHealing > 5 && psionicStart === 8)) {
        this.physicalActive(false);
        this.sensitiveActive(false);
      }
      if ((psionicPhysical > 0 && psionicStart === 2) || (psionicPhysical > 5 && psionicStart === 8)) {
        this.healingActive(false);
        this.sensitiveActive(false);
      }
      if ((psionicSensitive > 0 && psionicStart === 2) || (psionicSensitive > 5 && psionicStart === 8)) {
        this.physicalActive(false);
        this.healingActive(false);
      }

      // either show the finished button or the tabs
      if (availablePicks === 0) {
        this.finalizePsionicsActive(true);
        this.tabsActive(false);
      } else {
        this.finalizePsionicsActive(false);
        this.tabsActive(true);
      }

      // update remaining psionics counter
      this.remaining = availablePicks;
    }
  }
}
</script>

<style scoped>

</style>