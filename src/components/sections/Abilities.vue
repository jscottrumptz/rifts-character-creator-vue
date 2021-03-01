<template>
  <div class="bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-3 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        Abilities
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        Racial, OCC, Cybernetic, and Other
      </p>
    </div>
    <div class="bg-white border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <!-- Begin Ability -->
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            <p class="text-gray-800 pb-2">Forage food</p>
            Cost: 20 ISP <br>
            Recast Time: 1 Day <br>
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
        <!-- End Ability  -->
        <!-- Begin Ability -->
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            <p class="text-gray-800 pb-2">Sense Ley Lines</p>
            Cost: 50 PP<br>
            Recast Time: 3 hrs.
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
        <!-- End Ability  -->
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "Abilities",
  props: {
    abilities: Array
  }
}
</script>

<style scoped>

</style>