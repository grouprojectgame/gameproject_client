import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HowToPlay from '../views/HowToPlay.vue'
import WinnerPage from '../views/Winner.vue'
import Lobby from '../views/Lobby.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Game from '../views/Game.vue'

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
    path: '/winner',
    name: 'WinnerPage',
    component: WinnerPage
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next('/')
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
