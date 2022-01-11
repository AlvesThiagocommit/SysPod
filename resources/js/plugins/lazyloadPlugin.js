import LazyloadService from '../services/LazyloadService'

export default {
  install (Vue) {
    Vue.prototype.$lazyload = new LazyloadService(Vue)
  }
}
