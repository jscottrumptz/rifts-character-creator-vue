<template>
  <div class="px-5">
    <p class="text-white text-xl font-medium p-5" >Pick Spells</p>
    <div class="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <!-- Selected List -->
      <div class="col-span-1 border border-gray-700 rounded-lg hover:border-indigo-300">
        <h2 class="text-white pl-5 pt-5">Other Spell Picks Remaining: {{remaining}}</h2>
        <p v-if="invocationRemaining > 0" class="text-white pl-5 pt-5 font-medium" >Fulfill the following requirements...</p>
        <div class="pl-10 pb-5">
          <h2 v-if="invocationRemaining > 0" class="text-white">Invocation Picks Needed: {{invocationRemaining}}</h2>
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
            <option selected disabled> Select a Level... </option>
            <option v-if="this[toggle][toggle + 'One']" value="One">Level One</option>
            <option v-if="this[toggle][toggle + 'Two']" value="Two">Level Two</option>
            <option v-if="this[toggle][toggle + 'Three']" value="Three">Level Three</option>
            <option v-if="this[toggle][toggle + 'Four']" value="Four">Level Four</option>
            <option v-if="this[toggle][toggle + 'Five']" value="Five">Level Five</option>
            <option v-if="this[toggle][toggle + 'Six']" value="Six">Level Six</option>
            <option v-if="this[toggle][toggle + 'Seven']" value="Seven">Level Seven</option>
            <option v-if="this[toggle][toggle + 'Eight']" value="Eight">Level Eight</option>
            <option v-if="this[toggle][toggle + 'Nine']" value="Nine">Level Nine</option>
            <option v-if="this[toggle][toggle + 'Ten']" value="Ten">Level Ten</option>
            <option v-if="this[toggle][toggle + 'Eleven']" value="Eleven">Level Eleven</option>
            <option v-if="this[toggle][toggle + 'Twelve']" value="Twelve">Level Twelve</option>
            <option v-if="this[toggle][toggle + 'Thirteen']" value="Thirteen">Level Thirteen</option>
            <option v-if="this[toggle][toggle + 'Fourteen']" value="Fourteen">Level Fourteen</option>
            <option v-if="this[toggle][toggle + 'Fifteen']" value="Fifteen">Level Fifteen</option>
            <option v-if="this[toggle][toggle + 'A']" value="A">Group A</option>
            <option v-if="this[toggle][toggle + 'B']" value="B">Group B</option>
          </select>
        </div>

        <!-- Toggle Level Spell List -->
        <div class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 shadow overflow-hidden rounded-md">
          <ul class="text-gray-300 divide-y divide-gray-600 ">
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
      // check the selection cost to be sure there are enough picks remaining
      if(spellGroup[index].selectionCost > this.remaining)
      {
        spellGroup[index].selectionCost <= (this[groupRemaining] + this.remaining) ? this.enoughPicks = true : this.enoughPicks = false
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
        console.log(this[levelCount])
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
      const levelCount = spell.level.toLowerCase() + 'Count';
      // make sure something is selected
      if (spell){
        // put it back in the group
        this[group][group + spell.level ][prop] = spell;

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
        console.log(this[levelCount])
        // update everything
        this.init();
      }
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

      // hide group if no picks remaining
      this.invocationRemaining === 0 && this.remaining === 0 ?
          this.invocationActive = false : this.invocationActive = true

      // hide group if empty
      if (Object.keys(this.invocation).length === 0) {
        this.invocationActive = false
      }

      // set active group if default is inactive
      // if (!this.invocationActive) {
      //   this.toggle = 'airElemental';
      //   if (!this.airElementalActive) {
      //     this.toggle = 'sensitive';
      //     if (!this.earthElementalsActive) {
      //       this.toggle = 'super'
      //     }
      //  }
      // }

      // either show the finished button or the tabs
      this.tabsSpellsActive = availablePicks !== 0;

      // check to see if spells are removable
      if(Object.keys(this.selectedSpells).length > 0){
        for (const [spellKey] of Object.entries(this.selectedSpells)) {
          // check for prerequisites
          this.selectedSpells[spellKey].preq.forEach(preq => {
            let preqFound = false;
            // make prerequisites un-removable
            for (const [preqKey] of Object.entries(this.selectedSpells)) {
              // check for skill property and exclude the picked skill
              if (preqKey.includes(preq) && spellKey !== preqKey && !preqFound) {
                this.selectedSpells[preqKey].canRemove = false
                preqFound = true;
              }
            }
          })
        }
      }

      // update remaining spells SpellsCounter
      this.remaining = availablePicks
          - this.invocationRemaining
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
      //get required
      this.invocationRequired = this.newCharacter.spells.invocation.requiredAmount;

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
      //
      // loads spell group selections
      this.spellLoader(this.invocation, this.newCharacter.spells.invocation)

      // populates selectedSpells with already known spells so the player doesn't select them again
      this.selectedSpells = this.newCharacter.spells.known

      // gets a count of the known spells so they can be added later and will not count against the calculated remaining totals
      this.startingSpells = Object.keys(this.newCharacter.skills.known).length
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