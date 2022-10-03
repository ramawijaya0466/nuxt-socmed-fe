import * as NETWORK from '../../network/apiclient'

export default {
  async fetchManyPost({ state, commit, rootState }) {
    let token = rootState.authentication.access_token
    await this.$axios.$get('/posts', NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return commit('setPosts', res.data)
      })
  },

  async fetchSinglePost({ state, commit, rootState }, payload) {
    let token = rootState.authentication.access_token
    await this.$axios.$get(`/posts/${payload.id}`, NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return commit('setPost', res.data)
      })
  },

  async sendPost({ state, commit, rootState }, payload) {
    let token = rootState.authentication.access_token
    await this.$axios.$post('/posts', payload, NETWORK.API_CLIENT_WITH_TOKEN(token))
      .then((res) => {
        return res
      })
  },
}
