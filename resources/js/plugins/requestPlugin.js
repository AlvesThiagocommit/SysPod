import RequestService from '../services/RequestService'

export default {
  install (Vue) {
    Vue.prototype.$request = new RequestService(Vue)
  }
}
