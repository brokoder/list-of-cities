<template>
    <v-dialog
        :value="true"
        persistent
        max-width="290"
        >
        <v-card>
            <v-card-title class="text-h5">
            Edit City?
            </v-card-title>
            <v-card-text>
                Edit title:
                <v-text-field
                v-model="cityTitle"
                @keyup.enter="saveCity"
                autofocus
                />
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text
                @click="$emit('close')"
            >
                Cancel
            </v-btn>
            <v-btn
                @click="saveCity"
                color="red darken-1"
                text
                :disabled="cityTitleInvalid"
            >
                Save
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
</template>

<script>
export default {
    props:['city'],
    data(){
        return {
            cityTitle:null
        }
    },
    computed:{
        cityTitleInvalid(){
            return !this.cityTitle || this.cityTitle === this.city.title
        }
    },
    mounted(){
        this.cityTitle= this.city.title
    },
    methods:{
        saveCity(){
            if(!this.cityTitleInvalid){
                let payload = {
                    id:  this.city.id,
                    title:this.cityTitle
                }
                this.$store.dispatch('updateCityTitle',payload)
                this.$emit('close')
            }
        }
    }

}
</script>

<style>

</style>