<template>
  <div>
  <div class="bg-gray-800 max-w-7xl mx-auto mb-6 shadow overflow-hidden sm:rounded-lg">
    <!-- Character Info Header -->
    <div class="px-4 py-5 sm:px-6">
      <!-- Character Name -->
      <h3 class="text-lg leading-6 font-medium text-white">
        {{info.name}}
      </h3>
      <!-- Character Alignment, Race, OCC, and Level  -->
      <p class="mt-1 max-w-2xl text-sm text-gray-300">
        {{ info.alignment }} | {{race.name}} | {{occ.name}} | Level {{info.level}} <span v-on:click="show=true" class="ml-10 text-red-500 text-xs cursor-pointer font-bold hover:text-red-300">DELETE</span>
      </p>
    </div>
    <!-- Character Info -->
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-6">
        <!-- Height -->
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center sm:text-left text-gray-300">
            Height
          </dt>
          <dd class="mt-1 text-sm text-center sm:text-left text-white">
            {{ info.heightDescr }}
          </dd>
        </div>
        <!-- Weight -->
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center text-gray-300">
            Weight
          </dt>
          <dd class="mt-1 text-sm text-center text-white">
            {{ info.weightDescr }}
          </dd>
        </div>
        <!-- Sex -->
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-center text-gray-300">
            Sex
          </dt>
          <dd class="mt-1 text-sm text-center text-white">
            {{ info.sex }}
          </dd>
        </div>
        <!-- Age -->
        <div class="sm:col-span-1">
          <dt class="text-sm  text-center font-medium text-gray-300">
            Age
          </dt>
          <dd class="mt-1 text-center text-sm text-white">
            {{ info.age }}
          </dd>
        </div>
        <!-- Insanities -->
        <div class="col-span-4 sm:col-span-2">
          <dt class="text-sm font-medium text-left text-gray-300">
            Insanities
          </dt>
          <dd class="mt-1 text-sm text-left text-white">
            <span v-for="(insanity,index) in info.insanity" v-bind:key="index"> {{insanity }} </span>
          </dd>
        </div>
        <!-- Physical Description -->
        <div v-if="info.physicalDescription !== ''" class="col-span-4 sm:col-span-6">
          <dt class="whitespace-pre-wrap text-sm font-medium text-gray-300">
            Physical Description
          </dt>
          <dd class="mt-1 text-sm text-white">
            {{ info.physicalDescription }}
          </dd>
        </div>
        <!-- Bio -->
        <div v-if="info.bio !== ''" class="col-span-4 sm:col-span-6">
          <dt class="text-sm font-medium text-gray-300">
            Bio
          </dt>
          <dd class="whitespace-pre-wrap mt-1 text-sm text-white">
            {{ info.bio }}
          </dd>
        </div>
        <!-- PDFs -->
        <div class="col-span-4 mb-6 sm:col-span-6">
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
      <!-- Extended Info Toggle -->
      <a v-if="info.disposition !== '' || info.initialReason !== '' || info.birthOrder !== '' || info.familyOrigin !== '' || info.environment !== '' || info.coalition !== '' || info.nonHumans !== ''" v-on:click="extended = !extended" class="text-gray-300 hover:text-gray-500 text-sm p-2 rounded-md bg-gray-900" href="#" onclick="return false;">
        <span v-if="extended === false">View extended character info...</span>
        <span v-if="extended === true">Hide extended character info</span>
      </a>
    </div>
    <!-- Extended Info -->
    <div v-if="extended === true">
      <dl>
        <!-- Disposition -->
        <div v-if="info.disposition !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Disposition
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.disposition }}
          </dd>
        </div>
        <!-- Initial Reason for Adventure -->
        <div v-if="info.initialReason !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Initial Reason for Adventure
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.initialReason }}
          </dd>
        </div>
        <!-- Birth Order -->
        <div v-if="info.birthOrder !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Birth Order
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.birthOrder }}
          </dd>
        </div>
        <!-- Family Origin -->
        <div v-if="info.familyOrigin !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Family Origin
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.familyOrigin }}
          </dd>
        </div>
        <!-- Environment Growing Up -->
        <div v-if="info.environment !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Environment Growing Up
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.environment }}
          </dd>
        </div>
        <!-- Sentiments toward the Coalition -->
        <div v-if="info.coalition !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Sentiments toward the Coalition
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.coalition }}
          </dd>
        </div>
        <!-- Sentiments toward Non-Humans -->
        <div v-if="info.nonHumans !== ''" class="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-300">
            Sentiments toward Non-Humans
          </dt>
          <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
            {{ info.nonHumans }}
          </dd>
        </div>
      </dl>
    </div>
     </div>
  <!-- Modal -->
    <div aria-live="assertive" class="z-50 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
      <div class="w-full flex flex-col items-center space-y-10 sm:items-middle">
        <!-- Error information -->
        <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="show" class="pointer-events-auto inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="text-lg leading-6 font-medium text-gray-900">
                  Delete Character
                </div>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to delete your character? All of this character's data will be permanently removed from our servers forever. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button v-on:click="removeCharacter" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Delete Character
              </button>
              <button v-on:click="show=false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
name: "Info",
  props: {
    info: Object,
    race: Object,
    occ: Object,
    id: String
  },
  data: function(){
    return {
      extended: false,
      // toggle for modal
      show: false,
    }
  },
  methods: {
    async removeCharacter() {
      this.show=false
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation removeCharacter($characterId:ID!) {
            removeCharacter(characterId:$characterId) {
              _id
              characterData
            }
          }`,
          variables: {characterId: this.id}
        });
      } catch (e) {
        console.log(e.message);
      }
      setTimeout(location.reload.bind(location), 200);
    }
  }
}
</script>

<style scoped>

</style>