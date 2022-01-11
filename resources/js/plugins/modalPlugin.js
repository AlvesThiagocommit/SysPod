import ModalService from '../services/ModalService'

export default {
  install (Vue) {
    Vue.prototype.$modal = new ModalService()
  }
}
