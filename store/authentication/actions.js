import * as NETWORK from '../../network/apiclient'

let token = window.localStorage.getItem('access_token')

export default {
  async login({ commit }, payload) {
    let res = await this.$axios.$post('/authentication/login', payload, NETWORK.API_CLIENT)
    commit('setLogin', res)
  },

  async register({ commit }, payload) {
    //
  },

  async profile({ commit }, payload) {
    let res = await this.$axios.$post('/authentication/profile', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
    commit('setProfile', res.data)
  },

  async logout({ commit }, payload) {
    let res = await this.$axios.$post('/authentication/logout', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
    return res
  },
}
