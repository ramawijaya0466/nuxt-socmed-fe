export default {
  setPosts(state, data) {
    state.manyPost = data
  },
  setPost(state, data) {
    state.singlePost = data
  },
  clearPosts(state) {
    state.manyPost = []
  },
  clearPost(state) {
    state.singlePost = ''
  },
}
