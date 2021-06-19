<template>
  <div class="flex flex-col">
    <h2 v-if="feebleCount > 0" class="text-yellow-400 text-lg font-medium text-center px-5 pt-10">
      Bonus to Compensate for one or more Low Attributes
    </h2>
    <p v-if="feebleCount === 1 && bonusCount === 0" class="text-yellow-200 text-center max-w-2xl mx-auto">
      Because the character has an attribute below seven, add 1d4+3 to any of its other attributes.
    </p>
    <p v-if="(feebleCount > 1 && bonusCount === 0) || (feebleCount > 0 && bonusCount > 0)" class="text-yellow-200 text-center max-w-2xl mx-auto">
      Because the character has two or more attributes below seven, give one of its other attributes a bonus of +1d4+5 and another attribute a +3 bonus or a +2 bonus to the character's Perception.
    </p>
    <div class="mx-auto max-w-3xl overflow-x-auto ">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <p v-if="bonuses.perception.attributeBonus > 0" class="text-yellow-300 mb-3 text-lg font-medium text-center px-5 pt-5">Perception Bonus of +{{bonuses.perception.attributeBonus}}</p>
        <p v-if="feebleCount === 0" class="text-gray-100 mb-3 text-lg font-medium text-center px-5 pt-5">Attribute Rolls</p>
        <p v-if="feebleCount > 0" class="text-indigo-400 mb-3 text-lg font-medium text-center px-5 pt-5">Select Bonus</p>
        <div class="w-full flex justify-items-center">
          <button v-if="feebleCount > 0 && bonusCount > 0" v-on:click="perceptionBonus()" class="mb-2 mx-auto px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">+2 Perception Bonus</button>
        </div>
        <p v-if="feebleCount > 0 && bonusCount > 0" class="mb-2 text-gray-100 text-center">or</p>
        <div class="shadow mb-5 overflow-hidden border-b border-gray-200 rounded-lg mx-3">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-1 py-3 text-xs font-medium text-white uppercase tracking-wider">

              </th>
              <th scope="col" class="px-1 py-3 text-xs font-medium text-white tracking-wider">
                Roll
              </th>
              <th v-if="feebleCount > 0" scope="col" class="px-2 py-3 text-xs font-medium text-white tracking-wider">
                Feeble Bonus
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
              <td v-if="attributes.name && feebleCount > 0" class="px-3 py-2 mx-auto">
                <button v-if="attributes.feeble === false && feebleCount > 0 && attributes.feebleBonus === 0" :id="index" v-on:click="select(index)" class="px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Roll Bonus</button>
              </td>
              <td v-if="attributes.name && bonusCount > 0" v-bind:class="{ 'text-red-500': attributes.feeble === true }" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                <span v-if="attributes.feebleBonus > 0">+ {{attributes.feebleBonus}}</span>
              </td>
              <td v-if="attributes.name" v-bind:class="{ 'text-red-500': attributes.feeble === true }" class="px-1 py-2 whitespace-nowrap text-center text-xl font-medium text-gray-800">
                {{attributes.total}}
              </td>
            </tr>
            <!-- End V-For Attribute Loop-->
            </tbody>
          </table>
        </div>
        <div v-if="feebleCount === 0" class="flex flex-col">
          <button v-if="feebleCount === 0" v-on:click="confirmStats" class="mx-auto mb-5 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Continue</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feeble",
  props: {
    attributes: Object,
    bonuses: Object,
    newCharacter: Object
  },
  data: function(){
    return {
      feebleCount: null,
      bonusCount: 0
    }
  },
  methods: {
    select: function (index) {
      if(this.bonusCount === 0 && this.feebleCount === 1) {
        this.attributes[index].rollFeeble();
        this.bonusCount++
        this.feebleCount--
      } else if(this.bonusCount === 0 && this.feebleCount > 1) {
        this.attributes[index].rollMajorFeeble();
        this.bonusCount++
        this.feebleCount--
      } else {
        this.attributes[index].feebleBonus = 3
        this.bonusCount++
        this.feebleCount = 0
      }
      this.newCharacter.race.getSecondary(this.newCharacter);
    },
    perceptionBonus() {
      this.bonuses.perception.attributeBonus = 2
      this.bonusCount++
      this.feebleCount = 0
    },
    testFeeble() {
      this.bonusCount = 0
      this.feebleCount = this.attributes.feebleTest().feebleCount;
    },
    confirmStats(){
      this.attributes.confirmAttributes = true
    }
  },
  mounted: function () {
    this.testFeeble();
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>