<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
            <!-- IQ odd -->
            <tr class="bg-white">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                IQ
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.iq.raceTotal + attributes.iq.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.iq.occBonus + attributes.iq.skillsBonus + attributes.iq.cyberneticBonus}}
              </td>
            </tr>

            <!-- ME even -->
            <tr class="bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                ME
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.me.raceTotal + attributes.me.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.me.occBonus + attributes.me.skillsBonus + attributes.me.cyberneticBonus}}
              </td>
            </tr>

            <!-- MA odd -->
            <tr class="bg-white">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                MA
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.ma.raceTotal + attributes.ma.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.ma.occBonus + attributes.ma.skillsBonus + attributes.ma.cyberneticBonus}}
              </td>
            </tr>

            <!-- PS even -->
            <tr class="bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                PS
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.ps.raceTotal + attributes.ps.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.ps.occBonus + attributes.ps.skillsBonus + attributes.ps.cyberneticBonus}}
              </td>
            </tr>

            <!-- PP odd -->
            <tr class="bg-white">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                PP
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.pp.raceTotal + attributes.pp.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.pp.occBonus + attributes.pp.skillsBonus + attributes.pp.cyberneticBonus}}
              </td>
            </tr>

            <!-- PE even -->
            <tr class="bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                PE
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.pe.raceTotal + attributes.pe.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.pe.occBonus + attributes.pe.skillsBonus + attributes.pe.cyberneticBonus}}
              </td>
            </tr>

            <!-- PB odd -->
            <tr class="bg-white">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                PB
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.pb.raceTotal + attributes.pb.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.pb.occBonus + attributes.pb.skillsBonus + attributes.pb.cyberneticBonus}}
              </td>
            </tr>

            <!-- SPD even -->
            <tr class="bg-gray-100">
              <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                SPD
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                {{attributes.spd.raceTotal + attributes.spd.feebleBonus}}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                +{{attributes.spd.occBonus + attributes.spd.skillsBonus + attributes.spd.cyberneticBonus}}
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
  name: "Attributes",
  props: {
    attributes: Array
  }
}
</script>

<style scoped>

</style>