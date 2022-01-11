export default class PlayStoreService {
  constructor (store) {
    this.store = store
  }

  weekly () {
    return {
      replace: weekly => {
        this.store.commit('plays/replaceWeekly', weekly)
      },
      collect: () => {
        return this.store.getters['plays/weekly']
      }
    }
  }

  count () {
    return {
      replace: count => {
        this.store.commit('plays/replaceCount', count)
      },
      collect: () => {
        return this.store.getters['plays/count']
      }
    }
  }
}
