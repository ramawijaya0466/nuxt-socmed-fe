import * as NETWORK from '../../network/apiclient'

export default {
  async fetchManyComment({ state, commit, rootState }) {
    let token = rootState.authentication.access_token
    await this.$axios.$get('/comments', NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return commit('setManyComment', res.data)
      })
  },

  async sendComment({ state, commit, rootState }, payload) {
    let token = rootState.authentication.access_token
    await this.$axios.$post('/comments', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return res
      })
  }
}
