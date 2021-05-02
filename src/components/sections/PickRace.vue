<template>
  <div class="p-5 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">

    <!-- Race Selector -->
    <div class="col-span-1 md:pl-5 md:pb-0 mr-6 w-full max-w-xs">
      <div class="mt-1.5 relative">
        <select id="selectRace" v-on:change="onChange($event)" name="selectRace" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 py-2 pr-10 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
          <option value="race-viewer" selected disabled> Select a race... </option>
          <option value="race-viewer" v-for="(races,index) in races" v-bind:key="index" :id="index" >{{races.name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <img class="pt-5" v-if="race" v-bind:src="require('../../'+ race.image)">
      <button v-if="race" v-on:click="selectRace" class="place-self-center mt-3 bg-gray-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-3 py-2 text-white">Select {{race.name}}</button>
    </div>

    <!-- Race Info -->
    <div v-if="race" class="col-span1 lg:col-span-2 xl:col-span-3 border border-gray-700 rounded-lg hover:border-indigo-300">
      <!-- Nav & Tabs -->
      <div class="sm:hidden m-3">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option v-if="aboutActive" value="about" >About</option>
          <option v-if="statsActive" value="stats">Stats</option>
          <option v-if="abilitiesActive" value="abilities">Abilities</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 m-3" aria-label="Tabs">
          <a v-if="aboutActive" v-on:click="toggle='about'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'about', 'bg-gray-100 text-gray-700': toggle === 'about'}" href="#" onclick="return false;">
            About
          </a>
          <a v-if="statsActive" v-on:click="toggle='stats'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'stats', 'bg-gray-100 text-gray-700': toggle === 'stats'}" href="#" onclick="return false;">
            Stats
          </a>
          <a v-if="abilitiesActive" v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'abilities', 'bg-gray-100 text-gray-700': toggle === 'abilities'}" href="#" onclick="return false;">
            Abilities
          </a>
        </nav>
      </div>

      <!-- About Content -->
      <div v-show="toggle==='about' && aboutActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
          <p class="text-gray-50">{{race.description}}</p>
      </div>
      <!-- Stats Content -->
      <div v-show="toggle==='stats' && statsActive" class="mx-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 max-h-96 p-5 bg-gray-900 overflow-hidden rounded-md">
        <!-- Attribute Loop -->
        <div class="flex flex-col">
          <div class="-my-2 sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <tbody>
                    <!-- Attribute Rolls -->
                    <tr class="bg-white border-t text-left border-gray-200">
                      <td class="py-2 pl-6 text-sm font-medium text-gray-900">
                        Attributes
                      </td>
                      <td class="py-2 text-sm font-medium text-gray-900">
                        IQ:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.iqRoll.amount}}D{{race.iqRoll.sides}}
                        <span v-if="race.iqRoll.multiplier">x</span>{{race.iqRoll.multiplier}}
                        <span v-if="race.iqRoll.bonus">+</span>{{race.iqRoll.bonus}}
                        </span>
                        ME:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.meRoll.amount}}D{{race.meRoll.sides}}
                        <span v-if="race.meRoll.multiplier">x</span>{{race.meRoll.multiplier}}
                        <span v-if="race.meRoll.bonus">+</span>{{race.meRoll.bonus}}
                        </span>
                        MA:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.maRoll.amount}}D{{race.maRoll.sides}}
                        <span v-if="race.maRoll.multiplier">x</span>{{race.maRoll.multiplier}}
                        <span v-if="race.maRoll.bonus">+</span>{{race.maRoll.bonus}}
                        </span><br/>
                        PS:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.psRoll.amount}}D{{race.psRoll.sides}}
                        <span v-if="race.psRoll.multiplier">x</span>{{race.psRoll.multiplier}}
                        <span v-if="race.psRoll.bonus">+</span>{{race.psRoll.bonus}}
                        </span>
                        PP:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.ppRoll.amount}}D{{race.ppRoll.sides}}
                        <span v-if="race.ppRoll.multiplier">x</span>{{race.ppRoll.multiplier}}
                        <span v-if="race.ppRoll.bonus">+</span>{{race.ppRoll.bonus}}
                        </span>
                        PE:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.peRoll.amount}}D{{race.peRoll.sides}}
                        <span v-if="race.peRoll.multiplier">x</span>{{race.peRoll.multiplier}}
                        <span v-if="race.peRoll.bonus">+</span>{{race.peRoll.bonus}}
                        </span><br/>
                        PB:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.pbRoll.amount}}D{{race.pbRoll.sides}}
                        <span v-if="race.pbRoll.multiplier">x</span>{{race.pbRoll.multiplier}}
                        <span v-if="race.pbRoll.bonus">+</span>{{race.pbRoll.bonus}}
                        </span>
                        Spd:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.spdRoll.amount}}D{{race.spdRoll.sides}}
                        <span v-if="race.spdRoll.multiplier">x</span>{{race.spdRoll.multiplier}}
                        <span v-if="race.spdRoll.bonus">+</span>{{race.spdRoll.bonus}}
                        </span>
                      </td>
                    </tr>
                    <!-- Secondary Stats -->
                    <tr class="bg-white border-t text-left border-gray-200">
                      <td class="py-2 pl-6 text-sm font-medium text-gray-900">
                        Secondary Stats
                      </td>
                      <td class="py-2 text-sm font-medium text-gray-900">
                        <!-- HP -->
                        <span v-if="race.hp.amount">Hit Points:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.hp.amount}}D{{race.hp.sides}}
                        <span v-if="race.hp.multiplier">x</span>{{race.hp.multiplier}}
                        <span v-if="race.hp.bonus">+</span>{{race.hp.bonus}}
                        </span></span>
                        <!-- SDC -->
                        <span v-if="race.sdc.amount">SDC:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.sdc.amount}}D{{race.sdc.sides}}
                        <span v-if="race.sdc.multiplier">x</span>{{race.sdc.multiplier}}
                        <span v-if="race.sdc.bonus">+</span>{{race.sdc.bonus}}
                        </span></span>
                        <!-- MDC -->
                        <span v-if="race.mdc.amount">MDC:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.mdc.amount}}D{{race.mdc.sides}}
                        <span v-if="race.mdc.multiplier">x</span>{{race.mdc.multiplier}}
                        <span v-if="race.mdc.bonus">+</span>{{race.mdc.bonus}}
                        </span></span>
                        <!-- PPE -->
                        <span v-if="race.ppe.amount">PPE:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.ppe.amount}}D{{race.ppe.sides}}
                        <span v-if="race.ppe.multiplier">x</span>{{race.ppe.multiplier}}
                        <span v-if="race.ppe.bonus">+</span>{{race.ppe.bonus}}
                        </span></span>
                        <!-- ISP -->
                        <span v-if="race.isp.amount">ISP:
                        <span class="pr-2 text-sm font-normal text-gray-500">{{race.isp.amount}}D{{race.isp.sides}}
                        <span v-if="race.isp.multiplier">x</span>{{race.isp.multiplier}}
                        <span v-if="race.isp.bonus">+</span>{{race.isp.bonus}}
                        </span></span>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Available OCCs Content -->
      <div v-show="toggle==='abilities' && abilitiesActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <p class="text-gray-50">IQ: {{race.iqRoll.amount}}d{{race.iqRoll.sides}}</p>
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
      race: null,
      toggle: "about",
      statsActive: true,
      aboutActive: true,
      abilitiesActive: true,
      tabsActive: true,
    }
  },
  methods: {
    onChange(event) {
      const raceName = event.target.selectedOptions[0].id
      this.race = this.races[raceName]
      console.log(this.race)
    },
    selectRace(){
      console.log(this.race)
    }
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>