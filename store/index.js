import Vue from 'vue'
import Vuex from 'vuex'
import {request} from './../utils/request.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: ''
	},
  getters:{
  },
	mutations: {
    setToken (state, val) {
      state.token = val
    }
	},
	actions: {
	}
})

export default store
