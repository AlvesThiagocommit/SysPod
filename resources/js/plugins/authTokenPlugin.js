import AuthTokenService from '../services/AuthTokenService'

export default {
  install (Vue) {
    Vue.prototype.$authToken = AuthTokenService
  }
}
