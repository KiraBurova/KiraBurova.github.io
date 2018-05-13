import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pets: [],
    openModal: false,
    activePet: null
  },
  mutations: {
    fetchPets (state, data) {
      state.pets = state.pets.concat(data)
    },
    openModal (state, activePet) {
      state.openModal = true
      state.activePet = activePet
    },
    closeModal (state) {
      state.openModal = false
    }
  },
  actions: {
    fetchPets (context) {
      const data = require('../assets/pets-data.json')
      context.commit('fetchPets', data)
    }
  }
})
