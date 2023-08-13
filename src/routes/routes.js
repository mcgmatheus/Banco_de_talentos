//importando funções do vue-router
import { createRouter, createWebHistory } from 'vue-router'

//importar as telas

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import NewTalent from '../views/Talents/NewTalents/NewTalents.vue'

//configurar roteamentos

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'About',
      component: About
    },
    {
      path: '/talentos/novo',
      name: 'NewTalent',
      component: NewTalent
    }
  ]
})
export default router
