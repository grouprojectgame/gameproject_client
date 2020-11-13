import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

    addPlayer (context, payload) {
      return axios({
        method: 'POST',
        url: '/players',
        data: {
          name: payload,
          score: 0
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('ADD_ID', data.id)
          return data
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  actions: {
  },
  modules: {
  }
})
