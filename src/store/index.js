import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soal: [
      {
        question: 'kepanjangannya cireng adalah?',
        answer: 'aci digoreng'
      },
      {
        question: 'kepanjangannya cilok adalah?',
        answer: 'aci dicolok'
      },
      {
        question: 'kepanjangan cilung adalah?',
        answer: 'aci digulung'
      },
      {
        question: 'kepanjangan cimol adalah?',
        answer: 'aci digemol'
      },
      {
        question: '',
        answer: ''
      }
    ],
    name: '',
    idUser: null,
    dataUser: []
  },
  mutations: {

  },
  actions: {
    addPlayer ({ commit }, payload) {
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
          commit('ADD_ID', data.id)
          return data
        })
        .catch(err => {
          console.log(err)
        })
    },
    editPlayer (context, data) {
      console.log(data)
      axios({
        method: 'PUT',
        url: `/players/${data.id}`,
        data: {
          name: data.name,
          score: data.score
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllPlayers ({ commit }) {
      axios({
        method: 'GET',
        url: '/players'
      })
        .then(({ data }) => {
          commit('SET_USER', data)
          console.log(data, '<< check dari store')
          return data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteAllPlayers ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: '/players'
        })
          .then(({ data }) => {
            commit('SET_DELETE_USER', data)
            console.log(data, '<< check hapus player')
            localStorage.clear()
            dispatch('getAllPlayers')
            router.push('/')
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
