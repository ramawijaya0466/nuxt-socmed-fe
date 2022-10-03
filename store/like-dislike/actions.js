import * as NETWORK from '../../network/apiclient'

export default {
  async storeLike({ state, commit, rootState }, payload) {
    let token = rootState.authentication.access_token
    await this.$axios.$post('/like-dislikes', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return res
      })
  },

  async storeDislike({ state, commit, rootState }, payload) {
    let token = rootState.authentication.access_token
    await this.$axios.$post('/like-dislikes', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return res
      })
  },
}
