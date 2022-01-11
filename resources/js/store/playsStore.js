export default {
  namespaced: true,
  state: {
    weekly: [],
    count: 0
  },

  mutations: {
    replaceWeekly (state, weekly) {
      state.weekly = weekly
    },
    replaceCount (state, count) {
      state.count = count
    }
  },

  getters: {
    weekly: state => state.weekly,
    count: state => state.count
  }
}
