import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    'SOCKET_USER_CONNECTED' (state,payload){
      state.users = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
