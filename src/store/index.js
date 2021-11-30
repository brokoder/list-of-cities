import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: 'List of Cities',
    search:null,
    cities:[],
    snackbar:{
      show:false,
      text:''
    },
    sorting:false,
  },
  mutations: {
    setSearch(state,value){
      state.search = value
    },
    addCity(state,newCity){
      state.cities.push(newCity)
    },
    deleteCity(state,id){
      state.cities = state.cities.filter(city => city.id !== id)
      for(var i=0;i<state.cities.length;i++){
        state.cities[i].id = (i+1)
      }
    },
    updateCityTitle(state,payload){
      let city = state.cities.filter(city => city.id ===payload.id)[0]
      city.title = payload.title
    },
    setCities(state,cities){
      state.cities = cities
      for(var i=0;i<state.cities.length;i++){
        state.cities[i].id = (i+1)
      }
    },
    showSnackbar(state,text){
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show=false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show=true
        state.snackbar.text=text
      }, timeout);
    },
    hideSnapbar(state){
      state.snackbar.show=false
    },
    toggleSorting(state){
      state.sorting = !state.sorting
    }
  },

  actions: {
    addCity({commit,state},newCityTitle){
      let newCity = {
        id:state.cities.length+1,
        title:newCityTitle,
        done:false,
        dueDate:null
      }
      db.collection('cities').add(newCity).then(() => {
        commit('addCity',newCity)
        commit('showSnackbar','City added!')
      })
    },
    deleteCity({state, commit},id){
      db.collection('cities').doc({ id: id }).delete().then(() =>{
        for(var index=(id+1);index<state.cities.length+1;index++){
          db.collection('cities').doc({ id:index }).update({
            id: index-1
          })
        }
        commit('deleteCity',id)
        commit('showSnackbar','City deleted!')
      })
    },
    updateCityTitle({ commit},payload){
      db.collection('cities').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() =>{
        commit('updateCityTitle',payload)
        commit('showSnackbar','City updated!')
      })
    },
    getCities({ commit}){
      db.collection('cities').orderBy('id').get().then(cities => {
        commit('setCities',cities)
      })
    },
    setCities({ commit,state},cities){
        commit('setCities',cities)
        db.collection('cities').set(state.cities)
    }
  },
  getters: {
    cityFiltered(state){
      if(!state.search){
        return state.cities
      }
      return state.cities.filter(city=>
          city.title.toLowerCase().includes(state.search.toLowerCase())
        )
    }
  }
})
