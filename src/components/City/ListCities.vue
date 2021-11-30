<template>
  <v-list
      class="pt-0"
      flat
    >
    <v-row>
    <v-col
        v-for="city in cities"
        :key="city.id"
        cols="4"
      >
      <city
      :city="city"
      />
    </v-col>
    </v-row>
    </v-list>
</template>

<script>
export default {
  computed: {
    cities: {
        get() {
          return this.$store.getters.cityFiltered
        },
        set(value) {
            this.$store.dispatch('setCities', value)
        }
      }
  },
  components:{
    'city':require('@/components/City/City.vue').default,
  }
}
</script>

<style>

</style>