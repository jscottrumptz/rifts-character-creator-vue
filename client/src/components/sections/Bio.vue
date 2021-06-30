<template>
  <div class="bg-gray-900">
    <div class="max-w-7xl mx-auto pt-5 pb-16 px-5">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-100">
                General Character Info
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Add some details about the character's physical appearance and background.
              </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <!-- Character Name -->
              <div class="sm:col-span-3">
                <label for="charName" class="block text-sm font-medium text-gray-400">
                  Character Name
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" v-model="charName" name="charName" id="charName" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                </div>
              </div>
              <!-- Character Alignment -->
              <div class="sm:col-span-3">
                <label for="alignment" class="block text-sm font-medium text-gray-400">Choose an Alignment</label>
                <select v-model="alignment" id="alignment" name="alignment" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option v-if="!newCharacter.info.isEvil">Principled (Good)</option>
                  <option v-if="!newCharacter.info.isEvil">Scrupulous (Good)</option>
                  <option v-if="!newCharacter.info.isEvil">Unprincipled (Selfish)</option>
                  <option v-if="!newCharacter.info.isEvil">Anarchist (Selfish)</option>
                  <option>Aberrant (Evil)</option>
                  <option>Miscreant (Evil)</option>
                  <option>Diabolic (Evil)</option>
                </select>
              </div>
              <!-- Character Height -->
              <div class="sm:col-span-1">
                <label for="height" class="block text-sm font-medium text-gray-400">
                  Height
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="height" id="height"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         :value=newCharacter.info.heightDescr
                  />
                </div>
              </div>
              <!-- Character Weight -->
              <div class="sm:col-span-1">
                <label for="weight" class="block text-sm font-medium text-gray-400">
                  Weight
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="weight" id="weight"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         :value=newCharacter.info.weightDescr
                  /> </div>
              </div>
              <!-- Character Sex -->
              <div class="sm:col-span-1">
                <label for="sex" class="block text-sm font-medium text-gray-400">
                  Sex
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="sex" id="sex"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                  /></div>
              </div>
              <!-- Character Age -->
              <div class="sm:col-span-1">
                <label for="age" class="block text-sm font-medium text-gray-400">
                  Age
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="age" id="age"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         :value=newCharacter.info.age
                  />
                </div>
              </div>
              <!-- Character Insanities -->
              <div class="sm:col-span-2">
                <label for="insanities" class="block text-sm font-medium text-gray-400">
                  Insanities
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="insanities" id="insanities"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         value="None">
                </div>
              </div>
              <!-- Physical Description -->
              <div class="sm:col-span-6">
                <label for="physical_description" class="block text-sm font-medium text-gray-400">
                  Physical Description
                </label>
                <div class="mt-1">
                  <textarea v-model="physical" id="physical_description" name="physical_description" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Describe your character's physical appearance."
                  />
                </div>
              </div>
              <!-- Biography -->
              <div class="sm:col-span-6">
                <label for="bio" class="block text-sm font-medium text-gray-400">
                  Biography
                </label>
                <div class="mt-1">
                  <textarea v-model="bio" id="bio" name="bio" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Some details about your character's past."
                  />
                </div>
              </div>
              <!-- Character Image -->
<!--          <div class="sm:col-span-6">
                <label for="character_image" class="block text-sm font-medium text-gray-500">
                  Character Image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span class="px-2">Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>-->
            </div>
          </div>

          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-100">
                Extended Character Info
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Round out the character with some optional information.
                Some random suggestions have been auto generated, feel free to use them or create your own.
              </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <!-- Disposition -->
              <div class="sm:col-span-6">
                <label for="disposition" class="block text-sm font-medium text-gray-400">
                  Disposition
                </label>
                <div class="mt-1">
                  <textarea id="disposition" name="disposition" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            :placeholder=newCharacter.info.disposition
                  />
                </div>
              </div>
              <!-- Initial Reason for Adventure -->
              <div class="sm:col-span-3">
                <label for="reason" class="block text-sm font-medium text-gray-400">
                  Initial Reason for Adventure
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="reason" id="reason"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         :placeholder=newCharacter.info.initialReason
                  />
                </div>
              </div>
              <!-- Birth Order-->
              <div class="sm:col-span-3">
                <label for="birth" class="block text-sm font-medium text-gray-400">
                  Birth Order
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="birth" id="birth"
                         class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                         :placeholder=newCharacter.info.birthOrder
                  />
                </div>
              </div>
              <!-- Family Origin -->
              <div class="sm:col-span-6">
                <label for="family" class="block text-sm font-medium text-gray-400">
                  Family Origin
                </label>
                <div class="mt-1">
                  <textarea id="family" name="family" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            :placeholder=newCharacter.info.familyOrigin
                  />
                </div>
              </div>
              <!-- Environment Growing Up -->
              <div class="sm:col-span-6">
                <label for="environment" class="block text-sm font-medium text-gray-400">
                  Environment Growing Up
                </label>
                <div class="mt-1">
                  <textarea id="environment" name="environment" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            :placeholder=newCharacter.info.environment
                  />
                </div>
              </div>
              <!-- Sentiments toward the Coalition -->
              <div class="sm:col-span-6">
                <label for="coalition" class="block text-sm font-medium text-gray-400">
                  Sentiments toward the Coalition
                </label>
                <div class="mt-1">
                  <textarea id="coalition" name="coalition" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            :placeholder=newCharacter.info.coalition
                  />
                </div>
              </div>
              <!-- Sentiments toward Non-Humans -->
              <div class="sm:col-span-6">
                <label for="nonHuman" class="block text-sm font-medium text-gray-400">
                  Sentiments toward Non-Humans
                </label>
                <div class="mt-1">
                  <textarea id="nonHuman" name="nonHuman" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            :placeholder=newCharacter.info.nonHumans
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">

            <button v-on:click="saveCharacter" class="ml-6 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Save Character</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Bio",
  props: {
    newCharacter: Object,
  },
  data: function(){
    return {
      charName: '',
      physical: '',
      bio: '',
      alignment: '',
      sex: '',
    }
  },
  methods: {
    async saveCharacter() {
      this.newCharacter.info.name = this.charName;
      this.newCharacter.info.physicalDescription = this.physical;
      this.newCharacter.info.bio = this.bio;
      this.newCharacter.info.alignment = this.alignment;
      this.newCharacter.info.sex = this.sex;
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation addCharacter($characterData: JSON) {
        addCharacter(characterData: $characterData) {
          _id
          createdAt
          characterData
        }
      }`,
          variables: {characterData: this.newCharacter}
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style scoped>

</style>