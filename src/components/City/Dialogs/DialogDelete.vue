<template>
    <v-dialog
        :value="true"
        persistent
        max-width="290"
        >
        <v-card>
            <v-card-title class="text-h5">
            Delete City?
            </v-card-title>
            <v-card-text>Are you sure you wanna delete '{{city.title}}'?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text
                @click="$emit('close')"
            >
                No
            </v-btn>
            <v-btn
                @click="deleteCity(city.id)"
                color="red darken-1"
                text
            >
                Yes
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
</template>

<script>
export default {
    props:['city'],
    methods:{
        deleteCity(id){
            this.$store.dispatch('deleteCity',id)
            this.$emit('close')
        }
    }

}
</script>

<style>

</style>