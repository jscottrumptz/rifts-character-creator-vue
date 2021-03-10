<template>
  <div class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">

              </th>
              <th scope="col" class="px-1 py-3 text-center text-xs font-medium text-white tracking-wider">
                Total
              </th>
              <th scope="col" class="px-2 py-3 text-center text-xs font-medium text-white tracking-wider">
                per Day
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- HP -->
            <tr class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                HP
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{secondaryStats.hp.initialValue + secondaryStats.hp.attributeBonus + secondaryStats.hp.occBonus + secondaryStats.hp.raceBonus + secondaryStats.hp.skillsBonus + secondaryStats.hp.cyberneticBonus + secondaryStats.hp.otherBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{secondaryStats.hpDay.initialValue + secondaryStats.hpDay.attributeBonus + secondaryStats.hpDay.occBonus + secondaryStats.hpDay.raceBonus + secondaryStats.hpDay.skillsBonus + secondaryStats.hpDay.cyberneticBonus + secondaryStats.hpDay.otherBonus}}
              </td>
            </tr>
            <!-- SDC -->
            <tr class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                SDC
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{secondaryStats.sdc.initialValue + secondaryStats.sdc.attributeBonus + secondaryStats.sdc.occBonus + secondaryStats.sdc.raceBonus + secondaryStats.sdc.skillsBonus + secondaryStats.sdc.cyberneticBonus + secondaryStats.sdc.otherBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{secondaryStats.sdcDay.initialValue + secondaryStats.sdcDay.attributeBonus + secondaryStats.sdcDay.occBonus + secondaryStats.sdcDay.raceBonus + secondaryStats.sdcDay.skillsBonus + secondaryStats.sdcDay.cyberneticBonus + secondaryStats.sdcDay.otherBonus}}
              </td>
            </tr>
            <!-- MDC -->
            <tr class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                MDC
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{secondaryStats.mdc.initialValue + secondaryStats.mdc.attributeBonus + secondaryStats.mdc.occBonus + secondaryStats.mdc.raceBonus + secondaryStats.mdc.skillsBonus + secondaryStats.mdc.cyberneticBonus + secondaryStats.mdc.otherBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{secondaryStats.mdcDay.initialValue + secondaryStats.mdcDay.attributeBonus + secondaryStats.mdcDay.occBonus + secondaryStats.mdcDay.raceBonus + secondaryStats.mdcDay.skillsBonus + secondaryStats.mdcDay.cyberneticBonus + + secondaryStats.mdcDay.otherBonus}}
              </td>
            </tr>
            <!-- PPE -->
            <tr class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                PPE
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{secondaryStats.ppe.initialValue + secondaryStats.ppe.attributeBonus + secondaryStats.ppe.occBonus + secondaryStats.ppe.raceBonus + secondaryStats.ppe.skillsBonus + secondaryStats.ppe.cyberneticBonus + secondaryStats.ppe.otherBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{secondaryStats.ppeDay.initialValue + secondaryStats.ppeDay.attributeBonus + secondaryStats.ppeDay.occBonus + secondaryStats.ppeDay.raceBonus + secondaryStats.ppeDay.skillsBonus + secondaryStats.ppeDay.cyberneticBonus + secondaryStats.ppeDay.otherBonus}}
              </td>
            </tr>
            <!-- ISP -->
            <tr class="bg-white border-t border-gray-200">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                ISP
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{secondaryStats.isp.initialValue + secondaryStats.isp.attributeBonus + secondaryStats.isp.occBonus + secondaryStats.isp.raceBonus + secondaryStats.isp.skillsBonus + secondaryStats.isp.cyberneticBonus  + secondaryStats.isp.otherBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{secondaryStats.ispDay.initialValue + secondaryStats.ispDay.attributeBonus + secondaryStats.ispDay.occBonus + secondaryStats.ispDay.raceBonus + secondaryStats.ispDay.skillsBonus + secondaryStats.ispDay.cyberneticBonus + secondaryStats.ispDay.otherBonus}}
              </td>
            </tr>
            <!-- Horror Factor -->
            <tr class="bg-white border-t border-gray-200">
              <td colspan="2" class="px-6 py-2 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                Horror Factor
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-left text-sm text-gray-500">
                {{secondaryStats.horror.initialValue + secondaryStats.horror.attributeBonus + secondaryStats.horror.occBonus + secondaryStats.horror.raceBonus + secondaryStats.horror.skillsBonus + secondaryStats.horror.cyberneticBonus}}
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondaryStats",
  props: {
    secondaryStats: Array
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>