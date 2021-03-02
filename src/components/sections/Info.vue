<template>
  <div class="bg-gray-800 max-w-7xl mx-auto mb-6 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-white">
        {{info.name}}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        {{race.name}} | {{occ.name}} | Level {{info.level}}
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center sm:text-left text-gray-300">
            Height
          </dt>
          <dd class="mt-1 text-sm text-center sm:text-left text-white">
            {{ info.heightFt }}' {{ info.heightIn }}"
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center text-gray-300">
            Weight
          </dt>
          <dd class="mt-1 text-sm text-center text-white">
            {{ info.weight }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center text-gray-300">
            Sex
          </dt>
          <dd class="mt-1 text-sm text-center text-white">
            {{ info.sex }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm  text-center font-medium text-gray-300">
            Age
          </dt>
          <dd class="mt-1 text-center text-sm text-white">
            {{ info.age }}
          </dd>
        </div>
        <div class="col-span-4 sm:col-span-2">
          <dt class="text-sm font-medium text-left text-gray-300">
            Insanities
          </dt>
          <dd class="mt-1 text-sm text-left text-white">
            <span v-for="(insanity,index) in info.insanity" v-bind:key="index"> {{insanity }} </span>
          </dd>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <dt class="text-sm font-medium text-gray-300">
            Bio
          </dt>
          <dd class="mt-1 text-sm text-white">
            {{ info.bio }}
          </dd>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <dt class="text-sm font-medium text-gray-300">
            Attachments
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            <ul class="border bg-white border-gray-200 rounded-md divide-y divide-gray-200">
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate">
                  {{info.name}}_{{race.name}}_{{occ.name}}_Character_Sheet.pdf
                </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: solid/paper-clip -->
                  <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate">
                  {{info.name}}_{{race.name}}_{{occ.name}}_Skills_and_Abilities.pdf
                </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
name: "Info",
  props: {
    info: Array,
    race: Array,
    occ: Array
  }
}
</script>

<style scoped>

</style>