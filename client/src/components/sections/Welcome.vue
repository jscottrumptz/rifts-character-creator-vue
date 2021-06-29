<template>
  <div class="bg-gray-900">
    <div class="max-w-7xl mx-auto pt-5 pb-16 px-5 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 class="text-base font-semibold text-indigo-500 uppercase tracking-wide">One game system. Countless Worlds.</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-100">Immerse yourself in possibilities, <span class="italic text-indigo-500">not math.</span></p>
        <p class="mt-4 text-lg text-gray-500">
          There has never been a tabletop role-playing game more liberating to the imagination.
          The system and setting of Rifts® offers truly infinite possibilities.
          However, this robust and detailed game can become daunting, especially during character creation.
          <br/> <br/>
          <span class="italic text-gray-100">
            But what if it wasn't...
          </span>
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 text-green-500" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <p class="ml-9 text-lg leading-6 font-medium text-gray-100">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>

const features = [
  {
    name: 'Effortless character creation',
    description: 'Lose yourself in the act of character creation, and let us do all the heavy lifting.',
  },
  {
    name: 'Limit the unlimited options',
    description: `Only see the skills, psionics, magic, etc. that are available to your character's race or O.C.C..` },
  {
    name: 'Make informed decisions',
    description: 'All the information about races, O.C.C.s, skills, psionics, etc. is right at your fingertips.'
  },
  {
    name: 'Put away the scratchpad and calculator',
    description: 'We track all the attribute, skill, and combat bonuses given by race, O.C.C., or skills for you.',
  },
  {
    name: 'Constantly evolving',
    description: 'We are constantly adding new races and O.C.C.s from the vast (over 40 books!) Rifts library.'
  },
  {
    name: 'Rule clarifications',
    description: `This application's methods have been reviewed and blessed by Keven Siembieda himself!`
  },
  {
    name: 'Printable and online character sheets',
    description: 'View online or download printable PDFs with as much or as little character info as you like.'
  },
  {
    name: 'Mobile friendly',
    description: 'Looks and performs great on any device, at any resolution.'
  },
]

export default {
  name: 'Welcome',
  data: function(){
    return {
      features,
    }
  },
}
</script>

<style scoped>

</style>