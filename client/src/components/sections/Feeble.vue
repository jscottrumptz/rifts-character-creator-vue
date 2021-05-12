<template>
  <div class="flex flex-col">
    <h2 class="text-gray-100 text-lg font-medium text-center px-5 pt-10">
      Bonus to Compensate for a Low Attribute<span>s</span>
    </h2>
    <p class="text-gray-100 text-center pb-5 max-w-2xl mx-auto">
      Because the character has an attribute below seven, add 1d4+3 to any of its other attributes.
      <br/>Because the character has two or more attributes below seven, give one of its other attributes a bonus of +1d4+5 and another attribute a +3 bonus or a +2 bonus to the character's Perception.
    </p>
    <div class="my-2 mx-auto max-w-3xl overflow-x-auto ">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg mx-3">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-1 py-3 text-xs font-medium text-white uppercase tracking-wider">

              </th>
              <th scope="col" class="px-1 py-3 text-xs font-medium text-white tracking-wider">
                Roll
              </th>
              <th scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                Total
              </th>
              <th scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                Feeble Bonus
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- V-For Attribute Loop -->
            <tr v-for="(attributes,index) in attributes" v-bind:key="index" class="bg-white border-t border-gray-200">
              <td v-if="attributes.name" v-bind:class="{ 'text-red-500': attributes.feeble === true }" class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {{attributes.name}}
              </td>
              <td v-if="attributes.name" class="inline-flex items-center whitespace-nowrap text-sm text-gray-500">
                <span class="inline-block" v-for="(attributeRoll,index) in attributes.attributeRoll" v-bind:key="index">
                <img class="py-1 h-12 w-12" v-bind:alt="'die showing a value of ' + attributeRoll" v-bind:src="require('../../assets/images/dice/d6f-'+ attributeRoll + '.svg')">
                </span>
                <div class="text-xl font-medium text-gray-800" v-if="attributes.bonus > 0">+ {{attributes.bonus}}</div>
              </td>
              <td v-if="attributes.name" v-bind:class="{ 'text-red-500': attributes.feeble === true }" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                {{attributes.raceTotal}}
              </td>
              <td v-if="attributes.name" class="px-1 py-2">
                <button v-if="attributes.feeble === false" class="px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Roll Bonus</button>
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
  name: "Feeble",
  props: {
    attributes: Object
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>