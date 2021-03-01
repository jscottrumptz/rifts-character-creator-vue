<template>
  <div>
    <div class="border-b border-gray-200">
      <h3 class="pt-5 pb-2 text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate">
        {{character.info.name}}
      </h3>
      <p class="pb-5 text-white text-center"> {{character.race.name}} | {{character.occ.name}}</p>
    </div>
    <!-- begin main area -->
    <div class="relative min-h-screen flex flex-col">
      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 xl:flex">
          <div class="border-b xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r ">
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start left column area -->
              <div class="h-full relative" style="min-height: 12rem;">
                <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
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
                <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>

        <div class="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
          <div class="h-full pl-6 py-6 lg:w-80">
            <!-- Start right column area -->
            <div class="h-full relative" style="min-height: 16rem;">
              <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"></div>
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

export default {
  name: 'CharacterViewer',
  components: {Attributes},
  props: {
    character: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
