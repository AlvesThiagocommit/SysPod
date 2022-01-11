export default {
  namespaced: true,
  state: {
    settings: {}
  },

  mutations: {
    replaceSettings (state, settings) {
      state.settings = settings
    }
  },

  getters: {
    settings: state => state.settings
  }
}
