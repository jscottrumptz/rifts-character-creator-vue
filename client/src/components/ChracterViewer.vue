<template>
  <div v-if="character">
    <!-- begin main area -->
    <div class="relative min-h-screen flex flex-col">
      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 lg:flex">
          <div class="xl:flex-shrink-0 xl:w-64">
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start LEFT COLUMN area -->
              <div class="h-full relative" style="min-height: 12rem;">
                <div class="absolute inset-0 rounded-lg"></div>
                <!-- Attributes & Stats -->
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
                  <!-- Character Info Section -->
                  <Info :info="character.info" :race="character.race" :occ="character.occ" :id="id"/>
                  <!-- TABS Start-->
                  <div>
                    <div class="sm:hidden">
                      <label for="tabs" class="sr-only">Select a tab</label>
                      <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        <option v-if="character.abilities.ability !== 'None'"  selected value="abilities">Abilities</option>
                        <option v-if="character.psionics.ability !== 'None'" value="psionics">Psionics</option>
                        <option value="skills">Skills</option>
                        <option v-if="Object.keys(character.spells).length !== 0" value="magic">Magic</option>
                        <option v-if="Object.keys(character.cybernetics).length !== 0" value="cybernetics">Cybernetics</option>
                        <option value="inventory">Inventory</option>
                      </select>
                    </div>
                    <div class="hidden sm:block">
                      <nav class="flex space-x-4" aria-label="Tabs">
                        <a v-if="character.abilities.ability !== 'None'" v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'abilities', 'bg-gray-100 text-gray-700': toggle === 'abilities'}" href="#" onclick="return false;">
                          Abilities
                        </a>
                        <a v-if="character.psionics.ability !== 'None'" v-on:click="toggle='psionics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'psionics', 'bg-gray-100 text-gray-700': toggle === 'psionics'}" href="#" onclick="return false;">
                          Psionics
                        </a>
                        <a v-on:click="toggle='skills'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'skills', 'bg-gray-100 text-gray-700': toggle === 'skills'}" href="#" onclick="return false;">
                          Skills
                        </a>
                        <a v-if="character.spells.ability !== 'None'" v-on:click="toggle='magic'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'magic', 'bg-gray-100 text-gray-700': toggle === 'magic'}" href="#" onclick="return false;">
                          Magic
                        </a>
                        <a v-if="Object.keys(character.cybernetics).length !== 0" v-on:click="toggle='cybernetics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'cybernetics', 'bg-gray-100 text-gray-700': toggle === 'cybernetics'}" href="#" onclick="return false;">
                          Cybernetics
                        </a>
                        <a v-on:click="toggle='inventory'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                           v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'inventory', 'bg-gray-100 text-gray-700': toggle === 'inventory'}" href="#" onclick="return false;">
                          Inventory
                        </a>
                      </nav>
                    </div>
                  </div>
                  <!-- TABS End-->
                  <Abilities :abilities="character.abilities" v-if="toggle==='abilities' && character.abilities.ability !== 'None'" />
                  <Psionics :psionics="character.psionics" v-if="toggle==='psionics' && character.psionics.ability !== 'None'"/>
                  <Magic :spells="character.spells" v-if="toggle==='magic' && character.spells.ability !== 'None'"/>
                  <Skills :skills="character.skills" v-if="toggle==='skills'"/>
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
import Attributes from "@/components/sections/Attributes";
import Abilities from "@/components/sections/Abilities";
import Inventory from "@/components/sections/Inventory";
import Psionics from "@/components/sections/Psionics";
import Skills from "@/components/sections/Skills";
import Magic from "@/components/sections/Magic";
import Info from "@/components/sections/Info";
import SecondaryStats from "@/components/sections/SecondaryStats";
import Chances from "@/components/sections/Chances";
import Saves from "@/components/sections/Saves";
import Bonuses from "@/components/sections/Bonuses";

export default {
  name: 'CharacterViewer',
  components: {Bonuses, Saves, Chances, SecondaryStats, Info, Magic, Psionics, Skills, Inventory, Abilities, Attributes},
  props: {
    character: Object,
    id: String
  },
  data: function(){
    return {
      toggle: "abilities",
    }
  },
  mounted: function () {
    // sets the starting tab
    if (this.character.abilities.ability === 'None'){
      this.toggle = "skills"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
