import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mutations from './mutations/mutations'
import commandActions from './actions/actions'
import apiRequaests from './actions/api-requests'
import getters from './getters/getters'

const actions = {...commandActions, ...apiRequaests}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
})
