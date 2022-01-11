export default class AlertStoreService {
  constructor (store) {
    this.store = store
  }

  autoClose () {
    this.store.dispatch('alert/autoClose')
  }

  get () {
    return this.store.getters['alert/alert']
  }

  show (alert) {
    this.store.commit('alert/show', alert)
  }

  clear () {
    this.store.commit('alert/clear')
  }
}
