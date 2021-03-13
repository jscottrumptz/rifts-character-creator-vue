<template>
  <div>
    <!-- begin main area -->
    <div class="relative min-h-screen flex flex-col border-t border-indigo-300">
      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 lg:flex">
          <div class="border-b xl:border-b-0 xl:flex-shrink-0 xl:w-64 border-indigo-300 xl:border-r ">
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start LEFT COLUMN area -->
              <div class="h-full relative" style="min-height: 12rem;">
                <div class="absolute inset-0 rounded-lg"></div>
                <!-- Attributes -->
                <Attributes :attributes="character.attributes"/>
                <SecondaryStats :secondaryStats="character.secondaryStats"/>
                <Chances :chances="character.chances"/>
                <Saves :saves="character.saves"/>
                <Bonuses :bonuses="character.bonuses"/>
              </div>
              <!-- End left column area -->
            </div>
          </div>

          <div class="lg:min-w-0 lg:flex-1">
            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
              <!-- Start MAIN area-->
              <div class="relative h-full" style="min-height: 36rem;">
                <div class="absolute inset-0 rounded-lg">
                  <Info :info="character.info" :race="character.race" :occ="character.occ"/>
                  <!-- TABS Start-->
                  <div>
                    <div class="sm:hidden">
                      <label for="tabs" class="sr-only">Select a tab</label>
                      <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        <option selected value="abilities">Abilities</option>
                        <option value="psionics">Psionics</option>
                        <option value="magic">Magic</option>
                        <option value="cybernetics">Cybernetics</option>
                        <option value="skills">Skills</option>
                        <option value="inventory">Inventory</option>
                      </select>
                    </div>
                    <div class="hidden sm:block">
                      <nav class="flex space-x-4" aria-label="Tabs">
                        <a v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'abilities', 'bg-gray-100 text-gray-700': toggle === 'abilities'}" href="#" onclick="return false;">
                          Abilities
                        </a>
                        <a v-on:click="toggle='psionics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'psionics', 'bg-gray-100 text-gray-700': toggle === 'psionics'}" href="#" onclick="return false;">
                          Psionics
                        </a>
                        <a v-on:click="toggle='magic'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'magic', 'bg-gray-100 text-gray-700': toggle === 'magic'}" href="#" onclick="return false;">
                          Magic
                        </a>
                        <a v-on:click="toggle='cybernetics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'cybernetics', 'bg-gray-100 text-gray-700': toggle === 'cybernetics'}" href="#" onclick="return false;">
                          Cybernetics
                        </a>
                        <a v-on:click="toggle='skills'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'skills', 'bg-gray-100 text-gray-700': toggle === 'skills'}" href="#" onclick="return false;">
                          Skills
                        </a>
                        <a v-on:click="toggle='inventory'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'inventory', 'bg-gray-100 text-gray-700': toggle === 'inventory'}" href="#" onclick="return false;">
                          Inventory
                        </a>
                      </nav>
                    </div>
                  </div>
                  <!-- TABS End-->
                  <Abilities :abilities="character.abilities" v-if="toggle==='abilities'"/>
                  <Psionics :psionics="character.psionics" v-if="toggle==='psionics'"/>
                  <Magic :magic="character.spells" v-if="toggle==='magic'"/>
                  <Inventory :inventory="character.inventory" v-if="toggle==='inventory'"/>
                </div>
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- end main area -->
  </div>
</template>

<script>
// import axios from "axios";
import Attributes from "@/components/sections/Attributes";
import Abilities from "@/components/sections/Abilities";
import Inventory from "@/components/sections/Inventory";
import Psionics from "@/components/sections/Psionics";
import Magic from "@/components/sections/Magic";
import Info from "@/components/sections/Info";
import SecondaryStats from "@/components/sections/SecondaryStats";
import Chances from "@/components/sections/Chances";
import Saves from "@/components/sections/Saves";
import Bonuses from "@/components/sections/Bonuses";

export default {
  name: 'CharacterViewer',
  components: {Bonuses, Saves, Chances, SecondaryStats, Info, Magic, Psionics, Inventory, Abilities, Attributes},
  props: {
    character: Array
  },
  data: function(){
    return {
      toggle: "abilities",
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
