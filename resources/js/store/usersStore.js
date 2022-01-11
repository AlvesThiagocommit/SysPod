export default {
  namespaced: true,
  state: {
    user: {}
  },

  mutations: {
    replaceUser (state, user) {
      state.user = user
    }
  },

  getters: {
    user: state => state.user
  }
}
