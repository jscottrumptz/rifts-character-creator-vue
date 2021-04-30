<template>
  <div class="px-5">
    <p class="text-white text-xl font-medium p-5" >This character is a Major Psionic</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white p-5">Psionic Picks Remaining: {{remaining}}</h2>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(psionics,index) in selectedPsionics" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }} ({{ psionics.group }})</li>
          </ul>
        </div>
        <button v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3  m-7 px-3 py-2 text-xs text-white">Remove Selected</button>
        <p class="text-white pl-5 pb-5" >Select a total of eight powers from any one category (Sensitive, Physical, or Healer) or a total of six powers with selections made from two or three of those categories.</p>
      </div>

      <!-- Finalize Selections -->
      <div v-if="!tabsActive" class="flex flex-wrap content-center">
        <button v-on:click="finalizeSelections" class="bg-gray-700 font-medium rounded hover:bg-yellow-500 hover:text-gray-900 m-3  m-7 px-3 py-2 text-xs text-white">Finalize Selections</button>
      </div>

      <!-- Psionic Lists -->
      <div v-show="tabsActive" class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <!-- Nav & Tabs -->
        <div class="sm:hidden m-3">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option v-if="healingActive" value="healing">Healing Psionics</option>
            <option v-if="physicalActive" value="physical">Physical Psionics</option>
            <option v-if="sensitiveActive" value="sensitive">Sensitive Psionics</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex space-x-4 m-3" aria-label="Tabs">
            <a v-if="healingActive" v-on:click="toggle='healing'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'healing', 'bg-gray-100 text-gray-700': toggle === 'healing'}" href="#" onclick="return false;">
              Healing Psionics
            </a>
            <a v-if="physicalActive" v-on:click="toggle='physical'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'physical', 'bg-gray-100 text-gray-700': toggle === 'physical'}" href="#" onclick="return false;">
              Physical Psionics
            </a>
            <a v-if="sensitiveActive" v-on:click="toggle='sensitive'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'sensitive', 'bg-gray-100 text-gray-700': toggle === 'sensitive'}" href="#" onclick="return false;">
              Sensitive Psionics
            </a>
          </nav>
        </div>

        <!-- Healing List -->
        <div v-show="toggle==='healing' && healingActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(psionics,index) in healingPsionics" v-bind:key="index"  :id="'heal-'+ index" v-on:click="selected('healing',index)" class="hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
          </ul>
        </div>

      <div v-show="toggle==='physical' && physicalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
        <ul class="text-gray-300 divide-y divide-gray-600">
          <li v-for="(psionics,index) in physicalPsionics" v-bind:key="index" :id="'phys-'+ index" v-on:click="selected('physical',index)" class="hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
        </ul>
      </div>

      <div v-show="toggle==='sensitive' && sensitiveActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
        <ul class="text-gray-300 divide-y divide-gray-600">
          <li v-for="(psionics,index) in sensitivePsionics" v-bind:key="index" :id="'sense-'+ index" v-on:click="selected('sensitive',index)" class="hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
        </ul>
      </div>
        <button v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="font-medium text-2xl">{{displayPsionic[0].name}}</h2><br>
          <span v-show="displayPsionic[0].preq != '' || displayPsionic[0].preqOther != '' || displayPsionic[0].preqType != ''" class="font-medium text-gray-200">(Prerequisites:{{displayPsionic[0].preq}} {{displayPsionic[0].preqOther}} {{displayPsionic[0].preqType}})<br></span>
          <span class="font-medium text-gray-200">Cost:</span> {{displayPsionic[0].cost}}<br>
          <span class="font-medium text-gray-200">Range:</span> {{displayPsionic[0].range}}<br>
          <span class="font-medium text-gray-200">Duration:</span> {{displayPsionic[0].duration}}<br>
          <span v-show="displayPsionic[0].savingThrow != ''" class="font-medium text-gray-200">Saving Throw: <span class="font-normal">{{displayPsionic[0].savingThrow}}</span><br></span>
          <span v-show="displayPsionic[0].damage != ''" class="font-medium text-gray-200">Damage: <span class="font-normal">{{displayPsionic[0].damage}}</span><br></span>
          <span v-show="displayPsionic[0].lengthOfTrance != ''" class="font-medium text-gray-200">Length of Trance: <span class="font-normal">{{displayPsionic[0].lengthOfTrance}}</span><br></span>
          <span v-show="displayPsionic[0].baseSkill != ''" class="font-medium text-gray-200">Base Skill: <span class="font-normal">{{displayPsionic[0].baseSkill}}</span><br></span>
          <span v-show="displayPsionic[0].limitations != ''" class="font-medium text-gray-200">Limitations: <span class="font-normal">{{displayPsionic[0].limitations}}</span><br></span>
          <span v-show="displayPsionic[0].attacksPerMelee != ''" class="font-medium text-gray-200">Attacks per Melee: <span class="font-normal">{{displayPsionic[0].attacksPerMelee}}</span><br></span>
          <span v-show="displayPsionic[0].recovers != ''" class="font-medium text-gray-200">Recovers: <span class="font-normal">{{displayPsionic[0].recovers}}</span><br></span>
          <span v-show="displayPsionic[0].bonuses != ''" class="font-medium text-gray-200">Bonuses: <span class="font-normal">{{displayPsionic[0].bonuses}}</span><br></span>
          <br>
          <span class="font-medium text-gray-200">Description:</span>
          <div class="whitespace-pre-wrap overflow-y-auto max-h-96">
            {{displayPsionic[0].description}}
            <span v-show="displayPsionic[0].note != ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Note:</span>
            {{displayPsionic[0].note}}
            <span v-show="displayPsionic[0].gmNote != ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>GM Note:</span>
            {{displayPsionic[0].gmNote}}
            <span v-show="displayPsionic[0].penalties != ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Penalties:</span>
            {{displayPsionic[0].penalties}}
          </div>
        </div>
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
      remaining: 8, //character.psionics.total;
      physicalActive: true,
      healingActive: true,
      sensitiveActive: true,
      tabsActive: true,
      healingCount: 0,
      physicalCount: 0,
      sensitiveCount: 0,
      selectedId: null
    }
  },methods: {
    selected: function (group,index){
      let psionicGroup = null;
      let listId = null;
      if(group === 'healing'){
        psionicGroup = this.healingPsionics
        listId = 'heal-'+[index]
      } else if (group === 'physical'){
        psionicGroup = this.physicalPsionics
        listId = 'phys-'+[index]
      } else {
        psionicGroup = this.sensitivePsionics
        listId = 'sense-'+[index]
      }
      this.selectedPsionic = psionicGroup[index];
      this.selectedProperty = index;
      this.displayPsionic = [];
      this.displayPsionic.push(psionicGroup[index]);
      this.selectedBg(listId)
    },
    picked: function (index){
      this.pickedPsionic = this.selectedPsionics[index];
      this.displayPsionic = [];
      this.displayPsionic.push(this.selectedPsionics[index]);
      this.pickedProperty = index;
      let listId = 'pick-'+[index]
      this.selectedBg(listId)
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
        this.selectedId = null;
        console.log(this.selectedId)
        this.init();
      }
      this.selectedId = null
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
        this.selectedId = null;
        console.log(this.selectedId)
        this.init();
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
        this.physicalActive = false;
        this.sensitiveActive = false;
      } else if ((psionicPhysical > 0 && psionicStart === 2) || (psionicPhysical > 5 && psionicStart === 8)) {
        this.healingActive = false;
        this.sensitiveActive = false;
      } else if ((psionicSensitive > 0 && psionicStart === 2) || (psionicSensitive > 5 && psionicStart === 8)) {
        this.physicalActive = false;
        this.healingActive = false;
      } else {
        this.physicalActive = true;
        this.healingActive = true;
        this.sensitiveActive = true;
      }

      // either show the finished button or the tabs
      this.tabsActive = availablePicks !== 0;

      // update remaining psionics counter
      this.remaining = availablePicks;
    },
    selectedBg: function (newId){
      if (this.selectedId != null) {
        document.getElementById(this.selectedId).removeAttribute('style')
        this.selectedId = null;
      }
      document.getElementById(newId).style.backgroundColor = 'rgba(165,180,252,1)';
      document.getElementById(newId).style.color = 'rgba(17,24,39,1)';
      this.selectedId = newId;
    },
    finalizeSelections: function (){
      console.log(this.selectedPsionics)
      console.log('Psionics added to the character!')
    }
  }
}
</script>

<style scoped>

</style>