<template>
  <div class="px-5 pb-5">
    <p class="text-white text-xl font-medium p-5" >Pick your character's OCC Related Skills</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white p-5">Skill Picks Remaining: {{remaining}}</h2>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in selectedSkills" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }} ({{ skills.group }})</li>
          </ul>
        </div>
        <!-- Determine what button is active depending on prerequisites and previously known skills-->
        <button v-if="this.pickedSkill && this.pickedSkill.canRemove && !this.pickedSkill.known" v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3  m-7 px-3 py-2 text-xs text-white">Remove Selected</button>
        <button v-if="this.pickedSkill && !this.pickedSkill.canRemove && !this.pickedSkill.known" class="bg-yellow-500 font-medium rounded m-3  m-7 px-3 py-2 text-xs text-gray-900">Required by Another Skill</button>
        <button v-if="!this.pickedSkill" class="bg-gray-700 font-medium rounded m-3  m-7 px-3 py-2 text-xs text-white">Select a Skill</button>
        <button v-if="this.pickedSkill && this.pickedSkill.known" class="bg-green-700 font-medium rounded m-3  m-7 px-3 py-2 text-xs text-white">Can't Remove O.C.C. Skills</button>
        <p class="text-white pl-5 pb-5" >Fulfill the following requirements.</p>
      </div>

      <!-- Finalize Selections -->
      <div v-if="!tabsActive" class="flex flex-wrap content-center">
        <button v-on:click="finalizeSelections" class="mx-auto bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Finalize Selections</button>
      </div>

      <!-- Skill Lists -->
      <div v-show="tabsActive" class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <!-- Nav & Tabs -->
        <div class="m-3">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option v-if="communicationActive" value="communication">Communication Skills</option>
            <option v-if="cowboyActive" value="cowboy">Cowboy Skills</option>
            <option v-if="domesticActive" value="domestic">Domestic Skills</option>
            <option v-if="electricalActive" value="electrical">Electrical Skills</option>
            <option v-if="espionageActive" value="espionage">Espionage Skills</option>
            <option v-if="horsemanshipActive" value="horsemanship">Horsemanship Skills</option>
            <option v-if="mechanicalActive" value="mechanical">Mechanical Skills</option>
            <option v-if="medicalActive" value="medical">Medical Skills</option>
            <option v-if="militaryActive" value="military">Military Skills</option>
            <option v-if="physicalActive" value="physical">Physical Skills</option>
            <option v-if="pilotActive" value="pilot">Pilot Skills</option>
            <option v-if="pilotRelatedActive" value="pilotRelated">Pilot Related Skills</option>
            <option v-if="rogueActive" value="rogue">Rogue Skills</option>
            <option v-if="scienceActive" value="science">Science Skills</option>
            <option v-if="technicalActive" value="technical">Technical Skills</option>
            <option v-if="weaponProficienciesAncientActive" value="weaponProficienciesAncient">Weapon Proficiencies Ancient Skills</option>
            <option v-if="weaponProficienciesModernActive" value="weaponProficienciesModern">Weapon Proficiencies Modern Skills</option>
            <option v-if="wildernessActive" value="wilderness">Wilderness Skills</option>
          </select>
        </div>

        <!-- Communication List -->
        <div v-show="toggle==='communication' && communicationActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in communication" v-bind:key="index"  :id="'communication-'+ index" v-on:click="selected('communication',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Cowboy List -->
        <div v-show="toggle==='cowboy' && cowboyActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in cowboy" v-bind:key="index"  :id="'cowboy-'+ index" v-on:click="selected('cowboy',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Domestic List -->
        <div v-show="toggle==='domestic' && domesticActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in domestic" v-bind:key="index"  :id="'domestic-'+ index" v-on:click="selected('domestic',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Electrical List -->
        <div v-show="toggle==='electrical' && electricalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in electrical" v-bind:key="index"  :id="'electrical-'+ index" v-on:click="selected('electrical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Espionage List -->
        <div v-show="toggle==='espionage' && espionageActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in espionage" v-bind:key="index"  :id="'espionage-'+ index" v-on:click="selected('espionage',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Horsemanship List -->
        <div v-show="toggle==='horsemanship' && horsemanshipActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in horsemanship" v-bind:key="index"  :id="'horsemanship-'+ index" v-on:click="selected('horsemanship',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Mechanical List -->
        <div v-show="toggle==='mechanical' && mechanicalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in mechanical" v-bind:key="index"  :id="'mechanical-'+ index" v-on:click="selected('mechanical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Medical List -->
        <div v-show="toggle==='medical' && medicalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in medical" v-bind:key="index"  :id="'medical-'+ index" v-on:click="selected('medical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Military List -->
        <div v-show="toggle==='military' && militaryActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in military" v-bind:key="index"  :id="'military-'+ index" v-on:click="selected('military',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Physical List -->
        <div v-show="toggle==='physical' && physicalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in physical" v-bind:key="index"  :id="'physical-'+ index" v-on:click="selected('physical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Pilot List -->
        <div v-show="toggle==='pilot' && pilotActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in pilot" v-bind:key="index"  :id="'pilot-'+ index" v-on:click="selected('pilot',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Pilot Related List -->
        <div v-show="toggle==='pilotRelated' && pilotRelatedActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in pilotRelated" v-bind:key="index"  :id="'pilotRelated-'+ index" v-on:click="selected('pilotRelated',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Rogue List -->
        <div v-show="toggle==='rogue' && rogueActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in rogue" v-bind:key="index"  :id="'rogue-'+ index" v-on:click="selected('rogue',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Science List -->
        <div v-show="toggle==='science' && scienceActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in science" v-bind:key="index"  :id="'science-'+ index" v-on:click="selected('science',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Technical List -->
        <div v-show="toggle==='technical' && technicalActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in technical" v-bind:key="index"  :id="'technical-'+ index" v-on:click="selected('technical',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Weapon Proficiencies Ancient List -->
        <div v-show="toggle==='weaponProficienciesAncient' && weaponProficienciesAncientActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in weaponProficienciesAncient" v-bind:key="index"  :id="'weaponProficienciesAncient-'+ index" v-on:click="selected('weaponProficienciesAncient',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Weapon Proficiencies Modern List -->
        <div v-show="toggle==='weaponProficienciesModern' && weaponProficienciesModernActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in weaponProficienciesModern" v-bind:key="index"  :id="'weaponProficienciesModern-'+ index" v-on:click="selected('weaponProficienciesModern',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Wilderness List -->
        <div v-show="toggle==='wilderness' && wildernessActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(skills,index) in wilderness" v-bind:key="index"  :id="'wilderness-'+ index" v-on:click="selected('wilderness',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }}</li>
          </ul>
        </div>
        <!-- Add Selected Button -->
        <button v-if="this.selectedSkill && canAdd" v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
        <button v-if="this.selectedSkill && !canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Prerequisites Not Met</button>
        <button v-if="!this.selectedSkill" class="bg-gray-700 font-medium rounded m-7 text-xs px-3 py-2 text-white">Select a Skill</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="font-medium text-2xl">{{displaySkill[0].name}}</h2>
          <span v-show="displaySkill[0].required!= ''" class="font-medium text-gray-200">(Prerequisites: {{displaySkill[0].required}})<br></span>

          <span v-show="displaySkill[0].base"> <br><span class="font-medium text-gray-200">Base Skill:</span> {{displaySkill[0].base}}%
          <span v-show="displaySkill[0].baseTwo">/ {{displaySkill[0].baseTwo}}%</span>
          <span v-show="displaySkill[0].perLvl"> + {{displaySkill[0].perLvl}}% per level<br></span></span>
          <span v-show="displaySkill[0].takeTwiceBonus" class="font-medium text-gray-200">Bonus for Selecting Twice: <span class="font-normal">{{displaySkill[0].takeTwiceBonus}}</span><br></span>
          <br>
          <span class="font-medium text-gray-200">Description:</span>
          <div class="whitespace-pre-line overflow-y-auto max-h-96">
            {{displaySkill[0].description}}
            <span v-show="displaySkill[0].note != ''" class="font-medium text-gray-200"><br><br>Note:<br/></span>
            {{displaySkill[0].note}}
            <span v-show="displaySkill[0].bonus != ''" class="font-medium text-gray-200"><br><br>Bonuses:<br/></span>
            {{displaySkill[0].bonus}}
            <span v-show="displaySkill[0].penalty != ''" class="font-medium text-gray-200"><br><br>Penalties:<br/></span>
            {{displaySkill[0].penalty}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const Communication = require('../../../lib/Skills/Communication');
const Cowboy = require('../../../lib/Skills/Cowboy');
const Domestic = require('../../../lib/Skills/Domestic');
const Electrical = require('../../../lib/Skills/Electrical');
const Espionage = require('../../../lib/Skills/Espionage');
const Horsemanship = require('../../../lib/Skills/Horsemanship');
const Mechanical = require('../../../lib/Skills/Mechanical');
const Medical = require('../../../lib/Skills/Medical');
const Military = require('../../../lib/Skills/Military');
const Physical = require('../../../lib/Skills/Physical');
const Pilot = require('../../../lib/Skills/Pilot');
const PilotRelated = require('../../../lib/Skills/PilotRelated');
const Rogue = require('../../../lib/Skills/Rogue');
const Science = require('../../../lib/Skills/Science');
const Technical = require('../../../lib/Skills/Technical');
const WeaponProficienciesAncient = require('../../../lib/Skills/WeaponProficienciesAncient');
const WeaponProficienciesModern = require('../../../lib/Skills/WeaponProficienciesModern');
const Wilderness = require('../../../lib/Skills/Wilderness');

export default {
  name: "PickSkills",
  props: {
    newCharacter: Object
  },
  data: function(){
    return {
      // used to force a refresh
      componentKey: 0,
      // toggle to see if prerequisites are met
      canAdd: true,
      //
      // create skill groups
      communication: new Communication,
      cowboy: new Cowboy,
      domestic: new Domestic,
      electrical: new Electrical,
      espionage: new Espionage,
      horsemanship: new Horsemanship,
      mechanical: new Mechanical,
      medical: new Medical,
      military: new Military,
      physical: new Physical,
      pilot: new Pilot,
      pilotRelated: new PilotRelated,
      rogue: new Rogue,
      science: new Science,
      technical: new Technical,
      weaponProficienciesAncient: new WeaponProficienciesAncient,
      weaponProficienciesModern: new WeaponProficienciesModern,
      wilderness: new Wilderness,
      //
      // how many skill that are already known by the character before the user starts picking skills
      startingSkills: 0,
      // list of the characters currently selected skills
      selectedSkills: {},
      // current skill being displayed in the information section
      displaySkill: [{name:'Select a Skill'}],
      // toggles what skill list is currently visible
      toggle: "communication",
      // currently selected skill in the active skill list
      selectedSkill: null,
      // property of that selected skill
      selectedProperty: null,
      // currently selected skill in the selected skills list
      pickedSkill: null,
      // property of that selected skill
      pickedProperty: null,
      // number of remaining skill picks
      remaining: null,
      //
      // toggle to control if a skill list is available
      communicationActive: true,
      cowboyActive: true,
      domesticActive: true,
      electricalActive: true,
      espionageActive: true,
      horsemanshipActive: true,
      mechanicalActive: true,
      medicalActive: true,
      militaryActive: true,
      physicalActive: true,
      pilotActive: true,
      pilotRelatedActive: true,
      rogueActive: true,
      scienceActive: true,
      technicalActive: true,
      weaponProficienciesAncientActive: true,
      weaponProficienciesModernActive: true,
      wildernessActive: true,
      //
      // toggle to determine if the skill list tabs are active or the finalize button
      tabsActive: true,
      //
      // number of currently selected skills from a group
      communicationCount: 0,
      cowboyCount: 0,
      domesticCount: 0,
      electricalCount: 0,
      espionageCount: 0,
      horsemanshipCount: 0,
      mechanicalCount: 0,
      medicalCount: 0,
      militaryCount: 0,
      physicalCount: 0,
      pilotCount: 0,
      pilotRelatedCount: 0,
      rogueCount: 0,
      scienceCount: 0,
      technicalCount: 0,
      weaponProficienciesAncientCount: 0,
      weaponProficienciesModernCount: 0,
      wildernessCount: 0,
      // ID of the currently selected skill
      selectedId: null
    }
  },
  methods: {
    // handles what skill from the skill list is currently selected
    selected: function (group,index){
      let skillGroup;
      let listId;
      //
      // sets a tag on the list index so we know what group to return the skill to if selected and later removed
      if(group === 'communication'){
        skillGroup = this.communication
        listId = 'communication-'+[index]
      } else if (group === 'cowboy'){
        skillGroup = this.cowboy
        listId = 'cowboy-'+[index]
      } else if (group === 'domestic'){
        skillGroup = this.domestic
        listId = 'domestic-'+[index]
      } else if (group === 'electrical'){
        skillGroup = this.electrical
        listId = 'electrical-'+[index]
      } else if (group === 'espionage'){
        skillGroup = this.espionage
        listId = 'espionage-'+[index]
      } else if (group === 'horsemanship'){
        skillGroup = this.horsemanship
        listId = 'horsemanship-'+[index]
      } else if (group === 'mechanical'){
        skillGroup = this.mechanical
        listId = 'mechanical-'+[index]
      } else if (group === 'medical'){
        skillGroup = this.medical
        listId = 'medical-'+[index]
      } else if (group === 'military'){
        skillGroup = this.military
        listId = 'military-'+[index]
      } else if (group === 'physical'){
        skillGroup = this.physical
        listId = 'physical-'+[index]
      } else if (group === 'pilot'){
        skillGroup = this.pilot
        listId = 'pilot-'+[index]
      } else if (group === 'pilotRelated'){
        skillGroup = this.pilotRelated
        listId = 'pilotRelated-'+[index]
      } else if (group === 'rogue'){
        skillGroup = this.rogue
        listId = 'rogue-'+[index]
      } else if (group === 'science'){
        skillGroup = this.science
        listId = 'science-'+[index]
      } else if (group === 'technical'){
        skillGroup = this.technical
        listId = 'technical-'+[index]
      } else if (group === 'weaponProficienciesAncient'){
        skillGroup = this.weaponProficienciesAncient
        listId = 'weaponProficienciesAncient-'+[index]
      } else if (group === 'weaponProficienciesModern'){
        skillGroup = this.weaponProficienciesModern
        listId = 'weaponProficienciesModern-'+[index]
      } else {
        skillGroup = this.wilderness
        listId = 'wilderness-'+[index]
      }
      //
      // sets the selected skill
      this.selectedSkill = skillGroup[index];
      // sets the property of the selected skill
      this.selectedProperty = index;
      // clears the displayed skill array
      this.displaySkill = [];
      // puts the currently selected skill into the displaySkill array so user can see the skill information
      this.displaySkill.push(skillGroup[index]);
      // sets the background color of the list item
      this.selectedBg(listId)
      // Check prerequisites
      if(this.selectedSkill.preq.length > 0) {
        let required = 0;
        let requiredOr = 0;
        // get preq array from the selected skill object
        this.selectedSkill.preq.forEach(preq => {
          // check for each prerequisite in the currently selected skills
          let thisRequired = false
          for(const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preq)){
              // if one of the keys includes the needed skill, set this required to True
              thisRequired = true
            }
          }
          // if this required = true increase the required count
          if(thisRequired === true) {
            required++
          }
        })
        this.selectedSkill.preqOr.forEach(preqOr => {
          // check for each prerequisite in the currently selected skills
          let thisRequiredOr = false
          for(const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preqOr)){
              // if one of the keys includes the needed skill, set this required to True
              thisRequiredOr = true
            }
          }
          // if this required = true increase the required count
          if(thisRequiredOr === true) {
            requiredOr++
          }
        })
        // check if required count is equal to the number of preqs, if so the user can add the skill
        required === this.selectedSkill.preq.length || (requiredOr !== 0 && requiredOr === this.selectedSkill.preqOr.length) ?
            this.canAdd = true : this.canAdd = false

      } else {
        // if the array is empty there are no prerequisites
        this.canAdd = true
      }
      // set pickedSkill to null since the user is now in the skill group list
      this.pickedSkill = null;
    },
    // handles what skill from the selected skill list is currently selected
    picked: function (index){
      this.pickedSkill = this.selectedSkills[index];
      this.displaySkill = [];
      this.displaySkill.push(this.selectedSkills[index]);
      this.pickedProperty = index;
      let listId = 'pick-'+[index]
      this.selectedBg(listId)
      // set selectedSkill to null since the user is now in the selected skills list
      this.selectedSkill = null;
    },
    // adds a skill from the skill group to the selected list
    addSelected: function (){
      const prop = this.selectedProperty;
      const skill = this.selectedSkill
      if (skill !== null){
        // create the same object property in selectedSkills and copy the selected object to it
        this.selectedSkills[prop] = skill
        // create the same object property in newCharacter's known skills and copy the selected object to it
        this.newCharacter.skills.known[prop] = skill
        // increase group counts
        if (skill.group === 'Communication'){
          delete this.communication[prop]
          this.communicationCount++;
        } else if (skill.group === 'Cowboy'){
          delete this.cowboy[prop]
          this.cowboyCount++;
        } else if (skill.group === 'Domestic'){
          delete this.domestic[prop]
          this.domesticCount++;
        } else if (skill.group === 'Electrical'){
          delete this.electrical[prop]
          this.electricalCount++;
        } else if (skill.group === 'Espionage'){
          delete this.espionage[prop]
          this.espionageCount++;
        } else if (skill.group === 'Horsemanship'){
          delete this.horsemanship[prop]
          this.horsemanshipCount++;
        } else if (skill.group === 'Mechanical'){
          delete this.mechanical[prop]
          this.mechanicalCount++;
        } else if (skill.group === 'Medical'){
          delete this.medical[prop]
          this.medicalCount++;
        } else if (skill.group === 'Military'){
          delete this.military[prop]
          this.militaryCount++;
        } else if (skill.group === 'Physical'){
          delete this.physical[prop]
          this.physicalCount++;
        } else if (skill.group === 'Pilot'){
          delete this.pilot[prop]
          this.pilotCount++;
        } else if (skill.group === 'Pilot Related'){
          delete this.pilotRelated[prop]
          this.pilotRelatedCount++;
        } else if (skill.group === 'Rogue'){
          delete this.rogue[prop]
          this.rogueCount++;
        } else if (skill.group === 'Science'){
          delete this.science[prop]
          this.scienceCount++;
        } else if (skill.group === 'Technical'){
          delete this.technical[prop]
          this.technicalCount++;
        } else if (skill.group === 'Weapon Proficiencies Ancient'){
          delete this.weaponProficienciesAncient[prop]
          this.weaponProficienciesAncientCount++;
        } else if (skill.group === 'Weapon Proficiencies Modern'){
          delete this.weaponProficienciesModern[prop]
          this.weaponProficienciesModernCount++;
        } else {
          delete this.wilderness[prop]
          this.wildernessCount++;
        }
        this.selectedSkill = null;
        this.selectedProperty = null;
        this.selectedId = null;
        this.init();
      }
      this.selectedId = null
    },
    // removes a skill from the selected list and places it back in the skill group list
    removePicked: function (){
      const prop = this.pickedProperty;
      const skill = this.pickedSkill;
      if (skill !== null){
        if (skill.group === 'Communication'){
          this.communication[prop] = skill
          this.communicationCount--;
        } else if (skill.group === 'Cowboy'){
          this.cowboy[prop] = skill
          this.cowboyCount--;
        } else if (skill.group === 'Domestic'){
          this.domestic[prop] = skill
          this.domesticCount--;
        } else if (skill.group === 'Electrical'){
          this.electrical[prop] = skill
          this.electricalCount--;
        } else if (skill.group === 'Espionage'){
          this.espionage[prop] = skill
          this.espionageCount--;
        } else if (skill.group === 'Horsemanship'){
          this.horsemanship[prop] = skill
          this.horsemanshipCount--;
        } else if (skill.group === 'Mechanical'){
          this.mechanical[prop] = skill
          this.mechanicalCount--;
        } else if (skill.group === 'Medical'){
          this.medical[prop] = skill
          this.medicalCount--;
        } else if (skill.group === 'Military'){
          this.military[prop] = skill
          this.militaryCount--;
        } else if (skill.group === 'Physical'){
          this.physical[prop] = skill
          this.physicalCount--;
        } else if (skill.group === 'Pilot'){
          this.pilot[prop] = skill
          this.pilotCount--;
        } else if (skill.group === 'Pilot Related'){
          this.pilotRelated[prop] = skill
          this.pilotRelatedCount--;
        } else if (skill.group === 'Rogue'){
          this.rogue[prop] = skill
          this.rogueCount--;
        } else if (skill.group === 'Science'){
          this.science[prop] = skill
          this.scienceCount--;
        } else if (skill.group === 'Technical'){
          this.technical[prop] = skill
          this.technicalCount--;
        } else if (skill.group === 'Weapon Proficiencies Ancient'){
          this.weaponProficienciesAncient[prop] = skill
          this.weaponProficienciesAncientCount--;
        } else if (skill.group === 'Weapon Proficiencies Modern'){
          this.weaponProficienciesModern[prop] = skill
          this.weaponProficienciesModernCount--;
        } else {
          this.wilderness[prop] = skill
          this.wildernessCount--;
        }
        delete this.selectedSkills[prop]
        delete this.newCharacter.skills.known[prop]

        // check for prerequisites
        this.pickedSkill.preq.forEach(preq => {
          // make prerequisites un-removable
          for (const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preq)) {
              this.selectedSkills[key].canRemove = true
            }
          }
        })

        // check for ALT prerequisites
        this.pickedSkill.preqOr.forEach(preqOr => {
          // make prerequisites un-removable
          for (const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preqOr)) {
              this.selectedSkills[key].canRemove = true
            }
          }
        })

        this.pickedSkill = null;
        this.pickedProperty = null
        this.selectedId = null;
        this.init();
      }
    },
    // called to update skill counts, group counts, prerequisites and other data
    init: function() {
      // current count of total skills selected
      let skillPicked = Object.keys(this.selectedSkills).length;
      // count of skills given to the character at no cost by race or OCC
      let noCostSkills = this.startingSkills;
      // OCC or RCC related skills to be picked by user
      let skillStart = this.newCharacter.occ.occRelatedNumber;
      // selected skill count by group
      let skillHealing = this.healingCount
      let skillPhysical = this.physicalCount
      let skillSensitive = this.sensitiveCount

      // determine how many picks are left
      let availablePicks = skillStart - skillPicked + noCostSkills

      // see if the character is spreading it's picks over multiple groups, if so deduct 2 picks from the available total
      if ((skillHealing > 0 && skillPhysical > 0) || (skillHealing > 0 && skillSensitive > 0) || (skillSensitive > 0 && skillPhysical > 0)) {
        availablePicks = availablePicks - 2;
      }

      // determine what tabs are available
      if ((skillHealing > 0 && skillStart === 2) || (skillHealing > 5 && skillStart === 8)) {
        this.physicalActive = false;
        this.sensitiveActive = false;
      } else if ((skillPhysical > 0 && skillStart === 2) || (skillPhysical > 5 && skillStart === 8)) {
        this.healingActive = false;
        this.sensitiveActive = false;
      } else if ((skillSensitive > 0 && skillStart === 2) || (skillSensitive > 5 && skillStart === 8)) {
        this.physicalActive = false;
        this.healingActive = false;
      } else {
        this.physicalActive = true;
        this.healingActive = true;
        this.sensitiveActive = true;
      }

      // either show the finished button or the tabs
      this.tabsActive = availablePicks !== 0;

      // check to see if skills are removable
      if(Object.keys(this.selectedSkills).length > 0){
        for (const [key] of Object.entries(this.selectedSkills)) {
          // check for prerequisites
          this.selectedSkills[key].preq.forEach(preq => {
            // make prerequisites un-removable
            for (const [key] of Object.entries(this.selectedSkills)) {
              if (key.includes(preq)) {
                this.selectedSkills[key].canRemove = false
              }
            }
          })
          this.selectedSkills[key].preqOr.forEach(preqOr => {
            // make prerequisites un-removable
            for (const [key] of Object.entries(this.selectedSkills)) {
              if (key.includes(preqOr)) {
                this.selectedSkills[key].canRemove = false
              }
            }
          })
        }
      }

      // update remaining skills counter
      this.remaining = availablePicks;
    },
    // controls the background color on the skill group lists
    selectedBg: function (newId){
      if (this.selectedId != null) {
        document.getElementById(this.selectedId).removeAttribute('style')
        this.selectedId = null;
      }
      document.getElementById(newId).style.backgroundColor = 'rgba(165,180,252,1)';
      document.getElementById(newId).style.color = 'rgba(17,24,39,1)';
      this.selectedId = newId;
    },
    // adds the selected skills to the character and moves the user to the next creation step
    finalizeSelections: function (){

      // need to add stat bonuses here

      // set a toggle to true so that the player can move on in the character creation process
      this.newCharacter.skills.selected = true
    },
    // prepares skill lists
    skillLoader: function (groupList, occList) {
      // check for prerequisites
      occList.free.forEach(skill => {
        // make prerequisites un-removable
        for (const [key] of Object.entries(groupList)) {
          if (key.includes(skill.name)) {
            this.newCharacter.skills.known[key] = groupList[key]
            this.newCharacter.skills.known[key].known = true;
            this.newCharacter.skills.known[key].occBonus = skill.occBonus
            if (skill.base) {
              this.newCharacter.skills.known[key].base = skill.base
            }
            delete groupList[key]
          }
        }
      })
    },
    // gathers the necessary initial occ and character skill data
    onLoad: function () {
      this.skillLoader(this.communication, this.newCharacter.occ.occSkills.communication)
      // populates selectedSkills with skills granted by RCC or OCC so the player doesn't select them again
      this.selectedSkills = this.newCharacter.skills.known
      // gets a count of the known skills so they can be added later and will not count against the calculated remaining totals
      this.startingSkills = Object.keys(this.newCharacter.skills.known).length
    }
  },
  mounted: function () {
    // runs a function to gather the necessary initial occ and character skill data
    this.onLoad();
    // called to update skill counts, group counts, prerequisites and other data
    this.init();
  }
}
</script>

<style scoped>

</style>