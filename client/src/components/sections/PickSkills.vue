<template>
  <div class="px-5 pb-5">
    <p class="text-white text-xl font-medium p-5" >Pick your character's OCC Related Skills</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white pt-5 pl-5">Other Skill Picks Remaining: {{remaining}}</h2>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 max-h-96 overflow-y-auto divide-y divide-gray-600 ">
            <li v-for="(skills,index) in selectedSkills" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }} ({{ skills.group }})</li>
          </ul>
        </div>
        <!-- Determine what button is active depending on prerequisites and previously known skills-->
        <button v-if="this.pickedSkill && this.pickedSkill.canRemove && !this.pickedSkill.known" v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Remove Selected</button>
        <button v-if="this.pickedSkill && !this.pickedSkill.canRemove && !this.pickedSkill.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Required by Another Skill</button>
        <button v-if="!this.pickedSkill" class="bg-gray-700 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Select a Skill</button>
        <button v-if="this.pickedSkill && this.pickedSkill.known" class="bg-green-700 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Can't Remove O.C.C. Skills</button>
        <p class="text-white pl-5 font-medium" >Fulfill the following requirements.</p>
        <div class="pl-10 pb-5">
          <h2 v-if="communicationRemaining > 0" class="text-white pl-5">Communication Picks Needed: {{communicationRemaining}}</h2>
          <h2 v-if="cowboyRemaining > 0" class="text-white pl-5">Cowboy Picks Needed: {{cowboyRemaining}}</h2>
          <h2 v-if="domesticRemaining > 0" class="text-white pl-5">Domestic Picks Needed: {{domesticRemaining}}</h2>
          <h2 v-if="electricalRemaining > 0" class="text-white pl-5">Electrical Picks Needed: {{electricalRemaining}}</h2>
          <h2 v-if="espionageRemaining > 0" class="text-white ">Espionage Picks Needed: {{espionageRemaining}}</h2>
          <h2 v-if="horsemanshipRemaining > 0" class="text-white ">Horsemanship Picks Needed: {{horsemanshipRemaining}}</h2>
          <h2 v-if="mechanicalRemaining > 0" class="text-white ">Mechanical Picks Needed: {{mechanicalRemaining}}</h2>
          <h2 v-if="medicalRemaining > 0" class="text-white ">Medical Picks Needed: {{medicalRemaining}}</h2>
          <h2 v-if="militaryRemaining > 0" class="text-white ">Military Picks Needed: {{militaryRemaining}}</h2>
          <h2 v-if="physicalRemaining > 0" class="text-white ">Physical Picks Needed: {{physicalRemaining}}</h2>
          <h2 v-if="pilotRemaining > 0" class="text-white ">Pilot Picks Needed: {{pilotRemaining}}</h2>
          <h2 v-if="pilotRelatedRemaining > 0" class="text-white ">Pilot Related Picks Needed: {{pilotRelatedRemaining}}</h2>
          <h2 v-if="rogueRemaining > 0" class="text-white ">Rogue Picks Needed: {{rogueRemaining}}</h2>
          <h2 v-if="scienceRemaining > 0" class="text-white ">Science Picks Needed: {{scienceRemaining}}</h2>
          <h2 v-if="technicalRemaining > 0" class="text-white ">Technical Picks Needed: {{technicalRemaining}}</h2>
          <h2 v-if="weaponProficienciesAncientRemaining > 0" class="text-white ">Weapon Proficiencies Ancient Picks Needed: {{weaponProficienciesAncientRemaining}}</h2>
          <h2 v-if="weaponProficienciesModernRemaining > 0" class="text-white ">Weapon Proficiencies Modern Picks Needed: {{weaponProficienciesModernRemaining}}</h2>
          <h2 v-if="wildernessRemaining > 0" class="text-white ">Wilderness Picks Needed: {{wildernessRemaining}}</h2>
        </div>
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
        <div v-show="toggle==='cowboy' && cowboy.active" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
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
        <button v-if="this.selectedSkill && canAdd && enoughPicks" v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
        <button v-if="this.selectedSkill && !canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Prerequisites Not Met</button>
        <button v-if="this.selectedSkill && !enoughPicks" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Not Enough Picks Remaining</button>
        <button v-if="!this.selectedSkill" class="bg-gray-700 font-medium rounded m-7 text-xs px-3 py-2 text-white">Select a Skill</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="font-medium text-2xl">{{displaySkill[0].name}}</h2>
          <span v-show="displaySkill[0].required!= ''" class="font-medium text-gray-200">(Prerequisites: {{displaySkill[0].required}})<br></span>
          <span v-show="displaySkill[0].skillCost > 1 " class="font-medium text-gray-200">(Counts as {{displaySkill[0].skillCost}} skill selections)<br></span>

          <span v-show="displaySkill[0].base"> <br><span class="font-medium text-gray-200">Base Skill:</span> {{displaySkill[0].base}}%
          <span v-show="displaySkill[0].baseTwo">/ {{displaySkill[0].baseTwo}}%</span>
          <span v-show="displaySkill[0].perLvl"> + {{displaySkill[0].perLvl}}% per level<br></span></span>
          <span v-show="displaySkill[0].takeTwiceBonus" class="font-medium text-gray-200">Bonus for Selecting Twice: <span class="font-normal">{{displaySkill[0].takeTwiceBonus}}</span><br></span>
          <span v-show="displaySkill[0].occBonus" class="font-medium text-gray-200">O.C.C. Bonus: <span class="font-normal">+{{displaySkill[0].occBonus}}%</span><br></span>
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
      // number of skills picked so far
      skillPicked: 0,
      // toggle for picks left vs needed
      enoughPicks: true,
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
      //
      // number of required skill picks by occ
      communicationRequired: 0,
      cowboyRequired: 0,
      domesticRequired: 0,
      electricalRequired: 0,
      espionageRequired: 0,
      horsemanshipRequired: 0,
      mechanicalRequired: 0,
      medicalRequired: 0,
      militaryRequired: 0,
      physicalRequired: 0,
      pilotRequired: 0,
      pilotRelatedRequired: 0,
      rogueRequired: 0,
      scienceRequired: 0,
      technicalRequired: 0,
      weaponProficienciesAncientRequired: 0,
      weaponProficienciesModernRequired: 0,
      wildernessRequired: 0,
      //
      // number of required occ skill picks remaining
      communicationRemaining: 0,
      cowboyRemaining: 0,
      domesticRemaining: 0,
      electricalRemaining: 0,
      espionageRemaining: 0,
      horsemanshipRemaining: 0,
      mechanicalRemaining: 0,
      medicalRemaining: 0,
      militaryRemaining: 0,
      physicalRemaining: 0,
      pilotRemaining: 0,
      pilotRelatedRemaining: 0,
      rogueRemaining: 0,
      scienceRemaining: 0,
      technicalRemaining: 0,
      weaponProficienciesAncientRemaining: 0,
      weaponProficienciesModernRemaining: 0,
      wildernessRemaining: 0,

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
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.communicationRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'cowboy'){
        skillGroup = this.cowboy
        listId = 'cowboy-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.cowboyRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'domestic'){
        skillGroup = this.domestic
        listId = 'domestic-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.domesticRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'electrical'){
        skillGroup = this.electrical
        listId = 'electrical-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.electricalRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'espionage'){
        skillGroup = this.espionage
        listId = 'espionage-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.espionageRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'horsemanship'){
        skillGroup = this.horsemanship
        listId = 'horsemanship-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.horsemanshipRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'mechanical'){
        skillGroup = this.mechanical
        listId = 'mechanical-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.mechanicalRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'medical'){
        skillGroup = this.medical
        listId = 'medical-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.medicalRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'military'){
        skillGroup = this.military
        listId = 'military-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.militaryRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'physical'){
        skillGroup = this.physical
        listId = 'physical-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.physicalRemaining )
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'pilot'){
        skillGroup = this.pilot
        listId = 'pilot-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.pilotRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'pilotRelated'){
        skillGroup = this.pilotRelated
        listId = 'pilotRelated-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.pilotRelatedRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'rogue'){
        skillGroup = this.rogue
        listId = 'rogue-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.rogueRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'science'){
        skillGroup = this.science
        listId = 'science-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.scienceRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'technical'){
        skillGroup = this.technical
        listId = 'technical-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.technicalRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'weaponProficienciesAncient'){
        skillGroup = this.weaponProficienciesAncient
        listId = 'weaponProficienciesAncient-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.weaponProficienciesAncientRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else if (group === 'weaponProficienciesModern'){
        skillGroup = this.weaponProficienciesModern
        listId = 'weaponProficienciesModern-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.weaponProficienciesModernRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
      } else {
        skillGroup = this.wilderness
        listId = 'wilderness-'+[index]
        if(skillGroup[index].skillCost > this.remaining)
        {
          if(skillGroup[index].skillCost <= this.wildernessRemaining)
          {
            this.enoughPicks = true;
          } else {
            this.enoughPicks = false
          }
        } else {
          this.enoughPicks = true
        }
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
          let thisRemaining = false
          for(const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preq)){
              // if one of the keys includes the needed skill, set this required to True
              thisRemaining = true
            }
          }
          // if this required = true increase the required count
          if(thisRemaining === true) {
            required++
          }
        })
        this.selectedSkill.preqOr.forEach(preqOr => {
          // check for each prerequisite in the currently selected skills
          let thisRemainingOr = false
          for(const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preqOr)){
              // if one of the keys includes the needed skill, set this required to True
              thisRemainingOr = true
            }
          }
          // if this required = true increase the required count
          if(thisRemainingOr === true) {
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
          this.communicationCount = this.communicationCount + skill.skillCost;
          console.log(this.skillPicked)
          console.log(skill.skillCost)
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Cowboy'){
          delete this.cowboy[prop]
          this.cowboyCount = this.cowboyCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Domestic'){
          delete this.domestic[prop]
          this.domesticCount = this.domesticCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Electrical'){
          delete this.electrical[prop]
          this.electricalCount = this.electricalCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Espionage'){
          delete this.espionage[prop]
          this.espionageCount = this.espionageCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Horsemanship'){
          delete this.horsemanship[prop]
          this.horsemanshipCount = this.horsemanshipCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Mechanical'){
          delete this.mechanical[prop]
          this.mechanicalCount = this.mechanicalCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Medical'){
          delete this.medical[prop]
          this.medicalCount = this.medicalCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Military'){
          delete this.military[prop]
          this.militaryCount = this.militaryCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Physical'){
          delete this.physical[prop]
          this.physicalCount = this.physicalCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Pilot'){
          delete this.pilot[prop]
          this.pilotCount = this.pilotCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Pilot Related'){
          delete this.pilotRelated[prop]
          this.pilotRelatedCount = this.pilotRelatedCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Rogue'){
          delete this.rogue[prop]
          this.rogueCount = this.rogueCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Science'){
          delete this.science[prop]
          this.scienceCount = this.scienceCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Technical'){
          delete this.technical[prop]
          this.technicalCount = this.technicalCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Weapon Proficiencies Ancient'){
          delete this.weaponProficienciesAncient[prop]
          this.weaponProficienciesAncientCount = this.weaponProficienciesAncientCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else if (skill.group === 'Weapon Proficiencies Modern'){
          delete this.weaponProficienciesModern[prop]
          this.weaponProficienciesModernCount = this.weaponProficienciesModernCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
        } else {
          delete this.wilderness[prop]
          this.wildernessCount = this.wildernessCount + skill.skillCost;
          this.skillPicked = this.skillPicked + skill.skillCost;
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
          this.communicationCount = this.communicationCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Cowboy'){
          this.cowboy[prop] = skill
          this.cowboyCount = this.cowboyCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Domestic'){
          this.domestic[prop] = skill
          this.domesticCount = this.domesticCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Electrical'){
          this.electrical[prop] = skill
          this.electricalCount = this.electricalCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Espionage'){
          this.espionage[prop] = skill
          this.espionageCount = this.espionageCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Horsemanship'){
          this.horsemanship[prop] = skill
          this.horsemanshipCount = this.horsemanshipCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Mechanical'){
          this.mechanical[prop] = skill
          this.mechanicalCount = this.mechanicalCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Medical'){
          this.medical[prop] = skill
          this.medicalCount = this.medicalCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Military'){
          this.military[prop] = skill
          this.militaryCount = this.militaryCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Physical'){
          this.physical[prop] = skill
          this.physicalCount = this.physicalCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Pilot'){
          this.pilot[prop] = skill
          this.pilotCount = this.pilotCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Pilot Related'){
          this.pilotRelated[prop] = skill
          this.pilotRelatedCount = this.pilotRelatedCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Rogue'){
          this.rogue[prop] = skill
          this.rogueCount = this.rogueCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Science'){
          this.science[prop] = skill
          this.scienceCount = this.scienceCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Technical'){
          this.technical[prop] = skill
          this.technicalCount = this.technicalCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Weapon Proficiencies Ancient'){
          this.weaponProficienciesAncient[prop] = skill
          this.weaponProficienciesAncientCount = this.weaponProficienciesAncientCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else if (skill.group === 'Weapon Proficiencies Modern'){
          this.weaponProficienciesModern[prop] = skill
          this.weaponProficienciesModernCount = this.weaponProficienciesModernCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
        } else {
          this.wilderness[prop] = skill
          this.wildernessCount = this.wildernessCount - skill.skillCost;
          this.skillPicked = this.skillPicked - skill.skillCost;
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
      // let skillPicked = Object.keys(this.selectedSkills).length;
      // count of skills given to the character at no cost by race or OCC
      // let noCostSkills = this.startingSkills;
      // OCC or RCC related skills to be picked by user
      let skillStart = this.newCharacter.occ.occRelatedNumber;

      // determine how many picks are left
      let availablePicks = skillStart - this.skillPicked;

      // get required occ picks
      this.communicationRequired = this.newCharacter.occ.occSkills.communication.number;
      this.cowboyRequired = this.newCharacter.occ.occSkills.cowboy.number;
      this.domesticRequired = this.newCharacter.occ.occSkills.domestic.number;
      this.electricalRequired = this.newCharacter.occ.occSkills.electrical.number;
      this.espionageRequired = this.newCharacter.occ.occSkills.espionage.number;
      this.horsemanshipRequired = this.newCharacter.occ.occSkills.horsemanship.number;
      this.mechanicalRequired = this.newCharacter.occ.occSkills.mechanical.number;
      this.medicalRequired = this.newCharacter.occ.occSkills.medical.number;
      this.militaryRequired = this.newCharacter.occ.occSkills.military.number;
      this.physicalRequired = this.newCharacter.occ.occSkills.physical.number;
      this.pilotRequired = this.newCharacter.occ.occSkills.pilot.number;
      this.pilotRelatedRequired = this.newCharacter.occ.occSkills.pilotRelated.number;
      this.rogueRequired = this.newCharacter.occ.occSkills.rogue.number;
      this.scienceRequired = this.newCharacter.occ.occSkills.science.number;
      this.technicalRequired = this.newCharacter.occ.occSkills.technical.number;
      this.weaponProficienciesAncientRequired = this.newCharacter.occ.occSkills.weaponProficienciesAncient.number;
      this.weaponProficienciesModernRequired = this.newCharacter.occ.occSkills.weaponProficienciesModern.number;
      this.wildernessRequired = this.newCharacter.occ.occSkills.wilderness.number;

      // get skill pick requirements
      this.communicationRemaining = Math.max(0, this.communicationRequired - this.communicationCount)
      this.cowboyRemaining = Math.max(0, this.cowboyRequired - this.cowboyCount)
      this.domesticRemaining = Math.max(0, this.domesticRequired - this.domesticCount)
      this.electricalRemaining = Math.max(0, this.electricalRequired - this.electricalCount)
      this.espionageRemaining = Math.max(0, this.espionageRequired - this.espionageCount)
      this.horsemanshipRemaining = Math.max(0, this.horsemanshipRequired - this.horsemanshipCount)
      this.mechanicalRemaining = Math.max(0, this.mechanicalRequired - this.mechanicalCount)
      this.medicalRemaining = Math.max(0, this.medicalRequired - this.medicalCount)
      this.militaryRemaining = Math.max(0, this.militaryRequired - this.militaryCount)
      this.physicalRemaining = Math.max(0, this.physicalRequired - this.physicalCount)
      this.pilotRemaining = Math.max(0, this.pilotRequired - this.pilotCount)
      this.pilotRelatedRemaining = Math.max(0, this.pilotRelatedRequired - this.pilotRelatedCount)
      this.rogueRemaining = Math.max(0, this.rogueRequired - this.rogueCount)
      this.scienceRemaining = Math.max(0, this.scienceRequired - this.scienceCount)
      this.technicalRemaining = Math.max(0, this.technicalRequired - this.technicalCount)
      this.weaponProficienciesAncientRemaining = Math.max(0, this.weaponProficienciesAncientRequired - this.weaponProficienciesAncientCount)
      this.weaponProficienciesModernRemaining = Math.max(0, this.weaponProficienciesModernRequired - this.weaponProficienciesModernCount)
      this.wildernessRemaining = Math.max(0, this.wildernessRequired - this.wildernessCount)

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
      this.remaining = availablePicks
          - this.communicationRemaining
          - this.cowboyRemaining
          - this.domesticRemaining
          - this.electricalRemaining
          - this.espionageRemaining
          - this.horsemanshipRemaining
          - this.mechanicalRemaining
          - this.medicalRemaining
          - this.militaryRemaining
          - this.physicalRemaining
          - this.pilotRemaining
          - this.pilotRelatedRemaining
          - this.rogueRemaining
          - this.scienceRemaining
          - this.technicalRemaining
          - this.weaponProficienciesAncientRemaining
          - this.weaponProficienciesModernRemaining
          - this.wildernessRemaining
      ;

      // determine what tabs are available
      if (Object.keys(this.communication).length > 0 && this.remaining === 0) {
        if (this.communicationRemaining === 0) {
          this.communicationActive = false
        } else {
          this.communicationActive = true
        }
      } else if (Object.keys(this.communication).length > 0 && this.remaining !== 0) {
        this.communicationActive = true
      } else {
        this.communicationActive = false
      }
      if (Object.keys(this.cowboy).length > 0 && this.remaining === 0) {
        if (this.cowboyRemaining === 0) {
          this.cowboyActive = false
        } else {
          this.cowboyActive = true
        }
      } else if (Object.keys(this.cowboy).length > 0 && this.remaining !== 0) {
        this.cowboyActive = true
      } else {
        this.cowboyActive = false
      }
      if (Object.keys(this.domestic).length > 0 && this.remaining === 0) {
        if (this.domesticRemaining === 0) {
          this.domesticActive = false
        } else {
          this.domesticActive = true
        }
      } else if (Object.keys(this.domestic).length > 0 && this.remaining !== 0) {
        this.domesticActive = true
      } else {
        this.domesticActive = false
      }
      if (Object.keys(this.electrical).length > 0 && this.remaining === 0) {
        if (this.electricalRemaining === 0) {
          this.electricalActive = false
        } else {
          this.electricalActive = true
        }
      } else if (Object.keys(this.electrical).length > 0 && this.remaining !== 0) {
        this.electricalActive = true
      } else {
        this.electricalActive = false
      }
      if (Object.keys(this.espionage).length > 0 && this.remaining === 0) {
        if (this.espionageRemaining === 0) {
          this.espionageActive = false
        } else {
          this.espionageActive = true
        }
      } else if (Object.keys(this.espionage).length > 0 && this.remaining !== 0) {
        this.espionageActive = true
      } else {
        this.espionageActive = false
      }
      if (Object.keys(this.horsemanship).length > 0 && this.remaining === 0) {
        if (this.horsemanshipRemaining === 0) {
          this.horsemanshipActive = false
        } else {
          this.horsemanshipActive = true
        }
      } else if (Object.keys(this.horsemanship).length > 0 && this.remaining !== 0) {
        this.horsemanshipActive = true
      } else {
        this.horsemanshipActive = false
      }
      if (Object.keys(this.mechanical).length > 0 && this.remaining === 0) {
        if (this.mechanicalRemaining === 0) {
          this.mechanicalActive = false
        } else {
          this.mechanicalActive = true
        }
      } else if (Object.keys(this.mechanical).length > 0 && this.remaining !== 0) {
        this.mechanicalActive = true
      } else {
        this.mechanicalActive = false
      }
      if (Object.keys(this.medical).length > 0 && this.remaining === 0) {
        if (this.medicalRemaining === 0) {
          this.medicalActive = false
        } else {
          this.medicalActive = true
        }
      } else if (Object.keys(this.medical).length > 0 && this.remaining !== 0) {
        this.medicalActive = true
      } else {
        this.medicalActive = false
      }
      if (Object.keys(this.military).length > 0 && this.remaining === 0) {
        if (this.militaryRemaining === 0) {
          this.militaryActive = false
        } else {
          this.militaryActive = true
        }
      } else if (Object.keys(this.military).length > 0 && this.remaining !== 0) {
        this.militaryActive = true
      } else {
        this.militaryActive = false
      }
      if (Object.keys(this.physical).length > 0 && this.remaining === 0) {
        if (this.physicalRemaining === 0) {
          this.physicalActive = false
        } else {
          this.physicalActive = true
        }
      } else if (Object.keys(this.physical).length > 0 && this.remaining !== 0) {
        this.physicalActive = true
      } else {
        this.physicalActive = false
      }
      if (Object.keys(this.pilot).length > 0 && this.remaining === 0) {
        if (this.pilotRemaining === 0) {
          this.pilotActive = false
        } else {
          this.pilotActive = true
        }
      } else if (Object.keys(this.pilot).length > 0 && this.remaining !== 0) {
        this.pilotActive = true
      } else {
        this.pilotActive = false
      }
      if (Object.keys(this.pilotRelated).length > 0 && this.remaining === 0) {
        if (this.pilotRelatedRemaining === 0) {
          this.pilotRelatedActive = false
        } else {
          this.pilotRelatedActive = true
        }
      } else if (Object.keys(this.pilotRelated).length > 0 && this.remaining !== 0) {
        this.pilotRelatedActive = true
      } else {
        this.pilotRelatedActive = false
      }
      if (Object.keys(this.rogue).length > 0 && this.remaining === 0) {
        if (this.rogueRemaining === 0) {
          this.rogueActive = false
        } else {
          this.rogueActive = true
        }
      } else if (Object.keys(this.rogue).length > 0 && this.remaining !== 0) {
        this.rogueActive = true
      } else {
        this.rogueActive = false
      }
      if (Object.keys(this.science).length > 0 && this.remaining === 0) {
        if (this.scienceRemaining === 0) {
          this.scienceActive = false
        } else {
          this.scienceActive = true
        }
      } else if (Object.keys(this.science).length > 0 && this.remaining !== 0) {
        this.scienceActive = true
      } else {
        this.scienceActive = false
      }
      if (Object.keys(this.technical).length > 0 && this.remaining === 0) {
        if (this.technicalRemaining === 0) {
          this.technicalActive = false
        } else {
          this.technicalActive = true
        }
      } else if (Object.keys(this.technical).length > 0 && this.remaining !== 0) {
        this.technicalActive = true
      } else {
        this.technicalActive = false
      }
      if (Object.keys(this.weaponProficienciesAncient).length > 0 && this.remaining === 0) {
        if (this.weaponProficienciesAncientRemaining === 0) {
          this.weaponProficienciesAncientActive = false
        } else {
          this.weaponProficienciesAncientActive = true
        }
      } else if (Object.keys(this.weaponProficienciesAncient).length > 0 && this.remaining !== 0) {
        this.weaponProficienciesAncientActive = true
      } else {
        this.weaponProficienciesAncientActive = false
      }
      if (Object.keys(this.weaponProficienciesModern).length > 0 && this.remaining === 0) {
        if (this.weaponProficienciesModernRemaining === 0) {
          this.weaponProficienciesModernActive = false
        } else {
          this.weaponProficienciesModernActive = true
        }
      } else if (Object.keys(this.weaponProficienciesModern).length > 0 && this.remaining !== 0) {
        this.weaponProficienciesModernActive = true
      } else {
        this.weaponProficienciesModernActive = false
      }
      if (Object.keys(this.wilderness).length > 0 && this.remaining === 0) {
        if (this.wildernessRemaining === 0) {
          this.wildernessActive = false
        } else {
          this.wildernessActive = true
        }
      } else if (Object.keys(this.wilderness).length > 0 && this.remaining !== 0) {
        this.wildernessActive = true
      } else {
        this.wildernessActive = false
      }
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
      // handle known skills
      occList.free.forEach(skill => {
        for (const [key] of Object.entries(groupList)) {
          if (key === skill.name) {
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
      // handle available skills
      occList.available.forEach(skill => {
        for (const [key] of Object.entries(groupList)) {
          if(skill.name === 'Any') {
            groupList[key].occBonus = skill.occBonus;
            if(skill.skillCost) {
              groupList[key].skillCost = skill.skillCost;
            }
          }
          if (key === skill.name) {
            groupList[key].occBonus = skill.occBonus;
            if(skill.skillCost) {
              groupList[key].skillCost = skill.skillCost;
            }
          }
        }
      })
      // handle unavailable skills
      occList.unavailable.forEach(skill => {
        for (const [key] of Object.entries(groupList)) {
          if(skill.name === 'All') {
            delete groupList[key]
          }
          if (key === skill.name) {
            delete groupList[key]
          }
        }
      })
      // handle only skills
      occList.only.forEach(skill => {
        for (const [key] of Object.entries(groupList)) {
          if (key === skill.name) {
            groupList[key].occBonus = skill.occBonus;
            if(skill.skillCost) {
              groupList[key].skillCost = skill.skillCost;
            }
          } else {
            delete groupList[key]
          }
        }
      })
    },
    // gathers the necessary initial occ and character skill data
    onLoad: function () {
      //
      // loads occ skills and occ related skill selections
      this.skillLoader(this.communication, this.newCharacter.occ.occSkills.communication)
      this.skillLoader(this.cowboy, this.newCharacter.occ.occSkills.cowboy)
      this.skillLoader(this.domestic, this.newCharacter.occ.occSkills.domestic)
      this.skillLoader(this.electrical, this.newCharacter.occ.occSkills.electrical)
      this.skillLoader(this.espionage, this.newCharacter.occ.occSkills.espionage)
      this.skillLoader(this.horsemanship, this.newCharacter.occ.occSkills.horsemanship)
      this.skillLoader(this.mechanical, this.newCharacter.occ.occSkills.mechanical)
      this.skillLoader(this.medical, this.newCharacter.occ.occSkills.medical)
      this.skillLoader(this.military, this.newCharacter.occ.occSkills.military)
      this.skillLoader(this.physical, this.newCharacter.occ.occSkills.physical)
      this.skillLoader(this.pilot, this.newCharacter.occ.occSkills.pilot)
      this.skillLoader(this.pilotRelated, this.newCharacter.occ.occSkills.pilotRelated)
      this.skillLoader(this.rogue, this.newCharacter.occ.occSkills.rogue)
      this.skillLoader(this.science, this.newCharacter.occ.occSkills.science)
      this.skillLoader(this.technical, this.newCharacter.occ.occSkills.technical)
      this.skillLoader(this.weaponProficienciesAncient, this.newCharacter.occ.occSkills.weaponProficienciesAncient)
      this.skillLoader(this.weaponProficienciesModern, this.newCharacter.occ.occSkills.weaponProficienciesModern)
      this.skillLoader(this.wilderness, this.newCharacter.occ.occSkills.wilderness)

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