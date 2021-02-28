<template>
  <div>
    <h2 class="text-2xl font-bold leading-7 text-center text-white sm:text-3xl sm:truncate p-6">
      Character Viewer
    </h2>
    <p class="text-white text-center">{{character[0].characterData.info.name}}</p>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: 'CharacterViewer',
  props: {
    character: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
