<template>
  <div class="p-5 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">

    <!-- Race Selector -->
    <div class="col-span-1 md:pl-5 md:pb-0 mr-0 ">
      <div class="mt-0 relative">
        <select id="selectRace" v-on:change="onChange($event)" name="selectRace" class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 py-2 pr-10 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm">
          <option value="race-viewer" selected disabled> Select a race... </option>
          <option value="race-viewer" v-for="(races,index) in races" v-bind:key="index" :id="index" >{{races.name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <img class="mt-5 border-4 border-gray-700 rounded-lg" v-if="race" v-bind:src="require('../../'+ race.image)" v-bind:alt="'Illustration of a ' + race.name">
      <!-- Select Race Button -->
      <div v-if="race" class="flex flex-col">
      <button v-if="race" v-on:click="selectRace" class="mx-auto mt-5 bg-green-700 font-medium rounded hover:bg-green-500 hover:text-gray-900 text-xs px-5 py-3 text-white">Select {{race.name}}</button>
      </div>
    </div>

    <!-- Stats -->
    <div v-if="race" class="flex flex-col">
      <div class="sm:-mx-6 lg:-mx-8 my-auto">
        <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <p v-if="race.rcc" class="text-yellow-400 text-center m-5">A {{race.name}} does not get to choose an O.C.C. and must instead rely on R.C.C. skills and natural abilities.</p>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-700">
              <tr>
                <th colspan="2" scope="col" class="px-6 py-3 text-center text-xs font-medium text-white tracking-wider">
                  {{race.name}} Rolls, Saves, and Bonuses
                </th>
              </tr>
              </thead>
              <tbody>
              <!-- Attribute Rolls -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Attributes
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- IQ -->
                  <span class="inline-flex items-center px-1">IQ:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.iqRoll.amount}}D{{race.iqRoll.sides}}
                            <span v-if="race.iqRoll.multiplier">x{{race.iqRoll.multiplier}}</span>
                            <span v-if="race.iqRoll.bonus">+{{race.iqRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- ME -->
                  <span class="inline-flex items-center px-1">ME:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.meRoll.amount}}D{{race.meRoll.sides}}
                            <span v-if="race.meRoll.multiplier">x{{race.meRoll.multiplier}}</span>
                            <span v-if="race.meRoll.bonus">+{{race.meRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- MA -->
                  <span class="inline-flex items-center px-1">MA:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.maRoll.amount}}D{{race.maRoll.sides}}
                            <span v-if="race.maRoll.multiplier">x{{race.maRoll.multiplier}}</span>
                            <span v-if="race.maRoll.bonus">+{{race.maRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- PS -->
                  <span class="inline-flex items-center px-1">PS:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.psRoll.amount}}D{{race.psRoll.sides}}
                            <span v-if="race.psRoll.multiplier">x{{race.psRoll.multiplier}}</span>
                            <span v-if="race.psRoll.bonus">+{{race.psRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- PP -->
                  <span class="inline-flex items-center px-1">PP:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.ppRoll.amount}}D{{race.ppRoll.sides}}
                            <span v-if="race.ppRoll.multiplier">x{{race.ppRoll.multiplier}}</span>
                            <span v-if="race.ppRoll.bonus">+{{race.ppRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- PE -->
                  <span class="inline-flex items-center px-1">PE:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.peRoll.amount}}D{{race.peRoll.sides}}
                            <span v-if="race.peRoll.multiplier">x{{race.peRoll.multiplier}}</span>
                            <span v-if="race.peRoll.bonus">+{{race.peRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- PB -->
                  <span class="inline-flex items-center px-1">PB:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.pbRoll.amount}}D{{race.pbRoll.sides}}
                            <span v-if="race.pbRoll.multiplier">x{{race.pbRoll.multiplier}}</span>
                            <span v-if="race.pbRoll.bonus">+{{race.pbRoll.bonus}}</span>
                          </span>
                        </span>
                  <!-- Spd -->
                  <span class="inline-flex items-center px-1">Spd:
                          <span class="pl-1 pr-2 text-sm font-normal text-gray-500">{{race.spdRoll.amount}}D{{race.spdRoll.sides}}
                            <span v-if="race.spdRoll.multiplier">x{{race.spdRoll.multiplier}}</span>
                            <span v-if="race.spdRoll.bonus">+{{race.spdRoll.bonus}}</span>
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
                  <span  v-if="race.hp.amount || race.hp.bonus || race.hpText !== ''" class="inline-flex items-center px-1">HP:
                    <span class="pl-1 pr-2 text-sm font-normal text-gray-500">
                      <span v-if="race.hpText !== ''">{{race.hpText}}</span>
                      <span v-if="race.hp.amount && race.hpText === ''">{{race.hp.amount}}D{{race.hp.sides}}</span>
                      <span v-if="race.hp.multiplier && race.hpText === ''">x{{race.hp.multiplier}}</span>
                      <span v-if="race.hp.bonus && race.hpText === ''">+{{race.hp.bonus}}</span>
                    </span>
                  </span>
                  <!-- SDC -->
                  <span  v-if="race.sdc.amount || race.sdc.bonus || race.sdcText !== ''" class="inline-flex items-center px-1">SDC:
                    <span class="pl-1 pr-2 text-sm font-normal text-gray-500">
                      <span v-if="race.sdcText !== ''">{{race.sdcText}}</span>
                      <span v-if="race.sdc.amount && race.sdcText === ''">{{race.sdc.amount}}D{{race.sdc.sides}}</span>
                      <span v-if="race.sdc.multiplier && race.sdcText === ''">x{{race.sdc.multiplier}}</span>
                      <span v-if="race.sdc.bonus && race.sdcText === ''">+{{race.sdc.bonus}}</span>
                    </span>
                  </span>
                  <!-- MDC -->
                  <span  v-if="race.mdc.amount || race.mdc.bonus || race.mdcText !== ''" class="inline-flex items-center px-1">MDC:
                    <span class="pl-1 pr-2 text-sm font-normal text-gray-500">
                      <span v-if="race.mdcText !== ''">{{race.mdcText}}</span>
                      <span v-if="race.mdc.amount && race.mdcText === ''">{{race.mdc.amount}}D{{race.mdc.sides}}</span>
                      <span v-if="race.mdc.multiplier && race.mdcText === ''">x{{race.mdc.multiplier}}</span>
                      <span v-if="race.mdc.bonus && race.mdcText === ''">+{{race.mdc.bonus}}</span>
                    </span>
                  </span>
                  <!-- PPE -->
                  <span  v-if="race.ppe.amount || race.ppe.bonus || race.ppeText" class="inline-flex items-center px-1">PPE:
                    <span class="pl-1 pr-2 text-sm font-normal text-gray-500">
                      <span v-if="race.ppeText !== ''">{{race.ppeText}}</span>
                      <span v-if="race.ppe.amount && race.ppeText === ''">{{race.ppe.amount}}D{{race.ppe.sides}}</span>
                      <span v-if="race.ppe.multiplier && race.ppeText === ''">x{{race.ppe.multiplier}}</span>
                      <span v-if="race.ppe.bonus && race.ppeText === ''">+{{race.ppe.bonus}}</span>
                    </span>
                  </span>
                  <!-- ISP -->
                  <span  v-if="race.isp.amount || race.isp.bonus || race.ispText !== ''" class="inline-flex items-center px-1">ISP:
                    <span class="pl-1 pr-2 text-sm font-normal text-gray-500">
                      <span v-if="race.ispText !== ''">{{race.ispText}}</span>
                      <span v-if="race.isp.amount && race.ispText === ''">{{race.isp.amount}}D{{race.isp.sides}}</span>
                      <span v-if="race.isp.multiplier && race.ispText === ''">x{{race.isp.multiplier}}</span>
                      <span v-if="race.isp.bonus && race.ispText === ''">+{{race.isp.bonus}}</span>
                    </span>
                  </span>
                  <!-- Horror -->
                  <span v-if="race.horror.bonus" class="inline-flex items-center px-1">Horror:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.horror.bonus}}</span>
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
                  <span v-if="race.poisonBonus.bonus" class="inline-flex items-center px-1">vs Poison:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.poisonBonus.bonus > 0">+</span>{{race.poisonBonus.bonus}}
                          </span>
                        </span>
                  <!-- Insanity -->
                  <span v-if="race.insanityBonus.bonus" class="inline-flex items-center px-1">vs Insanity:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.insanityBonus.bonus > 0">+</span>{{race.insanityBonus.bonus}}
                          </span>
                        </span>
                  <!-- Spell -->
                  <span v-if="race.spellBonus.bonus" class="inline-flex items-center px-1">vs Spell:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.spellBonus.bonus > 0">+</span>{{race.spellBonus.bonus}}
                          </span>
                        </span>
                  <!-- Pain -->
                  <span v-if="race.painBonus.bonus" class="inline-flex items-center px-1">vs Pain:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.painBonus.bonus > 0">+</span>{{race.painBonus.bonus}}
                          </span>
                        </span>
                  <!-- Disease -->
                  <span v-if="race.diseaseBonus.bonus" class="inline-flex items-center px-1">vs Disease:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.diseaseBonus.bonus > 0">+</span>{{race.diseaseBonus.bonus}}
                          </span>
                        </span>
                  <!-- Drugs -->
                  <span v-if="race.drugsBonus.bonus" class="inline-flex items-center px-1">vs Drugs:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.drugsBonus.bonus > 0">+</span>{{race.drugsBonus.bonus}}
                          </span>
                        </span>
                  <!-- Ritual -->
                  <span v-if="race.ritualBonus.bonus" class="inline-flex items-center px-1">vs Ritual:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.ritualBonus.bonus > 0">+</span>{{race.ritualBonus.bonus}}
                          </span>
                        </span>
                  <!-- Possession -->
                  <span v-if="race.possessionBonus.bonus" class="inline-flex items-center px-1">vs Possession:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.possessionBonus.bonus > 0">+</span>{{race.possessionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Psionic -->
                  <span v-if="race.psionicBonus.bonus" class="inline-flex items-center px-1">vs Psionic:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.psionicBonus.bonus > 0">+</span>{{race.psionicBonus.bonus}}
                          </span>
                        </span>
                  <!-- Magic -->
                  <span v-if="race.magicBonus.bonus" class="inline-flex items-center px-1">vs Magic:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.magicBonus.bonus > 0">+</span>{{race.magicBonus.bonus}}
                          </span>
                        </span>
                  <!-- Toxin -->
                  <span v-if="race.toxinBonus.bonus" class="inline-flex items-center px-1">vs Toxin:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.toxinBonus.bonus > 0">+</span>{{race.toxinBonus.bonus}}
                          </span>
                        </span>
                  <!-- Coma -->
                  <span v-if="race.comaBonus.bonus" class="inline-flex items-center px-1">vs Coma:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.comaBonus.bonus > 0">+</span>{{race.comaBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Death -->
                  <span v-if="race.deathBonus.bonus" class="inline-flex items-center px-1">vs Death:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.deathBonus.bonus > 0">+</span>{{race.deathBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Horror -->
                  <span v-if="race.horrorBonus.bonus" class="inline-flex items-center px-1">vs Horror:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.horrorBonus.bonus > 0">+</span>{{race.horrorBonus.bonus}}
                          </span>
                        </span>
                  <!-- Illusion -->
                  <span v-if="race.illusionBonus.bonus" class="inline-flex items-center px-1">vs Illusion:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.illusionBonus.bonus > 0">+</span>{{race.illusionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Mind Control -->
                  <span v-if="race.mindControlBonus.bonus" class="inline-flex items-center px-1">vs Mind Control:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.mindControlBonus.bonus > 0">+</span>{{race.mindControlBonus.bonus}}
                          </span>
                        </span>
                  <!-- Fatigue -->
                  <span v-if="race.fatigueBonus.bonus" class="inline-flex items-center px-1">vs Fatigue:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.fatigueBonus.bonus > 0">+</span>{{race.fatigueBonus.bonus}}
                          </span>
                        </span>
                  <!-- Curse -->
                  <span v-if="race.curseBonus.bonus" class="inline-flex items-center px-1">vs Curses:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.curseBonus.bonus > 0">+</span>{{race.curseBonus.bonus}}
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
                  <span v-if="race.perceptionBonus.bonus" class="inline-flex items-center px-1">Perception:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.perceptionBonus.bonus > 0">+</span>{{race.perceptionBonus.bonus}}
                          </span>
                        </span>
                  <!-- Initiative -->
                  <span v-if="race.initiativeBonus.bonus" class="inline-flex items-center px-1">Initiative:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.initiativeBonus.bonus > 0">+</span>{{race.initiativeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Strike -->
                  <span v-if="race.strikeBonus.bonus" class="inline-flex items-center px-1">Strike:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.strikeBonus.bonus > 0">+</span>{{race.strikeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Parry -->
                  <span v-if="race.parryBonus.bonus" class="inline-flex items-center px-1">Parry:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.parryBonus.bonus > 0">+</span>{{race.parryBonus.bonus}}
                          </span>
                        </span>
                  <!-- Dodge -->
                  <span v-if="race.dodgeBonus.bonus" class="inline-flex items-center px-1">Dodge:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.dodgeBonus.bonus > 0">+</span>{{race.dodgeBonus.bonus}}
                          </span>
                        </span>
                  <!-- Roll -->
                  <span v-if="race.rollBonus.bonus" class="inline-flex items-center px-1">Roll w' Punch/Fall:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.rollBonus.bonus > 0">+</span>{{race.rollBonus.bonus}}
                          </span>
                        </span>
                  <!-- Pull Punch -->
                  <span v-if="race.pullBonus.bonus" class="inline-flex items-center px-1">Pull Punch:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.pullBonus.bonus > 0">+</span>{{race.pullBonus.bonus}}
                          </span>
                        </span>
                  <!-- Disarm -->
                  <span v-if="race.disarmBonus.bonus" class="inline-flex items-center px-1">Disarm:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.disarmBonus.bonus > 0">+</span>{{race.disarmBonus.bonus}}
                          </span>
                        </span>
                  <!-- Attacks -->
                  <span v-if="race.attacksBonus.bonus" class="inline-flex items-center px-1">Attacks per Melee:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.attacksBonus.bonus > 0">+</span>{{race.attacksBonus.bonus}}
                          </span>
                        </span>
                  <!-- Hand to Hand Damage -->
                  <span v-if="race.handDamageBonus.bonus" class="inline-flex items-center px-1">Hand-to-Hand Damage:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.handDamageBonus.bonus > 0">+</span>{{race.handDamageBonus.bonus}}
                          </span>
                        </span>
                  <!-- Knockout -->
                  <span v-if="race.knockoutBonus.bonus" class="inline-flex items-center px-1">Knockout/Stun:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{race.knockoutBonus.bonus}}
                          </span>
                        </span>
                  <!-- Death Blow -->
                  <span v-if="race.deathBlowBonus.bonus" class="inline-flex items-center px-1">Death Blow:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{race.deathBlowBonus.bonus}}
                          </span>
                        </span>
                  <!-- Critical -->
                  <span v-if="race.criticalBonus.bonus" class="inline-flex items-center px-1">Critical:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{race.criticalBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Body Flip -->
                  <span v-if="race.bodyFlipBonus.bonus" class="inline-flex items-center px-1">Body Flip/Throw:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.bodyFlipBonus.bonus > 0">+</span>{{race.bodyFlipBonus.bonus}}
                          </span>
                        </span>
                  <!-- Entangle -->
                  <span v-if="race.entangleBonus.bonus" class="inline-flex items-center px-1">Entangle:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.entangleBonus.bonus > 0">+</span>{{race.entangleBonus.bonus}}
                          </span>
                        </span>
                  <!-- Automatic Dodge -->
                  <span v-if="race.autoDodgeBonus.bonus" class="inline-flex items-center px-1">Automatic Dodge:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.autoDodgeBonus.bonus > 0">+</span>{{race.autoDodgeBonus.bonus}}
                          </span>
                        </span>
                </td>
              </tr>
              <!-- Other -->
              <tr class="bg-white border-t text-left border-gray-200">
                <td class="p-4 text-sm text-right font-medium text-gray-900">
                  Other
                </td>
                <td class="py-2 text-sm font-medium text-gray-900">
                  <!-- Other Bonus Text -->
                  <span v-if="race.otherBonusText" class="inline-flex items-center px-1">
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            {{race.otherBonusText}}
                          </span>
                        </span>
                  <!-- Trust -->
                  <span v-if="race.trustBonus.bonus" class="inline-flex items-center px-1">Trust:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.trustBonus.bonus > 0">+</span>{{race.trustBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Intimidate -->
                  <span v-if="race.intimidateBonus.bonus" class="inline-flex items-center px-1">Intimidate:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.intimidateBonus.bonus > 0">+</span>{{race.intimidateBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Charm -->
                  <span v-if="race.charmBonus.bonus" class="inline-flex items-center px-1">Charm:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.charmBonus.bonus > 0">+</span>{{race.charmBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Impress -->
                  <span v-if="race.impressBonus.bonus" class="inline-flex items-center px-1">Impress:
                          <span class="pr-2 text-sm font-normal text-gray-500">
                            <span v-if="race.impressBonus.bonus > 0">+</span>{{race.impressBonus.bonus}}%
                          </span>
                        </span>
                  <!-- Credits -->
                  <span v-if="race.credits.amount" class="inline-flex items-center px-1">Credits:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.credits.amount}}D{{race.credits.sides}}
                            <span v-if="race.credits.multiplier">x</span>{{race.credits.multiplier}}
                            <span v-if="race.credits.bonus">+</span>{{race.credits.bonus}}
                          </span>
                        </span>
                  <!-- Black Market Items -->
                  <span v-if="race.blackMarketItems.amount" class="inline-flex items-center px-1">Black Market Items:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.blackMarketItems.amount}}D{{race.blackMarketItems.sides}}
                            <span v-if="race.blackMarketItems.multiplier">x</span>{{race.blackMarketItems.multiplier}}
                            <span v-if="race.blackMarketItems.bonus">+</span>{{race.blackMarketItems.bonus}}
                          </span>
                        </span>
                  <!-- Gems -->
                  <span v-if="race.gems.amount" class="inline-flex items-center px-1">Gems:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.gems.amount}}D{{race.gems.sides}}
                            <span v-if="race.gems.multiplier">x</span>{{race.gems.multiplier}}
                            <span v-if="race.gems.bonus">+</span>{{race.gems.bonus}}
                          </span>
                        </span>
                  <!-- Gold -->
                  <span v-if="race.gold.amount" class="inline-flex items-center px-1">Gold:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.gold.amount}}D{{race.gold.sides}}
                            <span v-if="race.gold.multiplier">x</span>{{race.gold.multiplier}}
                            <span v-if="race.gold.bonus">+</span>{{race.gold.bonus}}
                          </span>
                        </span>
                  <!-- Tradable Items -->
                  <span v-if="race.tradableItems.amount" class="inline-flex items-center px-1">Tradable Items:
                          <span class="pr-2 text-sm font-normal text-gray-500">{{race.tradableItems.amount}}D{{race.tradableItems.sides}}
                            <span v-if="race.tradableItems.multiplier">x</span>{{race.tradableItems.multiplier}}
                            <span v-if="race.tradableItems.bonus">+</span>{{race.tradableItems.bonus}}
                          </span>
                        </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Race Info -->
    <div v-if="race" class="col-span1 md:col-span-2 lg:col-span-1 xl:col-span-2 border border-gray-700 rounded-lg hover:border-indigo-300">
      <!-- Nav & Tabs -->
      <div class="sm:hidden m-3">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" v-model="toggle" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          <option v-if="aboutActive" value="about" >About {{race.name}}<span v-if="race.name !== `D'norr Devilmen`">s</span></option>
          <option v-if="statsActive && !race.rcc " value="stats">Available {{race.name}} OCCs</option>
          <option v-if="statsActive && race.rcc " value="stats">{{race.name}} RCC</option>
          <option v-if="abilitiesActive" value="abilities">Other Notes, Abilities, and Skills</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 m-3 mb-0" aria-label="Tabs">
          <a v-if="aboutActive" v-on:click="toggle='about'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'about', 'bg-gray-100 text-gray-700': toggle === 'about'}" href="#" onclick="return false;">
            About {{race.name}}<span v-if="race.name !== `D'norr Devilmen`">s</span>
          </a>
          <a v-if="statsActive && !race.rcc" v-on:click="toggle='stats'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'stats', 'bg-gray-100 text-gray-700': toggle === 'stats'}" href="#" onclick="return false;">
            Available {{race.name}} OCCs
          </a>
          <a v-if="statsActive && race.rcc" v-on:click="toggle='stats'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'stats', 'bg-gray-100 text-gray-700': toggle === 'stats'}" href="#" onclick="return false;">
            {{race.name}} RCC
          </a>
          <a v-if="abilitiesActive" v-on:click="toggle='abilities'" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-xs rounded-md"
             v-bind:class="{ 'text-gray-500 hover:text-gray-700': toggle !== 'abilities', 'bg-gray-100 text-gray-700': toggle === 'abilities'}" href="#" onclick="return false;">
            Other Notes, Abilities, and Skills
          </a>
        </nav>
      </div>

      <!-- About Content -->
      <div v-show="toggle==='about' && aboutActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <p class="text-gray-50 font-medium" v-if="race.pronunciation">Pronunciation: <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{race.pronunciation}}</span></p>
        <p class="text-gray-50 font-medium" v-if="race.alias">Also known as <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{race.alias}}</span></p>
        <p class="text-gray-50 font-medium">Alignment: <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{race.alignment}}</span></p>
        <p class="text-gray-50 font-medium">Average Size: <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{race.heightMin}}-{{race.heightMax}} {{race.sizeDesc}}</span></p>
        <p class="text-gray-50 font-medium">Average Weight: <span class="whitespace-pre-wrap font-normal text-gray-100">
          {{race.weightMin}}-{{race.weightMax}} {{race.weightDesc}}</span></p>
        <p class="text-gray-50 font-medium">Average Lifespan: <span class="whitespace-pre-wrap font-normal text-gray-100">
          <span v-if="race.lifespan.amount">{{race.lifespan.amount}}D{{race.lifespan.sides}}</span><span v-if="race.lifespan.bonus">+{{race.lifespan.bonus}}</span> {{race.lifespanDesc}}</span></p>
        <br/>
        <p class="whitespace-pre-wrap text-gray-100">{{race.description}}</p>
        <br v-if="race.disposition"/>
        <p v-if="race.disposition" class="text-gray-50 font-medium">Disposition</p>
        <p v-if="race.disposition" class="whitespace-pre-wrap text-gray-100">{{race.disposition}}</p>
        <br v-if="race.habitat" />
        <p v-if="race.habitat" class="text-gray-50 font-medium">Habitat</p>
        <p v-if="race.habitat" class="whitespace-pre-wrap text-gray-100">{{race.habitat}}</p>
        <br v-if="race.allies" />
        <p v-if="race.allies" class="text-gray-50 font-medium">Alliances and Allies</p>
        <p v-if="race.allies" class="whitespace-pre-wrap text-gray-100">{{race.allies}}</p>
        <br v-if="race.rivals" />
        <p v-if="race.rivals" class="text-gray-50 font-medium">Rivals and Enemies</p>
        <p v-if="race.rivals" class="whitespace-pre-wrap text-gray-100">{{race.rivals}}</p>
      </div>
      <!-- OCC Content -->
      <div v-show="toggle==='stats' && statsActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <!-- Available OCCs -->
        <p class="whitespace-pre-wrap text-gray-50">{{race.availableOCCs}}</p>
        <br/>
        <span v-if="race.vulnerabilities !== ''" >
          <p class="text-gray-50 font-medium">Vulnerabilities</p>
          <p class="whitespace-pre-wrap text-gray-100">{{race.vulnerabilities}}</p>
          <br/>
        </span>
      </div>
      <!-- Abilities, Skills, & Other Content -->
      <div v-show="toggle==='abilities' && abilitiesActive" class="mx-2 max-h-96 overflow-y-auto p-5 bg-gray-900 overflow-hidden rounded-md">
        <p class="text-gray-50 font-medium">Natural Abilities</p>
        <p class="whitespace-pre-wrap text-gray-100">{{race.abilitiesDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">RCC Skills</p>
        <p class="whitespace-pre-wrap text-gray-100">{{race.skillsDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Psionics</p>
        <p class="whitespace-pre-wrap text-gray-100">{{race.psionicsDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Magic</p>
        <p class="whitespace-pre-wrap text-gray-100">{{race.magicDesc}}</p>
        <br/>
        <p class="text-gray-50 font-medium">Cybernetics and Bionics</p>
        <p class="whitespace-pre-wrap text-gray-100">{{race.cyberneticsDesc}}</p>
      </div>
      </div>
  </div>
</template>

<script>
const Races = require('../../../lib/Races/PickRace');

export default {
  name: "PickRace",
  props: {
    newCharacter: Object,
  },
  data: function(){
    return {
      races: new Races,
      race: null,
      toggle: "about",
      statsActive: true,
      aboutActive: true,
      abilitiesActive: true,
      tabsActive: true,
    }
  },
  methods: {
    onChange(event) {
      const raceName = event.target.selectedOptions[0].id
      this.race = this.races[raceName]
    },
    selectRace(){
      this.newCharacter.race = this.race;
      this.newCharacter.attributes.rollAttributes(this.newCharacter.race);
      this.newCharacter.race.rollBonuses(this.newCharacter);
      this.newCharacter.race.getSecondary(this.newCharacter);
      this.newCharacter.race.rollSecondary(this.newCharacter);
      this.newCharacter.race.randomPsionics(this.newCharacter);
    }
  }
}
</script>

<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
}
</style>