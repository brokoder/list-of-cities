<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.jpg"
      :height=" $route.path ==='/' ? '230':'170'"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-spacer></v-spacer>
          <search/>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{$store.state.appTitle}}</v-toolbar-title>
        </v-row>
        <v-row>
          <field-add-Cities/>
        </v-row>
      </v-container>


    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
  
  
</template>

<script>
  export default {
    data: () => ({
        drawer: 0,
        }),
    mounted(){
        this.$store.dispatch("getCities")

    },
    components:{
      'search':require('@/components/Tools/Search.vue').default,
      'snackbar':require('@/components/Shared/Snackbar.vue').default,
      'field-add-Cities': require('@/components/City/FieldAddCities.vue').default,
    }
  }
</script>

<style lang="sass">
  .header-container
    max-width: none !important
</style>