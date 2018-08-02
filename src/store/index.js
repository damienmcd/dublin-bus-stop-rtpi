import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeStopNumber: 3656
  },
  getters: {
    getStopNumber (state) {
      return state.storeStopNumber
    }
  },
  mutations: {
    updateStopNumber (state, newStopNumber) {
      state.storeStopNumber = newStopNumber
    }
  },
  actions: {}
})
