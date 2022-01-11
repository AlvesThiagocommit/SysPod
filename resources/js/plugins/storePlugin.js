import StoreService from '../services/StoreService'

export default {
  install (Vue, options) {
    const store = options.store
    Vue.prototype.$store = new StoreService(store)
  }
}
