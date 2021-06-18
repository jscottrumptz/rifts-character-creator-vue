<template>
  <div class="px-5">
    <p class="text-white text-xl font-medium p-5" >Pick Spells</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white pl-5 pt-5 font-medium">Pick a total of {{this.newCharacter.spells.total}} spells</h2>
        <h2 v-if="invocationRemaining > 0" class="text-white pl-5 pt-5">Invocation Picks Needed: {{invocationRemaining}}</h2>
        <p v-if="this.newCharacter.spells.levelRequirements" class="text-white pl-5 pt-5 font-medium" >Fulfill the following requirements...</p>
        <div class="pl-10 pb-5">
          <h2 v-if="oneRemaining > 0" class="text-white">Level One Picks Needed: {{oneRemaining}}</h2>
          <h2 v-if="twoRemaining > 0" class="text-white">Level Two Picks Needed: {{twoRemaining}}</h2>
          <h2 v-if="threeRemaining > 0" class="text-white">Level Three Picks Needed: {{threeRemaining}}</h2>
          <h2 v-if="fourRemaining > 0" class="text-white">Level Four Picks Needed: {{fourRemaining}}</h2>
          <h2 v-if="fiveRemaining > 0" class="text-white">Level Five Picks Needed: {{fiveRemaining}}</h2>
          <h2 v-if="sixRemaining > 0" class="text-white">Level Six Picks Needed: {{sixRemaining}}</h2>
          <h2 v-if="sevenRemaining > 0" class="text-white">Level Seven Picks Needed: {{sevenRemaining}}</h2>
          <h2 v-if="eightRemaining > 0" class="text-white">Level Eight Picks Needed: {{eightRemaining}}</h2>
          <h2 v-if="nineRemaining > 0" class="text-white">Level Nine Picks Needed: {{nineRemaining}}</h2>
          <h2 v-if="tenRemaining > 0" class="text-white">Level Ten Picks Needed: {{tenRemaining}}</h2>
          <h2 v-if="elevenRemaining > 0" class="text-white">Level Eleven Picks Needed: {{elevenRemaining}}</h2>
          <h2 v-if="twelveRemaining > 0" class="text-white">Level Twelve Picks Needed: {{twelveRemaining}}</h2>
          <h2 v-if="thirteenRemaining > 0" class="text-white">Level Thirteen Picks Needed: {{thirteenRemaining}}</h2>
          <h2 v-if="fourteenRemaining > 0" class="text-white">Level Fourteen Picks Needed: {{fourteenRemaining}}</h2>
          <h2 v-if="fifteenRemaining > 0" class="text-white">Level Fifteen Picks Needed: {{fifteenRemaining}}</h2>
          <h2 v-if="legendRemaining > 0" class="text-white">Spells of Legend Picks Needed: {{legendRemaining}}</h2>
          <h2 v-if="aRemaining > 0" class="text-white">Group A Picks Needed: {{aRemaining}}</h2>
          <h2 v-if="bRemaining > 0" class="text-white">Group B Picks Needed: {{bRemaining}}</h2>
        </div>
        <div class="p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(spells,index) in selectedSpells" v-bind:key="index" v-on:click="picked(index)" :id="'pick-'+ index" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ spells.name }} <span class="text-gray-500">[{{ spells.group }} Level {{spells.level}}]</span></li>
          </ul>
        </div>
        <!-- Determine what button is active depending on prerequisites and previously known skills-->
        <button v-if="this.pickedSpell && this.pickedSpell.canRemove && !this.pickedSpell.known" v-on:click="removePicked" class="bg-gray-700 font-medium rounded hover:bg-red-500 hover:text-gray-900 m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Remove Selected</button>
        <button v-if="this.pickedSpell && !this.pickedSpell.canRemove && !this.pickedSpell.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Required by Another Spell</button>
        <button v-if="!this.pickedSpell" class="bg-gray-700 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-white">Select a Spell</button>
        <button v-if="this.pickedSpell && this.pickedSpell.known" class="bg-yellow-500 font-medium rounded m-3 ml-7 mb-5 px-3 py-2 text-xs text-gray-900">Cannot Remove</button>
      </div>

      <!-- Finalize Selections -->
      <div v-if="!tabsSpellsActive" class="flex flex-wrap content-center">
        <button v-on:click="finalizeSelections" class="mx-auto bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Finalize Selections</button>
      </div>

      <!-- Spell Lists -->
      <div v-show="tabsSpellsActive" class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <!-- Nav & Tabs -->
        <div class=" m-3">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option value="default" selected disabled> Select a Spells Group... </option>
            <option v-if="invocationActive" value="invocation">Invocation Spells</option>
          </select>
        </div>

        <!-- Toggle Level List -->
        <div v-if="this[toggle + 'Active']" class="m-3">
          <label for="tabsLevel" class="sr-only">Select a tab</label>
          <select id="tabsLevel" v-model="toggleLevel" name="tabsLevel" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option value="default" selected disabled> Select a Level... </option>
            <option v-if="this[toggle][toggle + 'One'] && oneActive" value="One">Level One</option>
            <option v-if="this[toggle][toggle + 'Two'] && twoActive" value="Two">Level Two</option>
            <option v-if="this[toggle][toggle + 'Three'] && threeActive" value="Three">Level Three</option>
            <option v-if="this[toggle][toggle + 'Four'] && fourActive" value="Four">Level Four</option>
            <option v-if="this[toggle][toggle + 'Five'] && fiveActive" value="Five">Level Five</option>
            <option v-if="this[toggle][toggle + 'Six'] && sixActive" value="Six">Level Six</option>
            <option v-if="this[toggle][toggle + 'Seven'] && sevenActive" value="Seven">Level Seven</option>
            <option v-if="this[toggle][toggle + 'Eight'] && eightActive" value="Eight">Level Eight</option>
            <option v-if="this[toggle][toggle + 'Nine'] && nineActive" value="Nine">Level Nine</option>
            <option v-if="this[toggle][toggle + 'Ten'] && tenActive" value="Ten">Level Ten</option>
            <option v-if="this[toggle][toggle + 'Eleven'] && elevenActive" value="Eleven">Level Eleven</option>
            <option v-if="this[toggle][toggle + 'Twelve'] && twelveActive" value="Twelve">Level Twelve</option>
            <option v-if="this[toggle][toggle + 'Thirteen'] && thirteenActive" value="Thirteen">Level Thirteen</option>
            <option v-if="this[toggle][toggle + 'Fourteen'] && fourteenActive" value="Fourteen">Level Fourteen</option>
            <option v-if="this[toggle][toggle + 'Fifteen'] && fifteenActive" value="Fifteen">Level Fifteen</option>
            <option v-if="this[toggle][toggle + 'Legend'] && legendActive" value="Legend">Spells of Legend</option>
            <option v-if="this[toggle][toggle + 'A'] && aActive" value="A">Group A</option>
            <option v-if="this[toggle][toggle + 'B'] && bActive" value="B">Group B</option>
          </select>
        </div>

        <!-- Toggle Level Spell List -->
        <div class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul v-if="this[toggleLevel.toLowerCase() + 'Active']" class="text-gray-300 divide-y divide-gray-600 ">
            <li v-for="(spells,index) in this[toggle][toggle + toggleLevel]" v-bind:key="index"  :id="toggle + toggleLevel + '-'+ index" v-on:click="selected('invocation',index)" class="cursor-pointer hover:bg-indigo-300 hover:text-gray-900 px-6 py-2">{{ spells.name }}</li>
          </ul>
        </div>

        <button v-if="this.selectedSpell && enoughPicks && canAdd " v-on:click="addSelected" class="bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 m-7 text-xs px-3 py-2 text-white">Add Selected</button>
        <button v-if="this.selectedSpell && !canAdd && enoughPicks" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Prerequisites Not Met</button>
        <button v-if="this.selectedSpell && !enoughPicks && canAdd" class="bg-yellow-500 font-medium rounded m-7 text-xs px-3 py-2 text-gray-900">Not Enough Picks Remaining</button>
        <button v-if="!this.selectedSpell" class="bg-gray-700 font-medium rounded m-7 text-xs px-3 py-2 text-white">Select a Spell</button>
      </div>

      <!-- Info Section -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
        <div v-if="selectedId != null" class="text-gray-300 m-10">
          <h2 class="font-medium text-2xl">{{displaySpell[0].name}}</h2>
          <span v-show="displaySpell[0].required !== ''" class="font-medium text-gray-200">(Prerequisites: {{displaySpell[0].required}})<br></span>
          <span v-show="displaySpell[0].selectionCost > 1 " class="font-medium text-gray-200">(Counts as {{displaySpell[0].selectionCost}} skill selections)<br></span>
          <br>
          <span class="font-medium text-gray-200">Cost:</span> {{displaySpell[0].cost}}<br>
          <span class="font-medium text-gray-200">Range:</span> {{displaySpell[0].range}}<br>
          <span class="font-medium text-gray-200">Duration:</span> {{displaySpell[0].duration}}<br>
          <span v-show="displaySpell[0].savingThrow !== ''" class="font-medium text-gray-200">Saving Throw: <span class="font-normal">{{displaySpell[0].savingThrow}}</span><br></span>
          <span v-show="displaySpell[0].damage !== ''" class="font-medium text-gray-200">Damage: <span class="font-normal">{{displaySpell[0].damage}}</span><br></span>
          <span v-show="displaySpell[0].lengthOfTrance !== ''" class="font-medium text-gray-200">Length of Trance: <span class="font-normal">{{displaySpell[0].lengthOfTrance}}</span><br></span>
          <span v-show="displaySpell[0].baseSkill !== ''" class="font-medium text-gray-200">Base Skill: <span class="font-normal">{{displaySpell[0].baseSkill}}</span><br></span>
          <span v-show="displaySpell[0].limitations !== ''" class="font-medium text-gray-200">Limitations: <span class="font-normal">{{displaySpell[0].limitations}}</span><br></span>
          <span v-show="displaySpell[0].attacksPerMelee !== ''" class="font-medium text-gray-200">Attacks per Melee: <span class="font-normal">{{displaySpell[0].attacksPerMelee}}</span><br></span>
          <span v-show="displaySpell[0].recovers !== ''" class="font-medium text-gray-200">Recovers: <span class="font-normal">{{displaySpell[0].recovers}}</span><br></span>
          <span v-show="displaySpell[0].bonuses !== ''" class="font-medium text-gray-200">Bonuses: <span class="font-normal">{{displaySpell[0].bonuses}}</span><br></span>
          <br>
          <span class="font-medium text-gray-200">Description:</span>
          <div class="whitespace-pre-wrap overflow-y-auto max-h-96">
            {{displaySpell[0].description}}
            <span v-show="displaySpell[0].note !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Note:</span>
            {{displaySpell[0].note}}
            <span v-show="displaySpell[0].gmNote !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>GM Note:</span>
            {{displaySpell[0].gmNote}}
            <span v-show="displaySpell[0].specialNote !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Special Note:</span>
            {{displaySpell[0].specialNote}}
            <span v-show="displaySpell[0].penalties !== ''" class="whitespace-pre-wrap font-medium text-gray-200"><br><br>Penalties:</span>
            {{displaySpell[0].penalties}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const Invocation = require('../../../lib/Magic/Invocation');

export default {
  name: "PickMagic",
  props: {
    newCharacter: Object
  },
  data: function(){
    return {
      componentKey: 0,
      // toggle to see if prerequisites are met
      canAdd: true,
      // create spell groups
      invocation: new Invocation,

      selectedSpells: {},
      displaySpell: [{name:'Select a Spell'}],
      toggle: 'invocation',
      toggleLevel: 'One',
      selectedSpell: null,
      selectedProperty: null,
      pickedSpell: null,
      pickedProperty: null,
      // number of remaining spell picks
      remaining: null,
      // number of spells picked so far
      spellsPicked: 0,
      // toggle for picks left vs needed
      enoughPicks: true,
      // toggle to control if a group list is available
      invocationActive: true,
      // toggle to see if level list is active
      oneActive: true,
      twoActive: true,
      threeActive: true,
      fourActive: true,
      fiveActive: true,
      sixActive: true,
      sevenActive: true,
      eightActive: true,
      nineActive: true,
      tenActive: true,
      elevenActive: true,
      twelveActive: true,
      thirteenActive: true,
      fourteenActive: true,
      fifteenActive: true,
      legendActive: true,
      aActive: true,
      bActive: true,
      defaultActive: true,

      // sre the spell tabs active
      tabsSpellsActive: true,
      // number of spells picked from a group
      invocationCount: 0,
      // number of spells picked by level
      oneCount: 0,
      twoCount: 0,
      threeCount: 0,
      fourCount: 0,
      fiveCount: 0,
      sixCount: 0,
      sevenCount: 0,
      eightCount: 0,
      nineCount: 0,
      tenCount: 0,
      elevenCount: 0,
      twelveCount: 0,
      thirteenCount: 0,
      fourteenCount: 0,
      fifteenCount: 0,
      legendCount: 0,
      // a/b counts
      aCount: 0,
      bCount: 0,

      // number of required group spell picks
      invocationRequired: 0,
      // number of required level spell picks
      oneRequired: 0,
      twoRequired: 0,
      threeRequired: 0,
      fourRequired: 0,
      fiveRequired: 0,
      sixRequired: 0,
      sevenRequired: 0,
      eightRequired: 0,
      nineRequired: 0,
      tenRequired: 0,
      elevenRequired: 0,
      twelveRequired: 0,
      thirteenRequired: 0,
      fourteenRequired: 0,
      fifteenRequired: 0,
      legendRequired: 0,
      // number of required a/b spell picks
      aRequired: 0,
      bRequired: 0,

      // number of required group spell picks remaining
      invocationRemaining: 0,
      // number of required level spell picks remaining
      oneRemaining: 0,
      twoRemaining: 0,
      threeRemaining: 0,
      fourRemaining: 0,
      fiveRemaining: 0,
      sixRemaining: 0,
      sevenRemaining: 0,
      eightRemaining: 0,
      nineRemaining: 0,
      tenRemaining: 0,
      elevenRemaining: 0,
      twelveRemaining: 0,
      thirteenRemaining: 0,
      fourteenRemaining: 0,
      fifteenRemaining: 0,
      legendRemaining: 0,
      // number of required a/b spell picks remaining
      aRemaining: 0,
      bRemaining: 0,


      selectedId: null
    }
  },
  methods: {
    selected: function (group,index){
      // set selected group name and index
      const spellGroup = this[group][this.toggle + this.toggleLevel]
      const listId = this.toggle + this.toggleLevel + '-' +[index]
      const groupRemaining = group + 'Remaining'
      const levelRemaining = this.toggleLevel.toLowerCase() + 'Remaining'
      // check the selection cost to be sure there are enough picks remaining
      if(spellGroup[index].selectionCost > this.remaining)
      {
        (spellGroup[index].selectionCost <= (this[groupRemaining] + this.remaining)) ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }

      if(spellGroup[index].selectionCost > this.remaining)
      {
        (spellGroup[index].selectionCost <= (this[levelRemaining] + this.remaining)) ? this.enoughPicks = true : this.enoughPicks = false
      } else {
        this.enoughPicks = true
      }

      this.selectedSpell = spellGroup[index];
      this.selectedProperty = index;
      this.displaySpell = [];
      this.displaySpell.push(spellGroup[index]);
      this.selectedBg(listId)
      // set pickedSpell to null since the user is now in the spell group list
      this.pickedSpell = null;
    },
    picked: function (index){
      // set picked group name and index
      this.pickedSpell = this.selectedSpells[index];
      this.displaySpell = [];
      this.displaySpell.push(this.selectedSpells[index]);
      this.pickedProperty = index;
      let listId = 'pick-'+[index]
      this.selectedBg(listId)
      this.selectedSpell = null;
    },
    addSelected: function (){
      const prop = this.selectedProperty;
      const spell = this.selectedSpell
      // get group property from group name
      const group = spell.group.charAt(0).toLowerCase() + spell.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count';
      const levelCount = this.toggleLevel.toLowerCase() + 'Count';
      // make sure something is selected
      if (spell){
        spell.pickLevel = this.toggleLevel
        // create the same object property in selectedSpells and copy the selected object to it
        this.selectedSpells[prop] = spell
        // create the same object property in newCharacter's known spells and copy the selected object to it
        this.newCharacter.spells.known[prop] = spell
        // remove spell from the group list
        delete this[group][this.toggle + this.toggleLevel][prop]
        // increase the group count
        this[groupCount] = this[groupCount] + spell.selectionCost
        this[levelCount] = this[levelCount] + spell.selectionCost
        this.spellsPicked = this.spellsPicked + spell.selectionCost;
        this.selectedSpell = null;
        this.selectedProperty = null;
        this.selectedId = null;
        console.log('LevelCount: ' + this[levelCount])
        console.log('GroupCount: ' + this[groupCount])

        this.init();
      }
      this.init();
    },
    removePicked: function (){
      const prop = this.pickedProperty;
      const spell = this.pickedSpell;
      // get group property from group name
      const group = spell.group.charAt(0).toLowerCase() + spell.group.slice(1).replace(/\s+/g, '');
      const groupCount = group + 'Count'
      const levelCount = spell.pickLevel.toLowerCase() + 'Count';
      // make sure something is selected
      if (spell){
        // put it back in the group
        this[group][group + spell.pickLevel ][prop] = spell;

        //update counts
        this[groupCount] = this[groupCount] - spell.selectionCost;
        this[levelCount] = this[levelCount] - spell.selectionCost;
        this.spellsPicked = this.spellsPicked - spell.selectionCost;
        // remove from the list
        delete this.selectedSpells[prop]
        // remove from the character
        delete this.newCharacter.spells.known[prop]
        // clear selections
        this.pickedSpell = null;
        this.pickedProperty = null
        this.selectedId = null;
      }
      console.log('LevelCount: ' + this[levelCount])
      console.log('GroupCount: ' + this[groupCount])

      // update everything
      this.init();
    },
    init: function() {
      // see how many total picks are required
      let spellStart = this.newCharacter.spells.total

      // determine how many total picks are left
      let availablePicks = spellStart - this.spellsPicked;

      // determine group picks remaining
      this.invocationRemaining = Math.max(0, this.invocationRequired - this.invocationCount);

      // determine level picks remaining
      for (const [key] of Object.entries(this.invocation)) {
        let level = key.replace('invocation','').toLowerCase()
        this[level + 'Remaining'] = Math.max(0, this[level + 'Required'] - this[level + 'Count']);
      }

      // either show the finished button or the tabs
      this.tabsSpellsActive = availablePicks !== 0;

      // update remaining spells SpellsCounter
      this.remaining = availablePicks + this.invocationRemaining
          - this.invocationRemaining
          - this.oneRemaining
          - this.twoRemaining
          - this.threeRemaining
          - this.fourRemaining
          - this.fiveRemaining
          - this.sixRemaining
          - this.sevenRemaining
          - this.eightRemaining
          - this.nineRemaining
          - this.tenRemaining
          - this.elevenRemaining
          - this.twelveRemaining
          - this.thirteenRemaining
          - this.fourteenRemaining
          - this.fifteenRemaining
          - this.aRemaining
          - this.bRemaining
          -this.legendRemaining

      console.log('Remaining: ' + this.remaining)
      console.log('One Remaining: ' + this.oneRemaining)
      console.log('Invocation Remaining: ' + this.invocationRemaining)

      // hide group if no picks remaining
      !this.newCharacter.spells.invocation.available || (this.invocationRemaining === 0 && this.remaining === 0 && this.oneRemaining === 0 && this.twoRemaining === 0
          && this.threeRemaining === 0 && this.fourRemaining === 0 && this.fiveRemaining === 0 && this.sixRemaining === 0
          && this.sevenRemaining === 0 && this.eightRemaining === 0 && this.nineRemaining === 0 && this.tenRemaining === 0
          && this.elevenRemaining === 0 && this.twelveRemaining === 0 && this.thirteenRemaining === 0 && this.fourteenRemaining === 0
          && this.fifteenRemaining === 0 && this.aRemaining === 0 && this.bRemaining === 0 && this.legendRemaining === 0)?
          this.invocationActive = false : this.invocationActive = true

      // hide group if empty
      if (Object.keys(this.invocation).length === 0) {
        this.invocationActive = false
      }

      // hide level if empty or out of picks
      for (const [key] of Object.entries(this.invocation)) {
        let level = key.replace('invocation','').toLowerCase()
        if (Object.keys(this.invocation[key]).length > 0 && this.remaining === 0) {
          this[level + 'Remaining']  === 0 ?
              this[level + 'Active'] = false : this[level + 'Active'] = true
        } else
          Object.keys(this.invocation[key]).length > 0 && this.remaining !== 0 ?
              this[level + 'Active'] = true : this[level + 'Active'] = false
      }

      // hide group if empty
      if (Object.keys(this.invocation).length === 0) {
        this.invocationActive = false
      }
      // set active level if default is inactive
      if (!this[this.toggleLevel.toLowerCase() + 'Active']) {
        this.toggleLevel = 'default';
      }

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
      this.newCharacter.spells.selected = true
    },
    // prepares spell lists
    spellLoader: function (groupList, availableList) {
      // handle free spells
      if (availableList.free) {
        availableList.free.forEach(spell => {
          for (const [key] of Object.entries(groupList)) {
            // if the spell isn't already known, create it and add the OCC bonus and base
            if (key === spell.name && !this.newCharacter.spells.known[key]) {
              this.newCharacter.spells.known[key] = groupList[key];
              if (spell.selectionCost >= 0) {
                this.newCharacter.spells.known[key].selectionCost = spell.selectionCost;
              }
              if (spell.specialNote !== '') {
                this.newCharacter.spells.known[key].specialNote = spell.specialNote;
              }
              // if the spell is already known, just add the OCC bonus and base
            } else if (key === spell.name && this.newCharacter.spells.known[key]) {
              this.newCharacter.spells.known[key].preq = [];
              this.newCharacter.spells.known[key].preqOr = [];
              if (spell.selectionCost >= 0) {
                this.newCharacter.spells.known[key].selectionCost = spell.selectionCost;
              }
              if (spell.specialNote !== '') {
                this.newCharacter.spells.known[key].specialNote = spell.specialNote;
              }
            }
          }
        })
      }

      // handle available spells
      if (availableList.available) {
        availableList.available.forEach(spell => {
          for (const [key] of Object.entries(groupList)) {
            if (spell.name === 'Any') {
              if (spell.selectionCost >= 0) {
                groupList[key].selectionCost = spell.selectionCost;
              }
              if (spell.specialNote !== '') {
                groupList[key].specialNote = spell.specialNote;
              }
            }
            if (key === spell.name) {
              if (spell.selectionCost >= 0) {
                groupList[key].selectionCost = spell.selectionCost;
              }
              if (spell.specialNote !== '') {
                groupList[key].specialNote = spell.specialNote;
              }
            }
          }
        })
      }

      // handle unavailable spells
      if (availableList.unavailable) {
        availableList.unavailable.forEach(spell => {
          for (const [key] of Object.entries(groupList)) {
            if (spell.name === 'All') {
              delete groupList[key]
            }
            if (key === spell.name) {
              delete groupList[key]
            }
          }
        })
      }

      // remove already known spells
      for (const [spell] of Object.entries(this.newCharacter.spells.known)) {
        this.newCharacter.spells.known[spell].known = true;
        this.newCharacter.spells.known[spell].preq = [];
        this.newCharacter.spells.known[spell].preqType = '';
        for (const [key] of Object.entries(groupList)) {
          if (groupList[key].name === this.newCharacter.spells.known[spell].name) {
            delete groupList[key]
          }
        }
      }
    },
    // gathers the necessary initial spell data
    onLoad: function () {
      //get required
      this.invocationRequired = this.newCharacter.spells.invocation.requiredAmount;
      for (const [key] of Object.entries(this.newCharacter.spells.invocation)) {
        if (key !== 'available' && key !== 'requiredAmount') {
          this[key + 'Required'] = this.newCharacter.spells.invocation[key].requiredAmount;
          this[key + 'Count'] = 0;
          this[key + 'Remaining'] = Math.max(0, this[key + 'Required'] - this[key + 'Count']);
          this[key + 'Active'] = true;
        }
      }

      // loads spell group selections
      for (const [key] of Object.entries(this.newCharacter.spells.invocation)) {
        if (key !== 'available' && key !== 'requiredAmount') {
          let level = key.charAt(0).toUpperCase() + key.slice(1);
          this.spellLoader(this.invocation['invocation' + level], this.newCharacter.spells.invocation[key]);
        }
      }

      // populates selectedSpells with already known spells so the player doesn't select them again
      this.selectedSpells = this.newCharacter.spells.known;

      // gets a count of the known spells so they can be added later and will not count against the calculated remaining totals
      this.startingSpells = Object.keys(this.newCharacter.skills.known).length;
    }
  },
  mounted: function () {
    // runs a function to gather the necessary initial spell data
    this.onLoad();
    // called to update spell counts, group counts, prerequisites and other data
    this.init();
  }
}
</script>

<style scoped>

</style>