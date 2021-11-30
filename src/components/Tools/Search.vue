<template>
  <v-text-field
    :value="$store.state.search"
    @focus="searchClosed = false"
    @input="$store.commit('setSearch',$event)"
    @blur="searchClosed = true"
    class="expanding-search mt-1"
    :class="{'closed' : searchClosed && !$store.state.search}"
    placeholder="Search"
    :disabled="$store.state.sorting"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
    >
</v-text-field>
</template>

<script>
export default {
    data(){
        return {
            search:null,
            searchClosed:true
        }
    }
}
</script>

<style lang="sass">
    .expanding-search
        transition: max-width 0.3s
        .v-input__slot
            cursor: pointer !important
            &:before, &:after
                border-color: transparent !important,
                background-color: transparent !important
        &.closed
            max-width: 45px
            .v-input__slot
                background: transparent !important
</style>