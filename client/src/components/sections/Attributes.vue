<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-hidden sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">

              </th>
              <th scope="col" class="px-1 py-3 text-left text-xs font-medium text-white tracking-wider">
                Original
              </th>
              <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-white tracking-wider">
                Bonuses
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- V-For Attribute Loop -->
            <tr v-for="(attributes,index) in attributes" v-bind:key="index" class="bg-white border-t border-gray-200">
              <td v-if="attributes.name" class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {{attributes.name}}
              </td>
              <td v-if="attributes.name" class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.raceTotal + attributes.feebleBonus}}
              </td>
              <td v-if="attributes.name" class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.occBonus + attributes.skillsBonus + attributes.cyberneticBonus}}
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
  name: "Attributes",
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