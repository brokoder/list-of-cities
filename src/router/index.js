import Vue from 'vue'
import VueRouter from 'vue-router'
import City from '../views/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: City
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE }`
  next()
})


export default router
