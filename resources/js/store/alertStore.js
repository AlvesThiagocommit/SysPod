import _ from 'lodash'

const alert = {
  isActive (state) {
    const hasMessage = !_.isEmpty(state.message)
    const hasType = !_.isEmpty(state.type)
    const isActive = hasMessage && hasType
    return isActive
  }
}

export default {
  namespaced: true,
  state: {
    message: '',
    type: ''
  },

  mutations: {
    show (state, alert) {
      const { message, type } = alert
      state.message = message
      state.type = type
    },
    clear (state) {
      state.message = ''
      state.type = ''
    }
  },

  getters: {
    alert (state) {
      const alert = {
        message: state.message,
        type: state.type
      }
      return alert
    }
  },

  actions: {
    autoClose (context) {
      const isActive = alert.isActive(context.state)
      if (!isActive) return
      const clearAlert = () => context.commit('clear')
      setTimeout(clearAlert, 5000)
    }
  }
}
