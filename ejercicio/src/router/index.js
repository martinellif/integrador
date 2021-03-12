import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsoApi from '../views/UsoApi.vue'
import Formulario from '../views/Formulario.vue'
import Mostrar from '../views/Mostrar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uso-api',
    name: 'UsoApi',
    component: UsoApi
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/mostrar',
    name: 'Mostrar',
    component: Mostrar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
