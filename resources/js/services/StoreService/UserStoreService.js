export default class UserStoreService {
  constructor (store) {
    this.store = store
  }

  users () {
    return {
      replace: user => {
        this.store.commit('users/replaceUser', user)
      },
      amend: user => {
        this.store.commit('users/replaceUser', user)
      },
      collect: () => {
        return this.store.getters['users/user']
      }
    }
  }
}
