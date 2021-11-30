<template>
  <div class="pa-10">
  <v-card
  >
    <v-img
      :src=image_url
      height="200px"
    ></v-img>

    <v-card-title>
      {{city.title}}
    </v-card-title>

    <v-card-actions
    >
      <city-menu :city="city"/>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>

export default {
    props:['city'],
      data(){
      return {
        show: false,
        dialogs:{
          delete:false,
        },
        image_url:'https://picsum.photos/id/'+Math.floor(Math.random() * (100 - 1 + 1) + 1)+'/200'
      }
    },
    methods:{
        deleteTask(id){
        this.$store.dispatch('deleteTask',id)
      }
    },
    components:{
    'city-menu':require('@/components/City/CityMenu.vue').default
    }

}
</script>
<style lang="sass">
</style>