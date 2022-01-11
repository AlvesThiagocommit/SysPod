export default class SettingsStoreService {
  constructor (store) {
    this.store = store
  }

  settings () {
    return {
      replace: settings => {
        this.store.commit('settings/replaceSettings', settings)
      },
      amend: settings => {
        this.store.commit('settings/replaceSettings', settings)
      },
      collect: () => {
        return this.store.getters['settings/settings']
      }
    }
  }
}
