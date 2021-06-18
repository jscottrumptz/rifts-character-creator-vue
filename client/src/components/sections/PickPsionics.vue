<template>
  <div class="px-5">
    <p class="text-white text-xl font-medium p-5" >Pick Psionics</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white pl-5 pt-5">Other Psionic Picks Remaining: {{remaining}}</h2>
        <p v-if="healingPsionicsRemaining > 0 || physicalPsionicsRemaining > 0 || sensitivePsionicsRemaining > 0 || superPsionicsRemaining > 0" class="text-white pl-5 pt-5 font-medium" >Fulfill the following requirements...</p>
        <div class="pl-10 pb-5">
          <h2 v-if="healingPsionicsRemaining > 0" class="text-white">Healing Picks Needed: {{healingPsionicsRemaining}}</h2>
          <h2 v-if="physicalPsionicsRemaining > 0" class="text-white">Physical Picks Needed: {{physicalPsionicsRemaining}}</h2>
          <h2 v-if="sensitivePsionicsRemaining > 0" class="text-white">Sensitive Picks Needed: {{sensitivePsionicsRemaining}}</h2>
          <h2 v-if="superPsionicsRemaining > 0" class="text-white">Super Psionic Picks Needed: {{superPsionicsRemaining}}</h2>
        </div>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(psionics,index) in selectedPsionics" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }} <span class="text-gray-500">[{{ psionics.group }}]</span></li>
          </ul>
        </div>
        <!-- Determine what button is active depending on prerequisites and previously known skills-->
        <button v-if="this.pickedPsionic && this.pickedPsionic.canRemove && !this.pickedPsionic.known" v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Remove Selected</button>
        <button v-if="this.pickedPsionic && !this.pickedPsionic.canRemove && !this.pickedPsionic.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Required by Another Psionic</button>
        <button v-if="!this.pickedPsionic" class="bg-gray-700 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Select a Psionic</button>
        <button v-if="this.pickedPsionic && this.pickedPsionic.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Cannot Remove</button>
      </div>

      <!-- Finalize Selections -->
      <div v-if="!tabsPsionicsActive" class="flex flex-wrap content-center">
        <button v-on:click="finalizeSelections" class="mx-auto bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Finalize Selections</button>
      </div>

      <!-- Psionic Lists -->
      <div v-show="tabsPsionicsActive" class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <!-- Nav & Tabs -->
        <div class="sm:hidden m-3">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option value="default" selected disabled> Select a Psionics Group... </option>
            <option v-if="healingPsionicsActive" value="healing">Healing Psionics</option>
            <option v-if="physicalPsionicsActive" value="physical">Physical Psionics</option>
            <option v-if="sensitivePsionicsActive" value="sensitive">Sensitive Psionics</option>
            <option v-if="superPsionicsActive" value="sensitive">Super Psionics</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex space-x-4 m-3" aria-label="Tabs">
            <a v-if="healingPsionicsActive" v-on:click="toggle='healing'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'healing', 'bg-gray-100 text-gray-700': toggle === 'healing'}" href="#" onclick="return false;">
              Healing Psionics
            </a>
            <a v-if="physicalPsionicsActive" v-on:click="toggle='physical'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'physical', 'bg-gray-100 text-gray-700': toggle === 'physical'}" href="#" onclick="return false;">
              Physical Psionics
            </a>
            <a v-if="sensitivePsionicsActive" v-on:click="toggle='sensitive'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'sensitive', 'bg-gray-100 text-gray-700': toggle === 'sensitive'}" href="#" onclick="return false;">
              Sensitive Psionics
            </a>
            <a v-if="superPsionicsActive" v-on:click="toggle='super'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
               v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'super', 'bg-gray-100 text-gray-700': toggle === 'super'}" href="#" onclick="return false;">
              Super Psionics
            </a>
          </nav>
        </div>

        <!-- Healing List -->
        <div v-show="toggle==='healing' && healingPsionicsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(psionics,index) in healingPsionics" v-bind:key="index"  :id="'healing-'+ index" v-on:click="selected('healing',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
          </ul>
        </div>
        <!-- Physical List -->
        <div v-show="toggle==='physical' && physicalPsionicsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600">
            <li v-for="(psionics,index) in physicalPsionics" v-bind:key="index" :id="'physical-'+ index" v-on:click="selected('physical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
          </ul>
        </div>
        <!-- Sensitive List -->
        <div v-show="toggle==='sensitive' && sensitivePsionicsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600">
            <li v-for="(psionics,index) in sensitivePsionics" v-bind:key="index" :id="'sensitive-'+ index" v-on:click="selected('sensitive',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
          </ul>
        </div>
        <!-- Super List -->
        <div v-show="toggle==='super' && superPsionicsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600">
            <li v-for="(psionics,index) in superPsionics" v-bind:key="index" :id="'super-'+ index" v-on:click="selected('super',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ psionics.name }}</li>
          </ul>
        </div>
        <button v-if="this.selectedPsionic && enoughPicks && canAdd " v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
        <button v-if="this.selectedPsionic && !canAdd && enoughPicks" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Prerequisites Not Met</button>
        <button v-if="this.selectedPsionic && !enoughPicks && canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Not Enough Picks Remaining</button>
        <button v-if="!this.selectedPsionic" class="bg-gray-700 font-medium rounded m-7 text-xs px-3 py-2 text-white">Select a Psionic</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="font-medium text-2xl">{{displayPsionic[0].name}}</h2>
          <span v-show="displayPsionic[0].required !== ''" class="font-medium text-gray-200">(Prerequisites: {{displayPsionic[0].required}})<br></span>
          <span v-show="displayPsionic[0].selectionCost > 1 " class="font-medium text-gray-200">(Counts as {{displayPsionic[0].selectionCost}} skill selections)<br></span>
          <br>
          <span class="font-medium text-gray-200">Cost:</span> {{displayPsionic[0].cost}}<br>
          <span class="font-medium text-gray-200">Range:</span> {{displayPsionic[0].range}}<br>
          <span class="font-medium text-gray-200">Duration:</span> {{displayPsionic[0].duration}}<br>
          <span v-show="displayPsionic[0].savingThrow !== ''" class="font-medium text-gray-200">Saving Throw: <span class="font-normal">{{displayPsionic[0].savingThrow}}</span><br></span>
          <span v-show="displayPsionic[0].damage !== ''" class="font-medium text-gray-200">Damage: <span class="font-normal">{{displayPsionic[0].damage}}</span><br></span>
          <span v-show="displayPsionic[0].lengthOfTrance !== ''" class="font-medium text-gray-200">Length of Trance: <span class="font-normal">{{displayPsionic[0].lengthOfTrance}}</span><br></span>
          <span v-show="displayPsionic[0].baseSkill !== ''" class="font-medium text-gray-200">Base Skill: <span class="font-normal">{{displayPsionic[0].baseSkill}}</span><br></span>
          <span v-show="displayPsionic[0].limitations !== ''" class="font-medium text-gray-200">Limitations: <span class="font-normal">{{displayPsionic[0].limitations}}</span><br></span>
          <span v-show="displayPsionic[0].attacksPerMelee !== ''" class="font-medium text-gray-200">Attacks per Melee: <span class="font-normal">{{displayPsionic[0].attacksPerMelee}}</span><br></span>
          <span v-show="displayPsionic[0].recovers !== ''" class="font-medium text-gray-200">Recovers: <span class="font-normal">{{displayPsionic[0].recovers}}</span><br></span>
          <span v-show="displayPsionic[0].bonuses !== ''" class="font-medium text-gray-200">Bonuses: <span class="font-normal">{{displayPsionic[0].bonuses}}</span><br></span>
          <br>
          <span class="font-medium text-gray-200">Description:</span>
          <div class="whitespace-pre-wrap overflow-y-auto max-h-96">
            {{displayPsionic[0].description}}
            <span v-show="displayPsionic[0].note !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Note:</span>
            {{displayPsionic[0].note}}
            <span v-show="displayPsionic[0].gmNote !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>GM Note:</span>
            {{displayPsionic[0].gmNote}}
            <span v-show="displayPsionic[0].specialNote !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Special Note:</span>
            {{displayPsionic[0].specialNote}}
            <span v-show="displayPsionic[0].penalties !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Penalties:</span>
            {{displayPsionic[0].penalties}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const HealingPsionics = require('../../../lib/Psionics/HealingPsionics');
const PhysicalPsionics = require('../../../lib/Psionics/PhysicalPsionics');
const SensitivePsionics = require('../../../lib/Psionics/SensitivePsionics');
const SuperPsionics = require('../../../lib/Psionics/SuperPsionics');

export default {
  name: "PickPsionics",
  props: {
    newCharacter: Object
  },
  data: function(){
    return {
      componentKey: 0,
      // toggle to see if prerequisites are met
      canAdd: true,
      // create psionic groups
      healingPsionics: new HealingPsionics,
      physicalPsionics: new PhysicalPsionics,
      sensitivePsionics: new SensitivePsionics,
      superPsionics: new SuperPsionics,

      selectedPsionics: {},
      displayPsionic: [{name:'Select a Psionic'}],
      toggle: "healing",
      selectedPsionic: null,
      selectedProperty: null,
      pickedPsionic: null,
      pickedProperty: null,
      // number of remaining psionic picks
      remaining: null,
      // number of psionics picked so far
      psionicsPicked: 0,
      // toggle for picks left vs needed
      enoughPicks: true,
      // toggle to control if a group list is available
      physicalPsionicsActive: true,
      healingPsionicsActive: true,
      sensitivePsionicsActive: true,
      superPsionicsActive: true,
      tabsPsionicsActive: true,
      // number of psionics picked from a group
      healingPsionicsCount: 0,
      physicalPsionicsCount: 0,
      sensitivePsionicsCount: 0,
      superPsionicsCount: 0,
      // number of required psionic picks
      healingPsionicsRequired: 0,
      physicalPsionicsRequired: 0,
      sensitivePsionicsRequired: 0,
      superPsionicsRequired: 0,
      // number of required psionic picks remaining
      healingPsionicsRemaining: 0,
      physicalPsionicsRemaining: 0,
      sensitivePsionicsRemaining: 0,
      superPsionicsRemaining: 0,

      selectedId: null
    }
  },
  methods: {
    selected: function (group,index){
      // set selected group name and index
      const psionicGroup = this[group+'Psionics']
      const listId = group + '-' +[index]
      const groupRemaining = group + 'PsionicsRemaining'
      // check the selection cost to be sure there are enough picks remaining
      if(psionicGroup[index].selectionCost > this.remaining)
      {
        psionicGroup[index].selectionCost <= (this[groupRemaining] + this.remaining) ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }
      this.selectedPsionic = psionicGroup[index];
      this.selectedProperty = index;
      this.displayPsionic = [];
      this.displayPsionic.push(psionicGroup[index]);
      this.selectedBg(listId)
      console.log (this.selectedPsionic.preq.length)
      // Check prerequisite psionics
      let preqType;
      let preqAmount;
      if(this.selectedPsionic.preq.length > 0) {
        let required = 0;
        // get preq array from the selected skill object
        this.selectedPsionic.preq.forEach(preq => {
          // check for each prerequisite in the currently selected psionics
          let thisRemaining = false
          for(const [key] of Object.entries(this.selectedPsionics)) {
            if (key.includes(preq)){
              // if one of the keys includes the needed psionic, set this required to True
              thisRemaining = true
            }
          }
          // if this required = true increase the required count
          if(thisRemaining === true) {
            required++
          }
        })
        // check if required count is equal to the number of prerequisites, if so the user can add the psionic
        required === this.selectedPsionic.preq.length ? preqAmount = true : preqAmount = false
      } else {
        // if the array is empty there are no prerequisites
        preqAmount = true
      }
      // Check prerequisite for character psionic type
      if(this.selectedPsionic.preqType === 'Master') {
        this.newCharacter.psionics.type === 'Master' ?  preqType = true : preqType = false
      } else {
        preqType = true
      }
      // see if you can add after testing preqs
      preqType && preqAmount ? this.canAdd = true : this.canAdd = false

      // set pickedPsionic to null since the user is now in the psionic group list
      this.pickedPsionic = null;
      console.log(this.canAdd)
    },
    picked: function (index){
      // set picked group name and index
      this.pickedPsionic = this.selectedPsionics[index];
      this.displayPsionic = [];
      this.displayPsionic.push(this.selectedPsionics[index]);
      this.pickedProperty = index;
      let listId = 'pick-'+[index]
      this.selectedBg(listId)
      this.selectedPsionic = null;
    },
    addSelected: function (){
      const prop = this.selectedProperty;
      const psionic = this.selectedPsionic
      // get group property from group name
      const group = psionic.group.charAt(0).toLowerCase() + psionic.group.slice(1).replace(/\s+/g, '') + 'Psionics';
      const groupCount = group + 'Count'
      // make sure something is selected
      if (psionic){
        // create the same object property in selectedPsionics and copy the selected object to it
        this.selectedPsionics[prop] = psionic
        // create the same object property in newCharacter's known psionics and copy the selected object to it
        this.newCharacter.psionics.known[prop] = psionic
        // remove psionic from the group list
        delete this[group][prop]
        // increase the group count
        this[groupCount] = this[groupCount] + psionic.selectionCost
        this.psionicsPicked = this.psionicsPicked + psionic.selectionCost;
        this.selectedPsionic = null;
        this.selectedProperty = null;
        this.selectedId = null;
        this.init();
      }
      this.init();
    },
    removePicked: function (){
      const prop = this.pickedProperty;
      const psionic = this.pickedPsionic;
      // get group property from group name
      const group = psionic.group.charAt(0).toLowerCase() + psionic.group.slice(1).replace(/\s+/g, '') + 'Psionics';
      const groupCount = group + 'Count'
      // make sure something is selected
      if (psionic){
        // put it back in the group
        this[group][prop] = psionic;

        //update counts
        this[groupCount] = this[groupCount] - psionic.selectionCost
        this.psionicsPicked = this.psionicsPicked - psionic.selectionCost;
        // remove from the list
        delete this.selectedPsionics[prop]
        // remove from the character
        delete this.newCharacter.psionics.known[prop]

        // check for prerequisites
        this.pickedPsionic.preq.forEach(preq => {
          // make prerequisites removable
          for (const [key] of Object.entries(this.selectedPsionics)) {
            if (key.includes(preq)) {
              this.selectedPsionics[key].canRemove = true
            }
          }
        })
        // clear selections
        this.pickedPsionic = null;
        this.pickedProperty = null
        this.selectedId = null;
        // update everything
        this.init();
      }
      // update everything
      this.init();
    },
    init: function() {
      // see how many total picks are required
      let psionicStart = this.newCharacter.psionics.total

      // determine how many total picks are left
      let availablePicks = psionicStart - this.psionicsPicked;

      // determine group picks remaining
      this.healingPsionicsRemaining = Math.max(0, this.healingPsionicsRequired - this.healingPsionicsCount);
      this.physicalPsionicsRemaining = Math.max(0, this.physicalPsionicsRequired - this.physicalPsionicsCount);
      this.sensitivePsionicsRemaining = Math.max(0, this.sensitivePsionicsRequired - this.sensitivePsionicsCount);
      this.superPsionicsRemaining = Math.max(0, this.superPsionicsRequired - this.superPsionicsCount);

      // hide group if no picks remaining
      this.healingPsionicsRemaining === 0 && this.remaining === 0 ?
          this.healingPsionicsActive = false : this.healingPsionicsActive = true
      this.physicalPsionicsRemaining === 0 && this.remaining === 0 ?
          this.physicalPsionicsActive = false : this.physicalPsionicsActive = true
      this.sensitivePsionicsRemaining === 0 && this.remaining === 0 ?
          this.sensitivePsionicsActive = false : this.sensitivePsionicsActive = true
      this.superPsionicsRemaining === 0 && this.remaining === 0 ?
          this.superPsionicsActive = false : this.superPsionicsActive = true

      // hide group if empty
      if (Object.keys(this.healingPsionics).length === 0) {
        this.healingPsionicsActive = false
      }
      if (Object.keys(this.physicalPsionics).length === 0) {
        this.physicalPsionicsActive = false
      }
      if (Object.keys(this.sensitivePsionics).length === 0) {
        this.sensitivePsionicsActive = false
      }
      if (Object.keys(this.superPsionics).length === 0) {
        this.superPsionicsActive = false
      }

      // set active group if default is inactive
      if (!this.healingPsionicsActive && this.toggle === 'healing') {
        this.toggle = 'physical';
      }
      if (!this.physicalPsionicsActive && this.toggle === 'physical') {
          this.toggle = 'sensitive';
      }
      if (!this.sensitivePsionicsActive && this.toggle === 'sensitive') {
            this.toggle = 'super'
      }
      if (!this.superPsionicsActive && this.toggle === 'super') {
        this.toggle = 'healing'
      }

      // either show the finished button or the tabs
      this.tabsPsionicsActive = availablePicks !== 0;

      if (!this.tabsPsionicsActive) {
        this.toggle = 'default'
      }

      // check to see if psionics are removable
      if(Object.keys(this.selectedPsionics).length > 0){
        for (const [psionicKey] of Object.entries(this.selectedPsionics)) {
          // check for prerequisites
          this.selectedPsionics[psionicKey].preq.forEach(preq => {
            let preqFound = false;
            // make prerequisites un-removable
            for (const [preqKey] of Object.entries(this.selectedPsionics)) {
              // check for skill property and exclude the picked skill
              if (preqKey.includes(preq) && psionicKey !== preqKey && !preqFound) {
                this.selectedPsionics[preqKey].canRemove = false
                preqFound = true;
              }
            }
          })
        }
      }

      // update remaining psionics PsionicsCounter
      this.remaining = availablePicks
          - this.healingPsionicsRemaining
          - this.physicalPsionicsRemaining
          - this.sensitivePsionicsRemaining
          - this.superPsionicsRemaining;
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
      this.newCharacter.psionics.selected = true
    },
    // prepares psionic lists
    psionicLoader: function (groupList, availableList) {
      // handle free psionics
      if (availableList.free) {
        availableList.free.forEach(psionic => {
          for (const [key] of Object.entries(groupList)) {
            // if the psionic isn't already known, create it and add the OCC bonus and base
            if (key === psionic.name && !this.newCharacter.psionics.known[key]) {
              this.newCharacter.psionics.known[key] = groupList[key];
              if (psionic.selectionCost >= 0) {
                this.newCharacter.psionics.known[key].selectionCost = psionic.selectionCost;
              }
              if (psionic.specialNote !== '') {
                this.newCharacter.psionics.known[key].specialNote = psionic.specialNote;
              }
              // if the psionic is already known, just add the OCC bonus and base
            } else if (key === psionic.name && this.newCharacter.psionics.known[key]) {
              this.newCharacter.psionics.known[key].preq = [];
              this.newCharacter.psionics.known[key].preqOr = [];
              if (psionic.selectionCost >= 0) {
                this.newCharacter.psionics.known[key].selectionCost = psionic.selectionCost;
              }
              if (psionic.specialNote !== '') {
                this.newCharacter.psionics.known[key].specialNote = psionic.specialNote;
              }
            }
          }
        })
      }

      // handle available psionics
      if (availableList.available) {
        availableList.available.forEach(psionic => {
          for (const [key] of Object.entries(groupList)) {
            if (psionic.name === 'Any') {
              if (psionic.selectionCost >= 0) {
                groupList[key].selectionCost = psionic.selectionCost;
              }
              if (psionic.specialNote !== '') {
                groupList[key].specialNote = psionic.specialNote;
              }
            }
            if (key === psionic.name) {
              if (psionic.selectionCost >= 0) {
                groupList[key].selectionCost = psionic.selectionCost;
              }
              if (psionic.specialNote !== '') {
                groupList[key].specialNote = psionic.specialNote;
              }
            }
          }
        })
      }

      // handle unavailable psionics
      if (availableList.unavailable) {
        availableList.unavailable.forEach(psionic => {
          for (const [key] of Object.entries(groupList)) {
            if (psionic.name === 'All') {
              delete groupList[key]
            }
            if (key === psionic.name) {
              delete groupList[key]
            }
          }
        })
      }

      // remove already known psionics
      for (const [psionic] of Object.entries(this.newCharacter.psionics.known)) {
        this.newCharacter.psionics.known[psionic].known = true;
        this.newCharacter.psionics.known[psionic].preq = [];
        this.newCharacter.psionics.known[psionic].preqType = '';
        for (const [key] of Object.entries(groupList)) {
          if (groupList[key].name === this.newCharacter.psionics.known[psionic].name) {
            delete groupList[key]
          }
        }
      }
    },
    // gathers the necessary initial psionic data
    onLoad: function () {
      //
      // loads psionic group selections
      this.psionicLoader(this.healingPsionics, this.newCharacter.psionics.healingPsionics)
      this.psionicLoader(this.physicalPsionics, this.newCharacter.psionics.physicalPsionics)
      this.psionicLoader(this.sensitivePsionics, this.newCharacter.psionics.sensitivePsionics)
      this.psionicLoader(this.superPsionics, this.newCharacter.psionics.superPsionics)

      // populates selectedPsionics with already known psionics so the player doesn't select them again
      this.selectedPsionics = this.newCharacter.psionics.known
      // gets a count of the known psionics so they can be added later and will not count against the calculated remaining totals
      this.startingPsionics = Object.keys(this.newCharacter.skills.known).length
    }
  },
  mounted: function () {
    // runs a function to gather the necessary initial psionic data
    this.onLoad();
    // called to update psionic counts, group counts, prerequisites and other data
    this.init();
  }
}
</script>

<style scoped>

</style>