export default () => ({
  access_token: window.localStorage.getItem('access_token'),
  token_type: window.localStorage.getItem('token_type'),
  profile: {}
})
