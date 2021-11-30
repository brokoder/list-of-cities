<template>
  <div class="home pt-0">
    <list-cities
    v-if="$store.state.cities.length"
    :city="cities"
    />
    <no-cities
    v-else
    />
  </div>
</template>

<script>

  export default {
    props:['cities'],
    name: 'Home',
    components:{
      'list-cities': require('@/components/City/ListCities.vue').default,
      'no-cities': require('@/components/City/NoCities.vue').default
    }
  }
</script>
