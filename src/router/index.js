import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HowToPlay from '../views/HowToPlay.vue'
import WinnerPage from '../views/Winner.vue'
import Lobby from '../views/Lobby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/howto',
    name: 'HowToPlay',
    component: HowToPlay
  },
  {
    path: '/',
    name: 'WinnerPage',
    component: WinnerPage
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
