import Vue from 'vue'
import Vuex from 'vuex'
import records from './records'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    
  },
  modules: {
    records
  }
})
