<template>
  <div class="px-5 pb-5">
    <p class="text-white text-xl font-medium p-5" >Pick O.C.C skills</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <p class="text-white pl-5 pt-5 font-medium" >Fulfill the following requirements.</p>
        <div class="pl-10 pb-5">
          <h2 v-if="communicationRemaining > 0" class="text-white">Communication Picks Needed: {{communicationRemaining}}</h2>
          <h2 v-if="languageRemaining > 0" class="text-gray-400 pl-5">Language Picks Needed: {{languageRemaining}}</h2>
          <h2 v-if="literacyRemaining > 0" class="text-gray-400 pl-5">Literacy Picks Needed: {{literacyRemaining}}</h2>
          <h2 v-if="cowboyRemaining > 0" class="text-white">Cowboy Picks Needed: {{cowboyRemaining}}</h2>
          <h2 v-if="domesticRemaining > 0" class="text-white">Domestic Picks Needed: {{domesticRemaining}}</h2>
          <h2 v-if="electricalRemaining > 0" class="text-white">Electrical Picks Needed: {{electricalRemaining}}</h2>
          <h2 v-if="espionageRemaining > 0" class="text-white">Espionage Picks Needed: {{espionageRemaining}}</h2>
          <h2 v-if="horsemanshipRemaining > 0" class="text-white">Horsemanship Picks Needed: {{horsemanshipRemaining}}</h2>
          <h2 v-if="mechanicalRemaining > 0" class="text-white">Mechanical Picks Needed: {{mechanicalRemaining}}</h2>
          <h2 v-if="medicalRemaining > 0" class="text-white">Medical Picks Needed: {{medicalRemaining}}</h2>
          <h2 v-if="militaryRemaining > 0" class="text-white">Military Picks Needed: {{militaryRemaining}}</h2>
          <h2 v-if="physicalRemaining > 0" class="text-white">Physical Picks Needed: {{physicalRemaining}}</h2>
          <h2 v-if="pilotRemaining > 0" class="text-white">Pilot Picks Needed: {{pilotRemaining}}</h2>
          <h2 v-if="pilotRelatedRemaining > 0" class="text-white">Pilot Related Picks Needed: {{pilotRelatedRemaining}}</h2>
          <h2 v-if="rogueRemaining > 0" class="text-white">Rogue Picks Needed: {{rogueRemaining}}</h2>
          <h2 v-if="scienceRemaining > 0" class="text-white">Science Picks Needed: {{scienceRemaining}}</h2>
          <h2 v-if="technicalRemaining > 0" class="text-white">Technical Picks Needed: {{technicalRemaining}}</h2>
          <h2 v-if="weaponProficienciesAncientRemaining > 0 && wpRequired === 0" class="text-white">Ancient Weapon Proficiency Picks Needed: {{weaponProficienciesAncientRemaining}}</h2>
          <h2 v-if="weaponProficienciesModernRemaining > 0 && wpRequired === 0" class="text-white">Modern Weapon Proficiency Picks Needed: {{weaponProficienciesModernRemaining}}</h2>
          <h2 v-if="wpRemaining > 0" class="text-white">Weapon Proficiency Picks Needed: {{wpRemaining}}</h2>
          <h2 v-if="wildernessRemaining > 0" class="text-white">Wilderness Picks Needed: {{wildernessRemaining}}</h2>
        </div>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 max-h-96 overflow-y-auto divide-y divide-gray-600 ">
            <li v-for="(skills,index) in selectedSkills" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ skills.name }} <span class="text-gray-500">[{{ skills.group }}]</span></li>
          </ul>
        </div>
        <!-- Determine what button is active depending on prerequisites and previously known skills-->
        <button v-if="this.pickedSkill && this.pickedSkill.canRemove && !this.pickedSkill.known" v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Remove Selected</button>
        <button v-if="this.pickedSkill && !this.pickedSkill.canRemove && !this.pickedSkill.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Required by Another Skill</button>
        <button v-if="!this.pickedSkill" class="bg-gray-700 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Select a Skill</button>
        <button v-if="this.pickedSkill && this.pickedSkill.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Cannot Remove</button>
      </div>

      <!-- Finalize Selections -->
      <div v-if="!tabsActive" class="flex flex-wrap content-center">
        <button v-on:click="finalizeSelections" class="mx-auto bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Finalize Selections</button>
      </div>

      <!-- Skill Lists -->
      <div v-show="tabsActive" class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <!-- Nav & Tabs -->
        <div class="m-3">
          <label for="tabs" class="sr-only"></label>
          <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option value="default" selected disabled> Select a Skill Group... </option>
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
        <button v-if="(this.selectedSkill && canAdd && enoughPicks && !displaySkill[0].textEntry) ||
          (this.selectedSkill && canAdd && enoughPicks && displaySkill[0].textEntry && hasText && !duplicateSkill) " v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
        <button v-if="this.selectedSkill && !canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Prerequisites Not Met</button>
        <button v-if="this.selectedSkill && !enoughPicks" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Not Enough Picks Remaining</button>
        <button v-if="this.selectedSkill && !hasText && displaySkill[0].textEntry !== '' && !duplicateSkill && canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">{{displaySkill[0].textEntry}}</button>
        <button v-if="this.selectedSkill && duplicateSkill && canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Appears to be a Duplicate</button>
        <button v-if="!this.selectedSkill" class="bg-gray-700 font-medium rounded m-7 text-xs px-3 py-2 text-white">Select a Skill</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="inline-flex font-medium text-2xl">{{displaySkill[0].name}}<br/>
            <input v-on:input="textCheck()" v-show="displaySkill[0].textEntry !== '' && this.selectedSkill" v-model="displayTextBox" type="text" :placeholder="displaySkill[0].textEntry" name="displayTextBox" id="displayTextBox" class="ml-2 py-1 px-2 block max-h-10 w-full shadow-sm text-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
            <span v-if="this.selectedSkill && this.selectedSkill.takeTwice" class="my-auto text-xs px-5">
              <input v-on:click="takeChecked()" id="takeTwice" name="takeTwice" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 mx-1 text-indigo-600 border-gray-300 rounded" />
              (take twice)
            </span>
            <span v-if="this.pickedSkill && this.pickedSkill.takenTwice" class="my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">
              taken twice
            </span>
            <span v-if="this.pickedSkill && !this.pickedSkill.takenTwice && this.pickedSkill.takeTwice" class="my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-full text-xs font-medium bg-gray-300 text-indigo-900">
              taken once
            </span>
            <span v-if="this.pickedSkill && !this.pickedSkill.takenTwice && this.pickedSkill.takeTwice && enoughPicks" v-on:mouseleave="enoughPicks = true" v-on:mouseenter="takeAvailable" v-on:click="takeAgain()" class="cursor-pointer my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-sm text-xs font-medium bg-gray-700 text-white hover:bg-green-500 hover:text-gray-900">
              take again
            </span>
            <span v-if="this.pickedSkill && this.pickedSkill.takenTwice && this.pickedSkill.takeTwice" v-on:click="takeBack()" class="cursor-pointer my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-sm text-xs font-medium bg-gray-700 text-white hover:bg-yellow-700 hover:text-gray-900">
              take once
            </span>
            <span v-if="this.pickedSkill && !this.pickedSkill.takenTwice && this.pickedSkill.takeTwice && !enoughPicks" v-on:mouseleave="enoughPicks = true" v-on:mouseenter="takeAvailable" class="cursor-pointer my-auto ml-5 px-2.5 pt-0.5 py-1 rounded-sm text-xs font-medium bg-yellow-500 text-gray-900">
              not enough picks to take again
            </span>
          </h2>
          <br/>
          <span v-show="displaySkill[0].required !== ''" class="font-medium text-gray-200">(Prerequisites: {{displaySkill[0].required}})<br></span>
          <span v-show="displaySkill[0].skillCost > 1 " class="font-medium text-gray-200">(Counts as {{displaySkill[0].skillCost}} skill selections)<br></span>

          <span v-show="displaySkill[0].base"> <br><span class="font-medium text-gray-200">Base Skill:</span> {{displaySkill[0].base}}%
          <span v-show="displaySkill[0].baseTwo">/ {{displaySkill[0].baseTwo}}%</span>
          <span v-show="displaySkill[0].perLvl"> + {{displaySkill[0].perLvl}}% per level<br></span></span>
          <span v-show="displaySkill[0].takeTwiceBonus" class="font-medium text-gray-200">Bonus for Selecting Twice: <span class="font-normal">{{displaySkill[0].takeTwiceBonus}}</span><br></span>
          <span v-show="displaySkill[0].raceBonus" class="font-medium text-gray-200">Race Bonus: <span class="font-normal">+{{displaySkill[0].raceBonus}}%</span><br></span>
          <span v-show="displaySkill[0].occBonus" class="font-medium text-gray-200">O.C.C. Bonus: <span class="font-normal">+{{displaySkill[0].occBonus}}%</span><br></span>
          <span v-show="displaySkill[0].base && newCharacter.skills.bonus.attributeBonus" class="font-medium text-gray-200">I.Q. Bonus: <span class="font-normal">+{{newCharacter.skills.bonus.attributeBonus}}%</span><br></span>
          <span v-show="displaySkill[0].isSecondary === true" class="font-medium text-gray-200">Secondary Skill: <span class="font-normal">This skill may be taken later as a secondary skill without the O.C.C. bonus.</span><br></span>
          <br>
          <span class="font-medium text-gray-200">Description:</span>
          <div class="whitespace-pre-line overflow-y-auto max-h-96">
            {{displaySkill[0].description}}
            <span v-show="displaySkill[0].note !== ''" class="font-medium text-gray-200"><br><br>Note:<br/></span>
            {{displaySkill[0].note}}
            <span v-show="displaySkill[0].bonus !== ''" class="font-medium text-gray-200"><br><br>Bonuses:<br/></span>
            {{displaySkill[0].bonus}}
            <span v-show="displaySkill[0].penalty !== ''" class="font-medium text-gray-200"><br><br>Penalties:<br/></span>
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
  name: "PickOCCSkills",
  props: {
    newCharacter: Object
  },
  data: function(){
    return {
      // used to force a refresh
      componentKey: 0,
      // toggle to see if prerequisites are met
      canAdd: true,
      // toggle to make sure text is there
      hasText: false,
      // display textbox value
      displayTextBox: '',
      // duplicate toggle for textbox skills
      duplicateSkill: false,
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
      // keep track of literacy and language picks because there are so commonly multiple
      languageCount: 0,
      literacyCount: 0,
      wpCount: 0,
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
      //Get the amount of language and literacy pick
      languageRequired: 0,
      literacyRequired:0,
      wpRequired:0,
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
      //Get the amount of language and literacy pick
      languageRemaining: 0,
      literacyRemaining:0,
      wpRemaining:0,
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
      const skillGroup = this[group]
      const listId = group + '-' +[index]
      const groupRemaining = group + 'Remaining'
      // check the skill cost to be sure there are enough picks remaining
      if(skillGroup[index].skillCost > this.remaining)
      {
        skillGroup[index].skillCost <= this[groupRemaining] ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }
      // clears the takeTwice checkbox
      if (document.getElementById("takeTwice") && this.selectedSkill !== skillGroup[index]) {
        document.getElementById("takeTwice").checked = false
      }
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
        // check if required count is equal to the number of prerequisites, if so the user can add the skill
        required === this.selectedSkill.preq.length || (requiredOr !== 0 && requiredOr === this.selectedSkill.preqOr.length) ?
            this.canAdd = true : this.canAdd = false

      } else {
        // if the array is empty there are no prerequisites
        this.canAdd = true
      }
      // set pickedSkill to null since the user is now in the skill group list
      this.pickedSkill = null;
      this.displayTextBox = '';
      this.hasText = false;
      this.duplicateSkill = false;
    },
    // handles what skill from the selected skill list is currently selected
    picked: function (index){
      this.pickedSkill = this.selectedSkills[index];
      // clear the display
      this.displaySkill = [];
      // make the picked skill visible in the display
      this.displaySkill.push(this.selectedSkills[index]);
      // get the index
      this.pickedProperty = index;
      // set the index up to be passed as an id to the color changer
      let listId = 'pick-'+[index]
      // handle color change on selection
      this.selectedBg(listId)
      // set selectedSkill to null since the user is now in the selected skills list
      this.selectedSkill = null;
      this.displayTextBox = '';
      this.hasText = false;
    },
    // adds a skill from the skill group to the selected list
    addSelected: function (){
      const prop = this.selectedProperty;
      const skill = this.selectedSkill
      // get group property from group name
      const group = skill.group.charAt(0).toLowerCase() + skill.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count'
      // reset take twice toggle before checking
      skill.takenTwice = false;
      // check to see if take twice box is checked, if so double the cost before adding
      if (document.getElementById("takeTwice") && document.getElementById("takeTwice").checked === true) {
        skill.skillCost = skill.skillCost * 2
        skill.takenTwice = true;
      }
      // make sure something is selected
      if (skill){
        // check to see if you need to remove the skill from the group list
        if (this[group][prop].removePostPick) {
          // create the same object property in selectedSkills and copy the selected object to it
          this.selectedSkills[prop] = skill;
          // create the same object property in newCharacter's known skills and copy the selected object to it
          this.newCharacter.skills.known[prop] = skill;
          // go ahead and delete it
          delete this[group][prop]
        } else {
          let skillClone = {...skill}
          // create the same object property in selectedSkills and copy the selected object to it
          this.selectedSkills[prop + this.displayTextBox] = skillClone;
          // create the same object property in newCharacter's known skills and copy the selected object to it
          this.newCharacter.skills.known[prop + this.displayTextBox] = skillClone;
          skillClone.name  = skillClone.name + this.displayTextBox;
        }
        // update literacy and language counts
        if(skill.name.includes('iteracy')){
          this.literacyCount++
        }
        if(skill.name.includes('anguage')){
          this.languageCount++
        }
        // see if there is a shared wp count
        if (this.wpRequired > 0 && group.includes('eaponProfic'))
        {
          // increase group counts
          this.weaponProficienciesAncientCount = this.weaponProficienciesAncientCount + skill.skillCost;
          this.weaponProficienciesModernCount = this.weaponProficienciesModernCount + skill.skillCost;
          // increase wp count
          this.wpCount = this.wpCount + skill.skillCost;
          // increase skill count
          this.skillPicked = this.skillPicked + (skill.skillCost * 2);
        } else {
          // increase group counts
          this[groupCount] = this[groupCount] + skill.skillCost;
          // increase skill count
          this.skillPicked = this.skillPicked + skill.skillCost;
        }
        // restore the original skill cost
        if (this[group][prop]) {
          if (document.getElementById("takeTwice") && document.getElementById("takeTwice").checked === true) {
            this[group][prop].skillCost = this[group][prop].skillCost / 2
          }
        }
        // clear selected values
        this.selectedSkill = null;
        this.selectedProperty = null;
        // fix background color
        document.getElementById(this.selectedId).removeAttribute('style')
        this.selectedId = null;
        // reinitialize logic
        this.init();
      }
      this.selectedId = null
    },
    // removes a skill from the selected list and places it back in the skill group list
    removePicked: function (){
      const prop = this.pickedProperty;
      const skill = this.pickedSkill;
      // get group property from group name
      const group = skill.group.charAt(0).toLowerCase() + skill.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count'
      // make sure something is selected
      if (skill){
        // check to see if you need to return the skill to it's list
        if (skill.removePostPick) {
          this[group][prop] = skill
        }
        // update literacy and language counts
        if(skill.name.includes('iteracy')){
          this.literacyCount--
        }
        if(skill.name.includes('anguage')){
          this.languageCount--
        }
        // see if there is a shared wp count
        if (this.wpRequired > 0 && group.includes('eaponProfic'))
        {
          // increase group counts
          this.weaponProficienciesAncientCount = this.weaponProficienciesAncientCount - skill.skillCost;
          this.weaponProficienciesModernCount = this.weaponProficienciesModernCount - skill.skillCost;
          // increase wp count
          this.wpCount = this.wpCount - skill.skillCost;
          // increase skill count
          this.skillPicked = this.skillPicked - (skill.skillCost * 2);
        } else {
          // increase group counts
          this[groupCount] = this[groupCount] - skill.skillCost;
          // increase skill count
          this.skillPicked = this.skillPicked - skill.skillCost;
        }
        // check if the skill was taken twice, if so cut the points in half before returning
        if (skill.takenTwice === true) {
          skill.skillCost = skill.skillCost / 2
          skill.takenTwice = false;
        }
        // remove the skill from the lists
        delete this.selectedSkills[prop]
        delete this.newCharacter.skills.known[prop]

        // check for prerequisites
        this.pickedSkill.preq.forEach(preq => {
          // make prerequisites removable
          for (const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preq)) {
              this.selectedSkills[key].canRemove = true
            }
          }
        })

        // check for ALT prerequisites
        this.pickedSkill.preqOr.forEach(preqOr => {
          // make prerequisites removable
          for (const [key] of Object.entries(this.selectedSkills)) {
            if (key.includes(preqOr)) {
              this.selectedSkills[key].canRemove = true
            }
          }
        })
        // clear the picked values
        this.pickedSkill = null;
        this.pickedProperty = null
        this.selectedId = null;
        // reinitialize logic
        this.init();
      }

    },
    // see if picks are available to upgrade skill from selected list
    takeAvailable: function () {
      const skill = this.pickedSkill;
      // get group property from group name
      const group = skill.group.charAt(0).toLowerCase() + skill.group.slice(1).replace(/\s+/g, '');
      const groupRemaining = group + 'Remaining'

      if(skill.skillCost > this.remaining) {
        skill.skillCost <= this[groupRemaining] ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }
    },
    // upgrade a previously picked skill
    takeAgain: function (){
      const skill = this.pickedSkill;
      const prop = this.pickedProperty;
      // get group property from group name
      const group = skill.group.charAt(0).toLowerCase() + skill.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count'
      const groupRemaining = group + 'Remaining'

      if(skill.skillCost > this.remaining)
      {
        skill.skillCost <= this[groupRemaining] ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }

      // increase group counts
      this[groupCount] = this[groupCount] + skill.skillCost;
      // increase skill count
      this.skillPicked = this.skillPicked + skill.skillCost;
      // update the skill with the new cost
      skill.skillCost = skill.skillCost * 2
      // toggle the skill as taken twice
      skill.takenTwice = true;
      // create the same object property in selectedSkills and copy the selected object to it
      this.selectedSkills[prop] = skill
      // create the same object property in newCharacter's known skills and copy the selected object to it
      this.newCharacter.skills.known[prop] = skill
      // reinitialize logic
      this.init();
    },
    // downgrade an upgraded skill
    takeBack: function (){
      const skill = this.pickedSkill;
      // get group property from group name
      const group = skill.group.charAt(0).toLowerCase() + skill.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count'

      // update the skill with the new cost
      skill.skillCost = skill.skillCost / 2
      // decrease group counts
      this[groupCount] = this[groupCount] - skill.skillCost;
      // decrease skill count
      this.skillPicked = this.skillPicked - skill.skillCost;
      // toggle the skill as not taken twice
      skill.takenTwice = false;
      // reinitialize logic
      this.init();
    },
    // checks if skill is still available after the take twice box is checked
    takeChecked: function (){
      const group = this.selectedSkill.group.charAt(0).toLowerCase() + this.selectedSkill.group.slice(1).replace(/\s+/g, '');
      const groupRemaining = group + 'Remaining'

      if (document.getElementById("takeTwice") && document.getElementById("takeTwice").checked === true) {
        console.log(this[groupRemaining])
        if (this.selectedSkill.skillCost * 2 > this.remaining) {
          this.selectedSkill.skillCost * 2 <= this[groupRemaining] ? this.enoughPicks = true : this.enoughPicks = false
          } else {
            this.enoughPicks = true
          }
      }
      if (document.getElementById("takeTwice") && document.getElementById("takeTwice").checked === false) {
        if (this.selectedSkill.skillCost > this.remaining) {
          this.selectedSkill.skillCost <= this[groupRemaining] ? this.enoughPicks = true : this.enoughPicks = false
        } else {
          this.enoughPicks = true
        }
      }
    },
    // checks the textbox as the user types
    textCheck: function (){
      // Check if there is enough text in the display text box
      this.selectedSkill.textEntry !== '' && this.displayTextBox.length < 3 ? this.hasText = false : this.hasText = true;
      // try and make sure it isn't a duplicate
      let duplicated = 0
      for (const [name] of Object.entries(this.selectedSkills)) {
        if (name.toLowerCase() === (this.selectedSkill.constructor.name.toLowerCase() + this.displayTextBox.toLowerCase()) && this.displayTextBox.length > 2 ) {
          duplicated++
        }
      }
      duplicated > 0 ? this.duplicateSkill = true : this.duplicateSkill = false
    },
    // called to update skill counts, group counts, prerequisites and other data
    init: function() {
      // get required occ picks
      this.communicationRequired = this.newCharacter.occ.occSkills.communication.choice[0].amount;
      this.cowboyRequired = this.newCharacter.occ.occSkills.cowboy.choice[0].amount;
      this.domesticRequired = this.newCharacter.occ.occSkills.domestic.choice[0].amount;
      this.electricalRequired = this.newCharacter.occ.occSkills.electrical.choice[0].amount;
      this.espionageRequired = this.newCharacter.occ.occSkills.espionage.choice[0].amount;
      this.horsemanshipRequired = this.newCharacter.occ.occSkills.horsemanship.choice[0].amount;
      this.mechanicalRequired = this.newCharacter.occ.occSkills.mechanical.choice[0].amount;
      this.medicalRequired = this.newCharacter.occ.occSkills.medical.choice[0].amount;
      this.militaryRequired = this.newCharacter.occ.occSkills.military.choice[0].amount;
      this.physicalRequired = this.newCharacter.occ.occSkills.physical.choice[0].amount;
      this.pilotRequired = this.newCharacter.occ.occSkills.pilot.choice[0].amount;
      this.pilotRelatedRequired = this.newCharacter.occ.occSkills.pilotRelated.choice[0].amount;
      this.rogueRequired = this.newCharacter.occ.occSkills.rogue.choice[0].amount;
      this.scienceRequired = this.newCharacter.occ.occSkills.science.choice[0].amount;
      this.technicalRequired = this.newCharacter.occ.occSkills.technical.choice[0].amount;
      this.weaponProficienciesAncientRequired = this.newCharacter.occ.occSkills.weaponProficienciesAncient.choice[0].amount;
      this.weaponProficienciesModernRequired = this.newCharacter.occ.occSkills.weaponProficienciesModern.choice[0].amount;
      this.wildernessRequired = this.newCharacter.occ.occSkills.wilderness.choice[0].amount;
      // get literacy and language counts as well
      this.languageRequired = this.newCharacter.occ.languages;
      this.literacyRequired = this.newCharacter.occ.literacies;
      this.wpRequired = this.newCharacter.occ.totalWP;

      // OCC or RCC related skills to be picked by user
      const skillStart =
            this.communicationRequired
          + this.cowboyRequired
          + this.domesticRequired
          + this.electricalRequired
          + this.espionageRequired
          + this.horsemanshipRequired
          + this.mechanicalRequired
          + this.medicalRequired
          + this.militaryRequired
          + this.physicalRequired
          + this.pilotRequired
          + this.pilotRelatedRequired
          + this.rogueRequired
          + this.scienceRequired
          + this.technicalRequired
          + this.weaponProficienciesAncientRequired
          + this.weaponProficienciesModernRequired
          + this.wildernessRequired;

      // determine how many picks are left
      let availablePicks = skillStart - this.skillPicked;

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
      // get current pick totals
      this.languageRemaining = Math.max(0, this.languageRequired - this.languageCount)
      this.literacyRemaining = Math.max(0, this.literacyRequired - this.literacyCount)
      this.wpRemaining = Math.max(0, this.wpRequired - this.wpCount)
      // handle language and literacy remaining at 0
      if (this.languageRemaining < 1 ) {
        document.getElementById('communication-languageOther').style.visibility = "hidden";
        if (document.getElementById('communication-languageNativeTongue')){
          document.getElementById('communication-languageNativeTongue').style.visibility = "hidden"
        }
      } else {
        document.getElementById('communication-languageOther').style.visibility = "visible";
        if (document.getElementById('communication-languageNativeTongue')){
          document.getElementById('communication-languageNativeTongue').style.visibility = "visible"
        }
      }
      if (this.literacyRemaining < 1) {
        document.getElementById('communication-literacyOther').style.visibility = "hidden";
        if (document.getElementById('communication-literacyNativeTongue')){
          document.getElementById('communication-literacyNativeTongue').style.visibility = "hidden"
        }
      } else {
        document.getElementById('communication-literacyOther').style.visibility = "visible";
        if (document.getElementById('communication-literacyNativeTongue')){
          document.getElementById('communication-literacyNativeTongue').style.visibility = "visible"
        }
      }
      console.log(this.wpRemaining)
      // check to see if skills are removable
      if(Object.keys(this.selectedSkills).length > 0){
        for (const [skillKey] of Object.entries(this.selectedSkills)) {
          // check for prerequisites
          this.selectedSkills[skillKey].preq.forEach(preq => {
            let preqFound = false;
            // make prerequisites un-removable
            for (const [preqKey] of Object.entries(this.selectedSkills)) {
              // check for skill property and exclude the picked skill
              if (preqKey.includes(preq) && skillKey !== preqKey && !preqFound) {
                this.selectedSkills[preqKey].canRemove = false
                preqFound = true;
              }
            }
          })
          this.selectedSkills[skillKey].preqOr.forEach(preqOr => {
            let preqFound = false;
            // make prerequisites un-removable
            for (const [preqKey] of Object.entries(this.selectedSkills)) {
              // check for skill property and exclude the picked skill
              if (preqKey.includes(preqOr) && skillKey !== preqKey && !preqFound) {
                this.selectedSkills[preqKey].canRemove = false
                preqFound = true;
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
      //
      // determine what tabs are available
      // communication tab
      if (Object.keys(this.communication).length > 0 && this.remaining === 0) {
        this.communicationRemaining === 0 ?
            this.communicationActive = false : this.communicationActive = true
      } else
        Object.keys(this.communication).length > 0 && this.remaining !== 0 ?
            this.communicationActive = true : this.communicationActive = false
      // cowboy tab
      if (Object.keys(this.cowboy).length > 0 && this.remaining === 0) {
        this.cowboyRemaining === 0 ?
            this.cowboyActive = false : this.cowboyActive = true
      } else
        Object.keys(this.cowboy).length > 0 && this.remaining !== 0 ?
            this.cowboyActive = true : this.cowboyActive = false
      // domestic tab
      if (Object.keys(this.domestic).length > 0 && this.remaining === 0) {
        this.domesticRemaining === 0 ?
            this.domesticActive = false : this.domesticActive = true
      } else
        Object.keys(this.domestic).length > 0 && this.remaining !== 0 ?
            this.domesticActive = true : this.domesticActive = false
      // electrical tab
      if (Object.keys(this.electrical).length > 0 && this.remaining === 0) {
        this.electricalRemaining === 0 ?
            this.electricalActive = false : this.electricalActive = true
      } else
        Object.keys(this.electrical).length > 0 && this.remaining !== 0 ?
            this.electricalActive = true : this.electricalActive = false
      // espionage tab
      if (Object.keys(this.espionage).length > 0 && this.remaining === 0) {
        this.espionageRemaining === 0 ?
            this.espionageActive = false : this.espionageActive = true
      } else
        Object.keys(this.espionage).length > 0 && this.remaining !== 0 ?
            this.espionageActive = true : this.espionageActive = false
      // horsemanship tab
      if (Object.keys(this.horsemanship).length > 0 && this.remaining === 0) {
        this.horsemanshipRemaining === 0 ?
            this.horsemanshipActive = false : this.horsemanshipActive = true
      } else
        Object.keys(this.horsemanship).length > 0 && this.remaining !== 0 ?
            this.horsemanshipActive = true : this.horsemanshipActive = false
      // mechanical tab
      if (Object.keys(this.mechanical).length > 0 && this.remaining === 0) {
        this.mechanicalRemaining === 0 ?
            this.mechanicalActive = false : this.mechanicalActive = true
      } else
        Object.keys(this.mechanical).length > 0 && this.remaining !== 0 ?
            this.mechanicalActive = true : this.mechanicalActive = false
      // medical tab
      if (Object.keys(this.medical).length > 0 && this.remaining === 0) {
        this.medicalRemaining === 0 ?
            this.medicalActive = false : this.medicalActive = true
      } else
        Object.keys(this.medical).length > 0 && this.remaining !== 0 ?
            this.medicalActive = true : this.medicalActive = false
      // military tab
      if (Object.keys(this.military).length > 0 && this.remaining === 0) {
        this.militaryRemaining === 0 ?
            this.militaryActive = false : this.militaryActive = true
      } else
        Object.keys(this.military).length > 0 && this.remaining !== 0 ?
            this.militaryActive = true : this.militaryActive = false
      // physical tab
      if (Object.keys(this.physical).length > 0 && this.remaining === 0) {
        this.physicalRemaining === 0 ?
            this.physicalActive = false : this.physicalActive = true
      } else
        Object.keys(this.physical).length > 0 && this.remaining !== 0 ?
            this.physicalActive = true : this.physicalActive = false
      // pilot tab
      if (Object.keys(this.pilot).length > 0 && this.remaining === 0) {
        this.pilotRemaining === 0 ?
            this.pilotActive = false : this.pilotActive = true
      } else
        Object.keys(this.pilot).length > 0 && this.remaining !== 0 ?
            this.pilotActive = true : this.pilotActive = false
      // pilotRelated tab
      if (Object.keys(this.pilotRelated).length > 0 && this.remaining === 0) {
        this.pilotRelatedRemaining === 0 ?
            this.pilotRelatedActive = false : this.pilotRelatedActive = true
      } else
        Object.keys(this.pilotRelated).length > 0 && this.remaining !== 0 ?
            this.pilotRelatedActive = true : this.pilotRelatedActive = false
      // rogue tab
      if (Object.keys(this.rogue).length > 0 && this.remaining === 0) {
        this.rogueRemaining === 0 ?
            this.rogueActive = false : this.rogueActive = true
      } else
        Object.keys(this.rogue).length > 0 && this.remaining !== 0 ?
            this.rogueActive = true : this.rogueActive = false
      // science tab
      if (Object.keys(this.science).length > 0 && this.remaining === 0) {
        this.scienceRemaining === 0 ?
            this.scienceActive = false : this.scienceActive = true
      } else
        Object.keys(this.science).length > 0 && this.remaining !== 0 ?
            this.scienceActive = true : this.scienceActive = false
      // technical tab
      if (Object.keys(this.technical).length > 0 && this.remaining === 0) {
        this.technicalRemaining === 0 ?
            this.technicalActive = false : this.technicalActive = true
      } else
        Object.keys(this.technical).length > 0 && this.remaining !== 0 ?
            this.technicalActive = true : this.technicalActive = false
      // weaponProficienciesAncient tab
      if (Object.keys(this.weaponProficienciesAncient).length > 0 && this.remaining === 0) {
        this.weaponProficienciesAncientRemaining === 0 ?
            this.weaponProficienciesAncientActive = false : this.weaponProficienciesAncientActive = true
      } else
        Object.keys(this.weaponProficienciesAncient).length > 0 && this.remaining !== 0 ?
            this.weaponProficienciesAncientActive = true : this.weaponProficienciesAncientActive = false
      // weaponProficienciesModern tab
      if (Object.keys(this.weaponProficienciesModern).length > 0 && this.remaining === 0) {
        this.weaponProficienciesModernRemaining === 0 ?
            this.weaponProficienciesModernActive = false : this.weaponProficienciesModernActive = true
      } else
        Object.keys(this.weaponProficienciesModern).length > 0 && this.remaining !== 0 ?
            this.weaponProficienciesModernActive = true : this.weaponProficienciesModernActive = false
      // wilderness tab
      if (Object.keys(this.wilderness).length > 0 && this.remaining === 0) {
        this.wildernessRemaining === 0 ?
            this.wildernessActive = false : this.wildernessActive = true
      } else
        Object.keys(this.wilderness).length > 0 && this.remaining !== 0 ?
            this.wildernessActive = true : this.wildernessActive = false

      // rest tab to default if the skill group is no longer active
      let tabValue = document.getElementById('tabs').value
      this[tabValue + 'Active'] === false ? this.toggle = 'default' : this.toggle = tabValue

      // either show the finished button or the tabs
      // if the user is out of picks set tabs active to false and let them finalize selections
      this.tabsActive = availablePicks !== 0
      // if there is nothing left to pick, let the user finalize selections
      this.tabsActive = !(
          !this.communicationActive &&
          !this.cowboyActive &&
          !this.domesticActive &&
          !this.electricalActive &&
          !this.espionageActive &&
          !this.horsemanshipActive &&
          !this.mechanicalActive &&
          !this.medicalActive &&
          !this.militaryActive &&
          !this.physicalActive &&
          !this.pilotActive &&
          !this.pilotRelatedActive &&
          !this.rogueActive &&
          !this.scienceActive &&
          !this.technicalActive &&
          !this.weaponProficienciesAncientActive &&
          !this.weaponProficienciesModernActive &&
          !this.wildernessActive
          )
      // handle wpRemaining
      if (this.wpRequired > 0 && this.wpRemaining < 1) {
        this.weaponProficienciesAncientActive = false;
        this.weaponProficienciesModernActive = false;
      }
      if (this.wpRequired > 0 && this.wpRemaining > 0) {
        this.weaponProficienciesAncientActive = true;
        this.weaponProficienciesModernActive = true;
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
      // set a toggle to true so that the player can move on in the character creation process
      this.newCharacter.skills.choices = false
    },
    // prepares skill lists
    skillLoader: function (groupList, occList) {
      // handle free OCC skills
      if (occList.free) {
        occList.free.forEach(skill => {
          for (const [key] of Object.entries(groupList)) {
            // if the skill isn't already known, create it and add the OCC bonus and base
            if (key === skill.name && !this.newCharacter.skills.known[key]) {
              this.newCharacter.skills.known[key] = groupList[key];
              this.newCharacter.skills.known[key].occBonus = skill.occBonus;
              this.newCharacter.skills.known[key].preq = [];
              this.newCharacter.skills.known[key].preqOr = [];
              if (skill.skillCost){
                this.newCharacter.skills.known[key].skillCost = skill.skillCost;
              }
              if (skill.base) {
                this.newCharacter.skills.known[key].base = skill.base
              }
              // if the skill is already known, just add the OCC bonus and base
            } else if (key === skill.name && this.newCharacter.skills.known[key]) {
              this.newCharacter.skills.known[key].occBonus = skill.occBonus
              this.newCharacter.skills.known[key].preq = [];
              this.newCharacter.skills.known[key].preqOr = [];
              this.newCharacter.skills.known[key].skillCost = skill.skillCost;
              if (skill.skillCost){
                this.newCharacter.skills.known[key].skillCost = skill.skillCost;
              }
              if (skill.base) {
                this.newCharacter.skills.known[key].base = skill.base
              }
            }
          }
        })
      }
      // handle skill choices if there is a choice array
      if (occList.choice) {
        occList.choice.forEach(choice => {
            // handle available skills
            if (choice.available) {
              choice.available.forEach(skill => {
                for (const [key] of Object.entries(groupList)) {
                  if (skill.name === 'Any') {
                      groupList[key].occBonus = skill.occBonus;
                    if (skill.skillCost) {
                      groupList[key].skillCost = skill.skillCost;
                    }
                  }
                  if (key === skill.name) {
                      groupList[key].occBonus = skill.occBonus;
                    if (skill.skillCost) {
                      groupList[key].skillCost = skill.skillCost;
                    }
                  }
                }
              })
            }
            // handle unavailable skills
            if (choice.unavailable) {
              choice.unavailable.forEach(skill => {
                for (const [key] of Object.entries(groupList)) {
                  if (skill.name === 'All') {
                    delete groupList[key]
                  }
                  if (key === skill.name) {
                    delete groupList[key]
                  }
                }
              })
            }
            // handle or skills
            if (choice.or) {
              for (const [key] of Object.entries(groupList)) {
                if (key === choice.or[0].name || key === choice.or[1].name) {
                    groupList[key].occBonus = choice.or[0].occBonus;
                  if (choice.or[0].skillCost) {
                    groupList[key].skillCost = choice.or[0].skillCost;
                  }
                } else {
                  delete groupList[key]
                }
              }
            }
        })
      }
      // remove already known skills
      for (const [skill] of Object.entries(this.newCharacter.skills.known)) {
        this.newCharacter.skills.known[skill].known = true;
        for (const [key] of Object.entries(groupList)) {
          if (groupList[key].name === this.newCharacter.skills.known[skill].name && groupList[key].removePostPick) {
            delete groupList[key]
          }
        }
      }
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