<template>
  <div v-bind:class="{ 'hidden': !isActive }" class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-hidden sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
            <tr>
              <th colspan="2" scope="col" class="px-6 py-3 text-left text-xs font-medium text-white tracking-wider">
                Save
              </th>
              <th scope="col" class="px-2 py-3 text-center text-xs font-medium text-white tracking-wider">
                Bonus
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- V-For Chances Loop -->
            <tr v-for="(saves,index) in saves" v-bind:key="index" class="bg-white border-t border-gray-200" >
              <td v-if="saves.initialValue + saves.attributeBonus + saves.occBonus + saves.raceBonus + saves.skillsBonus + saves.cyberneticBonus  + saves.otherBonus !== 0" v-show="isActive=true" colspan="2" class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                vs. {{saves.name}}
              </td>
              <td v-if="saves.initialValue + saves.attributeBonus + saves.occBonus + saves.raceBonus + saves.skillsBonus + saves.cyberneticBonus  + saves.otherBonus !== 0" class="px-6 py-2 whitespace-nowrap text-center text-sm text-gray-500">
                <span v-if="saves.initialValue + saves.attributeBonus + saves.occBonus + saves.raceBonus + saves.skillsBonus + saves.cyberneticBonus  + saves.otherBonus > 0">+</span>{{saves.initialValue + saves.attributeBonus + saves.occBonus + saves.raceBonus + saves.skillsBonus + saves.cyberneticBonus  + saves.otherBonus}} <span v-if="saves.name === 'Coma'  || saves.name === 'Death'">%</span>
              </td>
            </tr>
            <!-- End V-For Attribute Loop-->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Saves",
  props: {
    saves: Object
  },
  data: function(){
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>