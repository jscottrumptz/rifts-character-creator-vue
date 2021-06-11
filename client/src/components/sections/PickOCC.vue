<template>
  <div class="p-5 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">

    <!-- OCC Selector -->
    <div class="col-span-1 md:pl-5 md:pb-0 mr-0 ">
      <div class="mt-0 relative">
        <select id="selectRace" v-on:change="onChange($event)" name="selectRace" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 py-2 pr-10 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
          <option value="occ-viewer" selected disabled> Select an OCC... </option>
          <option value="occ-viewer" v-for="(occs,index) in occs" v-bind:key="index" :id="index" >{{occs.name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <img class="mt-5 border-4 border-gray-700 rounded-lg" v-if="occ" v-bind:src="require('../../'+ occ.image)" v-bind:alt="'Illustration of a ' + occ.name">
      <!-- Select OCC Button -->
      <div v-if="occ" class="flex flex-col">
        <button v-if="occ && occ.testRequirements(newCharacter)" v-on:click="selectOCC" class="mx-auto mt-5 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Select {{occ.name}}</button>
      </div>
    </div>

    <!-- Bonuses, Money, and Requirements -->
    <div v-if="occ" class="flex flex-col">
      <div class="sm:-mx-6 lg:-mx-8 my-auto">
        <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <p v-if="!occ.testRequirements(newCharacter)" class="text-yellow-400 text-center m-5">{{occ.requirementsMessage(newCharacter)}}</p>
            <p v-if="occ.testRequirements(newCharacter)" class="text-green-400 text-center m-5">{{occ.requirementsMessage(newCharacter)}}</p>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-700">
              <tr>
                <th colspan="2" scope="col" class="px-6 py-3 text-center text-xs font-medium text-white tracking-wider">
                  {{occ.name}} Bonuses, Money, & Requirements
                </th>
              </tr>
              </thead>
              <tbody>
              <!-- Attribute Requirements -->
              <tr v-if="occ.reqIq || occ.reqMe || occ.reqMa || occ.reqPs || occ.reqPp|| occ.reqPe || occ.reqPb|| occ.reqSpd || occ.recommendedAttributes" class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Required
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- IQ -->
                  <span  v-if="occ.reqIq" class="inline-flex items-center px-1">IQ:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqIq}} or higher.
                    </span>
                  </span>
                  <!-- ME -->
                  <span  v-if="occ.reqMe" class="inline-flex items-center px-1">ME:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqMe}} or higher.
                    </span>
                  </span>
                  <!-- MA -->
                  <span  v-if="occ.reqMa" class="inline-flex items-center px-1">MA:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqMa}} or higher.
                    </span>
                  </span>
                  <!-- PS -->
                  <span  v-if="occ.reqPs" class="inline-flex items-center px-1">PS:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqPs}} or higher.
                    </span>
                  </span>
                  <!-- PP -->
                  <span  v-if="occ.reqPp" class="inline-flex items-center px-1">PP:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqPp}} or higher.
                    </span>
                  </span>
                  <!-- PE -->
                  <span  v-if="occ.reqPe" class="inline-flex items-center px-1">PE:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqPe}} or higher.
                    </span>
                  </span>
                  <!-- PB -->
                  <span  v-if="occ.reqPb" class="inline-flex items-center px-1">PB:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqPb}} or higher.
                    </span>
                  </span>
                  <!-- Spd -->
                  <span  v-if="occ.reqSpd" class="inline-flex items-center px-1">Spd:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.reqSpd}} or higher.
                    </span>
                  </span>
                  <!-- Recommended -->
                  <span  v-if="occ.recommendedAttributes" class="px-1 text-gray-500 italic"> Recommended:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      {{occ.recommendedAttributes}}
                    </span>
                  </span>
                </td>

              </tr>
              <!-- Attribute Rolls -->
              <tr v-if="occ.iqBonus.bonus || occ.meBonus.bonus || occ.maBonus.bonus || occ.psBonus.bonus || occ.ppBonus.bonus || occ.peBonus.bonus || occ.pbBonus.bonus || occ.spdBonus.bonus" class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Attributes
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- IQ -->
                  <span  v-if="occ.iqBonus.bonus" class="inline-flex items-center px-1">IQ:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.iqBonus.bonus}}
                    </span>
                  </span>
                  <!-- ME -->
                  <span  v-if="occ.meBonus.bonus" class="inline-flex items-center px-1">ME:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.meBonus.bonus}}
                    </span>
                  </span>
                  <!-- MA -->
                  <span  v-if="occ.maBonus.bonus" class="inline-flex items-center px-1">MA:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.maBonus.bonus}}
                    </span>
                  </span>
                  <!-- PS -->
                  <span  v-if="occ.psBonus.bonus" class="inline-flex items-center px-1">PS:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.psBonus.bonus}}
                    </span>
                  </span>
                  <!-- PP -->
                  <span  v-if="occ.ppBonus.bonus" class="inline-flex items-center px-1">PP:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.ppBonus.bonus}}
                    </span>
                  </span>
                  <!-- PE -->
                  <span  v-if="occ.peBonus.bonus" class="inline-flex items-center px-1">PE:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.peBonus.bonus}}
                    </span>
                  </span>
                  <!-- PB -->
                  <span  v-if="occ.pbBonus.bonus" class="inline-flex items-center px-1">PB:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.pbBonus.bonus}}
                    </span>
                  </span>
                  <!-- Spd -->
                  <span  v-if="occ.spdBonus.bonus" class="inline-flex items-center px-1">Spd:
                    <span class="pr-2 text-sm font-normal text-gray-500">
                      +{{occ.spdBonus.bonus}}
                    </span>
                  </span>
                </td>

              </tr>
              <!-- Secondary Stats -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Secondary
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- HP -->
                  <span v-if="occ.hp.amount" class="inline-flex items-center px-1">Hit Points:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.hp.amount}}D{{occ.hp.sides}}
                            <span v-if="occ.hp.multiplier">x</span>{{occ.hp.multiplier}}
                            <span v-if="occ.hp.bonus">+</span>{{occ.hp.bonus}}
                          </span>
                        </span>
                  <!-- SDC -->
                  <span v-if="occ.sdc.amount" class="inline-flex items-center px-1">SDC:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.sdc.amount}}D{{occ.sdc.sides}}
                            <span v-if="occ.sdc.multiplier">x</span>{{occ.sdc.multiplier}}
                            <span v-if="occ.sdc.bonus">+</span>{{occ.sdc.bonus}}
                          </span>
                        </span>
                  <!-- MDC -->
                  <span v-if="occ.mdc.amount" class="inline-flex items-center px-1">MDC:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.mdc.amount}}D{{occ.mdc.sides}}
                            <span v-if="occ.mdc.multiplier">x</span>{{occ.mdc.multiplier}}
                            <span v-if="occ.mdc.bonus">+</span>{{occ.mdc.bonus}}
                          </span>
                        </span>
                  <!-- PPE -->
                  <span v-if="occ.ppe.amount" class="inline-flex items-center px-1">PPE:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.ppe.amount}}D{{occ.ppe.sides}}
                            <span v-if="occ.ppe.multiplier">x</span>{{occ.ppe.multiplier}}
                            <span v-if="occ.ppe.bonus">+</span>{{occ.ppe.bonus}}
                          </span>
                        </span>
                  <!-- ISP -->
                  <span v-if="occ.isp.amount" class="inline-flex items-center px-1">ISP:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.isp.amount}}D{{occ.isp.sides}}
                            <span v-if="occ.isp.multiplier">x</span>{{occ.isp.multiplier}}
                            <span v-if="occ.isp.bonus">+</span>{{occ.isp.bonus}}
                          </span>
                        </span>
                  <!-- Horror -->
                  <span v-if="occ.horror.bonus" class="inline-flex items-center px-1">Horror:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.horror.bonus}}</span>
                        </span>

                </td>
              </tr>
              <!-- Saves -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Saves
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- Poison -->
                  <span v-if="occ.poisonBonus.bonus" class="inline-flex items-center px-1">vs Poison:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.poisonBonus.bonus > 0">+</span>{{occ.poisonBonus.bonus}}
                          </span>
                        </span>
                  <!-- Insanity -->
                  <span v-if="occ.insanityBonus.bonus" class="inline-flex items-center px-1">vs Insanity:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.insanityBonus.bonus > 0">+</span>{{occ.insanityBonus.bonus}}
                          </span>
                        </span>
                  <!-- Spell -->
                  <span v-if="occ.spellBonus.bonus" class="inline-flex items-center px-1">vs Spell:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.spellBonus.bonus > 0">+</span>{{occ.spellBonus.bonus}}
                          </span>
                        </span>
                  <!-- Pain -->
                  <span v-if="occ.painBonus.bonus" class="inline-flex items-center px-1">vs Pain:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.painBonus.bonus > 0">+</span>{{occ.painBonus.bonus}}
                          </span>
                        </span>
                  <!-- Disease -->
                  <span v-if="occ.diseaseBonus.bonus" class="inline-flex items-center px-1">vs Disease:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.diseaseBonus.bonus > 0">+</span>{{occ.diseaseBonus.bonus}}
                          </span>
                        </span>
                  <!-- Drugs -->
                  <span v-if="occ.drugsBonus.bonus" class="inline-flex items-center px-1">vs Drugs:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.drugsBonus.bonus > 0">+</span>{{occ.drugsBonus.bonus}}
                          </span>
                        </span>
                  <!-- Ritual -->
                  <span v-if="occ.ritualBonus.bonus" class="inline-flex items-center px-1">vs Ritual:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.ritualBonus.bonus > 0">+</span>{{occ.ritualBonus.bonus}}
                          </span>
                        </span>
                  <!-- Possession -->
                  <span v-if="occ.possessionBonus.bonus" class="inline-flex items-center px-1">vs Possession:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.possessionBonus.bonus > 0">+</span>{{occ.possessionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Psionic -->
                  <span v-if="occ.psionicBonus.bonus" class="inline-flex items-center px-1">vs Psionic:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.psionicBonus.bonus > 0">+</span>{{occ.psionicBonus.bonus}}
                          </span>
                        </span>
                  <!-- Magic -->
                  <span v-if="occ.magicBonus.bonus" class="inline-flex items-center px-1">vs Magic:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.magicBonus.bonus > 0">+</span>{{occ.magicBonus.bonus}}
                          </span>
                        </span>
                  <!-- Toxin -->
                  <span v-if="occ.toxinBonus.bonus" class="inline-flex items-center px-1">vs Toxin:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.toxinBonus.bonus > 0">+</span>{{occ.toxinBonus.bonus}}
                          </span>
                        </span>
                  <!-- Coma -->
                  <span v-if="occ.comaBonus.bonus" class="inline-flex items-center px-1">vs Coma:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.comaBonus.bonus > 0">+</span>{{occ.comaBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Death -->
                  <span v-if="occ.deathBonus.bonus" class="inline-flex items-center px-1">vs Death:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.deathBonus.bonus > 0">+</span>{{occ.deathBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Horror -->
                  <span v-if="occ.horrorBonus.bonus" class="inline-flex items-center px-1">vs Horror:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.horrorBonus.bonus > 0">+</span>{{occ.horrorBonus.bonus}}
                          </span>
                        </span>
                  <!-- Illusion -->
                  <span v-if="occ.illusionBonus.bonus" class="inline-flex items-center px-1">vs Illusion:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.illusionBonus.bonus > 0">+</span>{{occ.illusionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Mind Control -->
                  <span v-if="occ.mindControlBonus.bonus" class="inline-flex items-center px-1">vs Mind Control:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.mindControlBonus.bonus > 0">+</span>{{occ.mindControlBonus.bonus}}
                          </span>
                        </span>
                </td>
              </tr>
              <!-- Bonuses -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Bonuses
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- Perception -->
                  <span v-if="occ.perceptionBonus.bonus" class="inline-flex items-center px-1">Perception:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.perceptionBonus.bonus > 0">+</span>{{occ.perceptionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Initiative -->
                  <span v-if="occ.initiativeBonus.bonus" class="inline-flex items-center px-1">Initiative:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.initiativeBonus.bonus > 0">+</span>{{occ.initiativeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Strike -->
                  <span v-if="occ.strikeBonus.bonus" class="inline-flex items-center px-1">Strike:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.strikeBonus.bonus > 0">+</span>{{occ.strikeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Parry -->
                  <span v-if="occ.parryBonus.bonus" class="inline-flex items-center px-1">Parry:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.parryBonus.bonus > 0">+</span>{{occ.parryBonus.bonus}}
                          </span>
                        </span>
                  <!-- Dodge -->
                  <span v-if="occ.dodgeBonus.bonus" class="inline-flex items-center px-1">Dodge:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.dodgeBonus.bonus > 0">+</span>{{occ.dodgeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Roll -->
                  <span v-if="occ.rollBonus.bonus" class="inline-flex items-center px-1">Roll w' Punch/Fall:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.rollBonus.bonus > 0">+</span>{{occ.rollBonus.bonus}}
                          </span>
                        </span>
                  <!-- Pull Punch -->
                  <span v-if="occ.pullBonus.bonus" class="inline-flex items-center px-1">Pull Punch:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.pullBonus.bonus > 0">+</span>{{occ.pullBonus.bonus}}
                          </span>
                        </span>
                  <!-- Disarm -->
                  <span v-if="occ.disarmBonus.bonus" class="inline-flex items-center px-1">Disarm:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.disarmBonus.bonus > 0">+</span>{{occ.disarmBonus.bonus}}
                          </span>
                        </span>
                  <!-- Attacks -->
                  <span v-if="occ.attacksBonus.bonus" class="inline-flex items-center px-1">Attacks per Melee:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.attacksBonus.bonus > 0">+</span>{{occ.attacksBonus.bonus}}
                          </span>
                        </span>
                  <!-- Hand to Hand Damage -->
                  <span v-if="occ.handDamageBonus.bonus" class="inline-flex items-center px-1">Hand-to-Hand Damage:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.handDamageBonus.bonus > 0">+</span>{{occ.handDamageBonus.bonus}}
                          </span>
                        </span>
                  <!-- Knockout -->
                  <span v-if="occ.knockoutBonus.bonus" class="inline-flex items-center px-1">Knockout/Stun:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{occ.knockoutBonus.bonus}}
                          </span>
                        </span>
                  <!-- Death Blow -->
                  <span v-if="occ.deathBlowBonus.bonus" class="inline-flex items-center px-1">Death Blow:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{occ.deathBlowBonus.bonus}}
                          </span>
                        </span>
                  <!-- Critical -->
                  <span v-if="occ.criticalBonus.bonus" class="inline-flex items-center px-1">Critical:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{occ.criticalBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Death -->
                  <span v-if="occ.deathBonus.bonus" class="inline-flex items-center px-1">vs Death:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.deathBonus.bonus > 0">+</span>{{occ.deathBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Body Flip -->
                  <span v-if="occ.bodyFlipBonus.bonus" class="inline-flex items-center px-1">Body Flip/Throw:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.bodyFlipBonus.bonus > 0">+</span>{{occ.bodyFlipBonus.bonus}}
                          </span>
                        </span>
                  <!-- Entangle -->
                  <span v-if="occ.entangleBonus.bonus" class="inline-flex items-center px-1">Entangle:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.entangleBonus.bonus > 0">+</span>{{occ.entangleBonus.bonus}}
                          </span>
                        </span>
                </td>
              </tr>
              <!-- Other -->
              <tr v-if="occ.trustBonus.bonus || occ.intimidateBonus.bonus || occ.charmBonus.bonus || occ.impressBonus.bonus" class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Other
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- Trust -->
                  <span v-if="occ.trustBonus.bonus" class="inline-flex items-center px-1">Trust:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.trustBonus.bonus > 0">+</span>{{occ.trustBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Intimidate -->
                  <span v-if="occ.intimidateBonus.bonus" class="inline-flex items-center px-1">Intimidate:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.intimidateBonus.bonus > 0">+</span>{{occ.intimidateBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Charm -->
                  <span v-if="occ.charmBonus.bonus" class="inline-flex items-center px-1">Charm:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.charmBonus.bonus > 0">+</span>{{occ.charmBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Impress -->
                  <span v-if="occ.impressBonus.bonus" class="inline-flex items-center px-1">Impress:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="occ.impressBonus.bonus > 0">+</span>{{occ.impressBonus.bonus}}%
                          </span>
                        </span>
                </td>
              </tr>
              <!-- Money -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Money
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- Credits -->
                  <span v-if="occ.credits.amount" class="inline-flex items-center px-1">Credits:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.credits.amount}}D{{occ.credits.sides}}
                            <span v-if="occ.credits.multiplier">x</span>{{occ.credits.multiplier}}
                            <span v-if="occ.credits.bonus">+</span>{{occ.credits.bonus}}
                          </span>
                        </span>
                  <!-- Black Market Items -->
                  <span v-if="occ.blackMarketItems.amount" class="inline-flex items-center px-1">Black Market Items:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.blackMarketItems.amount}}D{{occ.blackMarketItems.sides}}
                            <span v-if="occ.blackMarketItems.multiplier">x</span>{{occ.blackMarketItems.multiplier}}
                            <span v-if="occ.blackMarketItems.bonus">+</span>{{occ.blackMarketItems.bonus}}
                          </span>
                        </span>
                  <!-- Gems -->
                  <span v-if="occ.gems.amount" class="inline-flex items-center px-1">Gems:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.gems.amount}}D{{occ.gems.sides}}
                            <span v-if="occ.gems.multiplier">x</span>{{occ.gems.multiplier}}
                            <span v-if="occ.gems.bonus">+</span>{{occ.gems.bonus}}
                          </span>
                        </span>
                  <!-- Gold -->
                  <span v-if="occ.gold.amount" class="inline-flex items-center px-1">Gold:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.gold.amount}}D{{occ.gold.sides}}
                            <span v-if="occ.gold.multiplier">x</span>{{occ.gold.multiplier}}
                            <span v-if="occ.gold.bonus">+</span>{{occ.gold.bonus}}
                          </span>
                        </span>
                  <!-- Tradable Items -->
                  <span v-if="occ.tradableItems.amount" class="inline-flex items-center px-1">Tradable Items:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{occ.tradableItems.amount}}D{{occ.tradableItems.sides}}
                            <span v-if="occ.tradableItems.multiplier">x</span>{{occ.tradableItems.multiplier}}
                            <span v-if="occ.tradableItems.bonus">+</span>{{occ.tradableItems.bonus}}
                          </span>
                        </span>
                </td>
              </tr>
              <!-- Alignment -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Alignment
                </td>
                <td v-if="occ.alignment" class="py-2 pr-2 text-sm text-gray-700">
                  {{occ.alignment}}
                </td>
                <td v-if="!occ.alignment" class="py-2 pr-2 text-sm text-gray-700">
                  Any
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- OCC Info -->
    <div v-if="occ" class="col-span1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
      <!-- Nav & Tabs -->
      <div class="sm:hidden m-3">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option v-if="aboutActive" value="about" >About {{occ.name}}s</option>
          <option v-if="statsActive" value="stats">{{occ.name}} Skills</option>
          <option v-if="abilitiesActive" value="abilities">Other Notes and Abilities</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 m-3 mb-0" aria-label="Tabs">
          <a v-if="aboutActive" v-on:click="toggle='about'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'about', 'bg-gray-100 text-gray-700': toggle === 'about'}" href="#" onclick="return false;">
            About {{occ.name}}s
          </a>
          <a v-if="statsActive" v-on:click="toggle='stats'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'stats', 'bg-gray-100 text-gray-700': toggle === 'stats'}" href="#" onclick="return false;">
            {{occ.name}} Skills
          </a>
          <a v-if="abilitiesActive" v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'abilities', 'bg-gray-100 text-gray-700': toggle === 'abilities'}" href="#" onclick="return false;">
            Other Notes and Abilities
          </a>
        </nav>
      </div>

      <!-- About Content -->
      <div v-show="toggle==='about' && aboutActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <p class="text-gray-50 font-medium" v-if="occ.group">OCC Group: <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{occ.group}}</span></p>
        <br/>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.description}}</p>
        <br v-if="occ.disposition"/>
        <p v-if="occ.disposition" class="text-gray-50 font-medium">Disposition</p>
        <p v-if="occ.disposition" class="whitespace-pre-wrap text-gray-100">{{occ.disposition}}</p>
        <br v-if="occ.habitat" />
        <p v-if="occ.habitat" class="text-gray-50 font-medium">Habitat</p>
        <p v-if="occ.habitat" class="whitespace-pre-wrap text-gray-100">{{occ.habitat}}</p>
        <br v-if="occ.allies" />
        <p v-if="occ.allies" class="text-gray-50 font-medium">Alliances and Allies</p>
        <p v-if="occ.allies" class="whitespace-pre-wrap text-gray-100">{{occ.allies}}</p>
        <br v-if="occ.rivals" />
        <p v-if="occ.rivals" class="text-gray-50 font-medium">Rivals and Enemies</p>
        <p v-if="occ.rivals" class="whitespace-pre-wrap text-gray-100">{{occ.rivals}}</p>
      </div>
      <!-- OCC Skills -->
      <div v-show="toggle==='stats' && statsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <!-- OCC Skills -->
        <p class="text-gray-50 font-medium">OCC Skills:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.occSkillsList}}</p>
        <br/>
        <p class="text-gray-50 font-medium">OCC Related Skills:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.occRelatedSkillsList}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Secondary Skills:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.secondarySkillsList}}</p>
        <br/>
      </div>
      <!-- Abilities, Skills, & Other Content -->
      <div v-show="toggle==='abilities' && abilitiesActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <p class="text-gray-50 font-medium">OCC Abilities:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.abilitiesDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Magic:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.magicDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Cybernetics and Bionics:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.cyberneticsDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Equipment:</p>
        <p class="whitespace-pre-wrap text-gray-100">{{occ.equipmentDesc}}</p>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
const OCCs = require('../../../lib/OCCs/PickOCC');

export default {
  name: "PickOCC",
  props: {
    newCharacter: Object,
  },
  data: function(){
    return {
      occs: new OCCs,
      occ: null,
      toggle: "about",
      statsActive: true,
      aboutActive: true,
      abilitiesActive: true,
      tabsActive: true,
    }
  },
  methods: {
    onChange(event) {
      const occName = event.target.selectedOptions[0].id
      this.occ = this.occs[occName]
    },
    selectOCC(){
      this.newCharacter.occ = this.occ;
      this.newCharacter.occ.rollBonuses(this.newCharacter);
      this.newCharacter.occ.rollSecondary(this.newCharacter);
      this.newCharacter.attributes.attributeBonusTest(this.newCharacter);

      // filler information
      this.newCharacter.info.randomAge();
      this.newCharacter.info.randomHeightDescr();
      this.newCharacter.info.randomWeightDescr();
      this.newCharacter.info.randomBirthOrder();
      this.newCharacter.info.randomDisposition();
      this.newCharacter.info.randomEnvironment();
      this.newCharacter.info.randomFamilyOrigin();
      this.newCharacter.info.randomCoalition();
      this.newCharacter.info.randomNonHumans();
      this.newCharacter.info.randomInitialReason();
      this.newCharacter.info.level = 1;
      this.newCharacter.info.name = 'TestApp';
      this.newCharacter.info.sex = 'Male';
      this.newCharacter.info.weight = '180 lbs';
      this.newCharacter.info.heightFt = 6;
      this.newCharacter.info.heightIn = 1;
      this.newCharacter.info.insanity = ['Death Wish', 'Paranoid'];
      // this.newCharacter.info.age = 28;
      this.newCharacter.info.alignment = "Unprincipled";
      this.newCharacter.info.bio = `Mercenary soldier who is an expert at power armor and operated the Norther Gun version of the Troll armor.
  His company was folded after Northern Gun pulled their support.`
      this.newCharacter.info.physicalDescription = `Siembieda is a tall, slender man with white hair. He is "singularly handsome" with a "bizarre quality" about his face. Siembieda has dark eyes with thick eyebrows, high cheekbones, a sharpcut nose, and a black mustache.`
    }
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>

