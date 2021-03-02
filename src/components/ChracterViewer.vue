<template>
  <div>
    <div class="border-b border-gray-200">
      <h3 class="pt-5 pb-2 text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate">
        {{character.info.name}}
      </h3>
      <p class="pb-5 text-white text-center"> {{character.race.name}} | {{character.occ.name}} | Level {{character.info.level}}</p>
    </div>
    <!-- begin main area -->
    <div class="relative min-h-screen flex flex-col">
      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto  lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 xl:flex">
          <div class="border-b xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r ">
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start left column area -->
              <div class="h-full relative" style="min-height: 12rem;">
                <div class="absolute inset-0 rounded-lg"></div>
                <!-- Attributes -->
                <Attributes :attributes="character.attributes"/>
              </div>
              <!-- End left column area -->
            </div>
          </div>

          <div class="lg:min-w-0 lg:flex-1">
            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
              <!-- Start main area-->
              <div class="relative h-full" style="min-height: 36rem;">
                <div class="absolute inset-0 rounded-lg">
                  <!-- TABS Start-->
                  <div>
                    <div class="sm:hidden">
                      <label for="tabs" class="sr-only">Select a tab</label>
                      <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        <option selected>abilities</option>
                        <option>psionics</option>
                        <option>magic</option>
                        <option>cybernetics</option>
                        <option>skills</option>
                      </select>
                    </div>
                    <div class="hidden sm:block">
                      <nav class="flex space-x-4" aria-label="Tabs">
                        <a v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                          Abilities
                        </a>
                        <a v-on:click="toggle='psionics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                          Psionics
                        </a>
                        <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
                        <a v-on:click="toggle='magic'" class="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                          Magic
                        </a>
                        <a v-on:click="toggle='cybernetics'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                          Cybernetics
                        </a>
                        <a v-on:click="toggle='skills'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                          Skills
                        </a>
                      </nav>
                    </div>
                  </div>
                  <!-- TABS End-->
                  <Abilities :abilities="character.abilities" v-if="toggle==='abilities'"/>
                  <Psionics :psionics="character.psionics" v-if="toggle==='psionics'"/>
                  <Magic :magic="character.spells" v-if="toggle==='magic'"/>
                </div>
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>

        <div class="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
          <div class="h-full pl-6 py-6 lg:w-80">
            <!-- Start right column area -->
            <div class="h-full relative" style="min-height: 16rem;">
              <div class="absolute inset-0 rounded-lg"></div>
              <Inventory :inventory="character.inventory"/>
            </div>
            <!-- End right column area -->
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

export default {
  name: 'CharacterViewer',
  components: {Magic, Psionics, Inventory, Abilities, Attributes},
  props: {
    character: Array
  },
  data: function(){
    return {
      toggle: "abilities"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
