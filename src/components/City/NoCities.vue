<template>
  <div
    class="no-cities"
    >
    <v-icon
      size="100"
      color="primary"
    >
      mdi-check
    </v-icon>

    <div 
    class="primary--text text-h5">
    No Cities
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  .no-cities
    position: absolute
    left:50%
    top:50%
    transform: translate(-50%,-50%)
    opacity: .5
</style>