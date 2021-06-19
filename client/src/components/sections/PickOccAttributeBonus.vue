<template>
  <div class="flex flex-col">
    <h2 v-if="bonusCount === 0" class="text-yellow-400 text-lg font-medium text-center px-5 pt-10">
      Pick the attribute to apply your bonus to
    </h2>

    <div class="mx-auto max-w-3xl overflow-x-auto ">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <p v-if="bonusCount > 0" class="text-gray-100 mb-3 text-lg font-medium text-center px-5 pt-5">Attribute Bonus</p>
        <p v-if="bonusCount === 0" class="text-indigo-400 mb-3 text-lg font-medium text-center px-5 pt-5">Select Bonus</p>
        <div class="shadow mb-5 overflow-hidden border-b border-gray-200 rounded-lg mx-3">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
              <tr>
                <th scope="col" class="px-1 py-3 text-xs font-medium text-white uppercase tracking-wider">

                </th>
                <th v-if="bonusCount === 0" scope="col" class="px-1 py-3 text-xs font-medium text-white tracking-wider">
                  Current Value
                </th>
                <th v-if="bonusCount > 0" scope="col" class="px-1 py-3 text-xs font-medium text-white tracking-wider">
                  Original Value
                </th>
                <th v-if="bonusCount === 0" scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                  Pick Bonus
                </th>
                <th v-if="bonusCount > 0" scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                  Bonus Roll
                </th>
                <th scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
            <!-- V-For Attribute Loop -->
            <tr v-for="(bonusChoices,index) in bonusChoices" v-bind:key="index" class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {{newCharacter.attributes[bonusChoices].name}}
              </td>
              <td v-if="newCharacter.attributes[bonusChoices].total && bonusCount === 0" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                {{newCharacter.attributes[bonusChoices].total}}
              </td>
              <td v-if="newCharacter.attributes[bonusChoices].total && bonusCount > 0" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                {{newCharacter.attributes[bonusChoices].total - newCharacter.attributes[bonusChoices].occBonus}}
              </td>
              <td v-if="newCharacter.attributes[bonusChoices].name && bonusCount === 0" class="px-3 py-2 mx-auto">
                <button v-if="bonusCount === 0 && newCharacter.attributes[bonusChoices].occBonus === 0" :id="bonusChoices" v-on:click="select(bonusChoices)" class="px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Roll Bonus</button>
              </td>
              <td v-if="newCharacter.attributes[bonusChoices].name && bonusCount > 0" v-bind:class="{ 'text-red-500': newCharacter.attributes[bonusChoices].feeble === true }" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                <span v-if="newCharacter.attributes[bonusChoices].occBonus > 0">+ {{newCharacter.attributes[bonusChoices].occBonus}}</span>
              </td>
              <td v-if="newCharacter.attributes[bonusChoices].name" v-bind:class="{ 'text-red-500': newCharacter.attributes[bonusChoices].feeble === true }" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                {{newCharacter.attributes[bonusChoices].total}}
              </td>
            </tr>
            <!-- End V-For Attribute Loop-->
            </tbody>
          </table>
        </div>
        <div v-if="bonusCount > 0" class="flex flex-col">
          <button v-if="bonusCount > 0" v-on:click="confirmStats" class="mx-auto mb-5 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Continue</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PickOccAttributeBonus",
  props: {
    attributes: Object,
    bonuses: Object,
    newCharacter: Object
  },
  data: function(){
    return {
      bonusCount: 0,
      bonusChoices: [],
      bonusRoll: {}
    }
  },
  methods: {
    select: function (index) {
      this.newCharacter.attributes[index].occBonus = this.newCharacter.occ.bonusRoll(this.bonusRoll);
      this.bonusCount++
      this.newCharacter.occ.getSecondary(this.newCharacter);
    },
    getBonus() {
      this.bonusCount = 0
      this.bonusChoices = this.newCharacter.occ.attributeBonusChoices.stats;
      this.bonusRoll = this.newCharacter.occ.attributeBonusChoices.bonusRoll;
    },
    confirmStats(){
      this.newCharacter.occ.attributeBonusChoice = false
    }
  },
  mounted: function () {
    this.getBonus()
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>