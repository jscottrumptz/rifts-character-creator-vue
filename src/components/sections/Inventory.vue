<template>
  <div class="bg-gray-800 mt-5 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Inventory
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        Weapons, Vehicles, Supplies, and Other
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <ul v-for="(inventory,index) in inventory" v-bind:key="index" class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <a href="#" onclick="return false;" class="block focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-sm font-medium text-gray-900 truncate">{{inventory.name}}</p>
                <p class="text-sm text-gray-500 truncate">({{inventory.type}})</p>
              </a>
            </div>
            <stat class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{{inventory.type}}</stat>
          </div>
          <div class="mt-1">
            <p class=" text-sm text-gray-600">
              {{inventory.description}}
              <span v-if="inventory.gmNote" class="italic"><br><br><span class="font-medium not-italic">G.M. Note:</span> {{inventory.gmNote}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Inventory",
  props: {
    inventory: Array
  }
}
</script>

<style scoped>

</style>