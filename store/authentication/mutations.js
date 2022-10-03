export default {
  setLogin(state, data) {
    state.access_token = data.access_token
    state.token_type = data.token_type

    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('token_type')

    window.localStorage.setItem('access_token', data.access_token)
    window.localStorage.setItem('token_type', data.token_type)
  },

  setProfile(state, data) {
    state.profile = data
  }
}
