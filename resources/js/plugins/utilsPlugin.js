import UtilsService from '../services/UtilsService'

export default {
  install (Vue) {
    Vue.prototype.$utils = UtilsService
  }
}
