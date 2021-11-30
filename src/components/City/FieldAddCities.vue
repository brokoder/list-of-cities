<template>
    <v-text-field
        v-model="newTaskTitle"
        @keyup.enter="addCity"
        class="field-add-city pa-3"
        outlined
        placeholder="Add City"
        hide-details
        clearable
    >
        <template v-slot:append>
            <v-icon
            @click="addCity"
            :disabled="newCityTitleInvalid"
            >
                mdi-plus
            </v-icon>
        </template>


    </v-text-field>
</template>

<script>
export default {
    data (){
        return {
            newTaskTitle:''
        }
    },
    computed:{
        newCityTitleInvalid(){
            return !this.newTaskTitle
        }
    },
    methods:{
        addCity(){
            if(!this.newCityTitleInvalid){
                this.$store.dispatch('addCity', this.newTaskTitle)
                this.newTaskTitle=""
            }
        }
    }
}
</script>

<style lang="sass">
    .field-add-city.v-input--is-focused
        .v-input__slot
            background : rgba(18,78,113,.52)
</style>