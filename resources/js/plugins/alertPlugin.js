import AlertService from '../services/AlertService'

export default {
  install (Vue) {
    Vue.prototype.$alert = new AlertService(Vue)
  }
}
