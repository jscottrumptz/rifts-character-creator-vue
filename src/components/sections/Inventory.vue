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
      <ul class="divide-y divide-gray-200">
        <!-- Inventory Item -->
        <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <a href="#" class="block focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-sm font-medium text-gray-900 truncate">Wilk's 320 Laser Pistol</p>
                <p class="text-sm text-gray-500 truncate">Effective Range: 1,000 ft.</p>
              </a>
            </div>
            <stat class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d6 M.D.</stat>
          </div>
          <div class="mt-1">
            <p class="line-clamp-2 text-sm text-gray-600">
              Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
            </p>
          </div>
        </li>

        <!-- More items... -->
        <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <div class="flex justify-between space-x-3">
            <div class="min-w-0 flex-1">
              <a href="#" class="block focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-sm font-medium text-gray-900 truncate">Wilk's 320 Laser Pistol</p>
                <p class="text-sm text-gray-500 truncate">Effective Range: 1,000 ft.</p>
              </a>
            </div>
            <stat class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d6 M.D.</stat>
          </div>
          <div class="mt-1">
            <p class="line-clamp-2 text-sm text-gray-600">
              Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.
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