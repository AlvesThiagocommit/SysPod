export default class VisitStoreService {
  constructor (store) {
    this.store = store
  }

  weekly () {
    return {
      replace: weekly => {
        this.store.commit('visits/replaceWeekly', weekly)
      },
      collect: () => {
        return this.store.getters['visits/weekly']
      }
    }
  }

  count () {
    return {
      replace: count => {
        this.store.commit('visits/replaceCount', count)
      },
      collect: () => {
        return this.store.getters['visits/count']
      }
    }
  }
}
