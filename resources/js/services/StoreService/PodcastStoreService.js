export default class PodcastStoreService {
  constructor (store) {
    this.store = store
  }

  active () {
    return {
      replace: active => {
        this.store.commit('podcasts/replaceActive', active)
      },
      collect: () => {
        return this.store.getters['podcasts/active']
      }
    }
  }

  list () {
    return {
      replace: podcasts => {
        this.store.commit('podcasts/replaceList', podcasts)
      },
      shuffle: () => {
        this.store.commit('podcasts/shuffleList')
      },
      collect: () => {
        return this.store.getters['podcasts/list']
      }
    }
  }

  top () {
    return {
      replace: podcasts => {
        this.store.commit('podcasts/replaceTop', podcasts)
      },
      collect: () => {
        return this.store.getters['podcasts/top']
      }
    }
  }

  paginate () {
    return {
      add: podcast => {
        this.store.commit('podcasts/addPaginate', podcast)
      },
      replace: podcasts => {
        this.store.commit('podcasts/replacePaginate', podcasts)
      },
      push: podcasts => {
        this.store.commit('podcasts/pushPaginate', podcasts)
      },
      amend: podcast => {
        this.store.commit('podcasts/amendPaginate', podcast)
      },
      pull: id => {
        this.store.commit('podcasts/pullPaginate', id)
      },
      collect: () => {
        return this.store.getters['podcasts/paginate']
      }
    }
  }

  trash () {
    return {
      replace: podcasts => {
        this.store.commit('podcasts/replaceTrash', podcasts)
      },
      push: podcasts => {
        this.store.commit('podcasts/pushTrash', podcasts)
      },
      pull: id => {
        this.store.commit('podcasts/pullTrash', id)
      },
      collect: () => {
        return this.store.getters['podcasts/trash']
      }
    }
  }

  count () {
    return {
      replace: count => {
        this.store.commit('podcasts/replaceCount', count)
      },
      collect: () => {
        return this.store.getters['podcasts/count']
      }
    }
  }

  track () {
    return {
      add: () => {
        this.store.commit('podcasts/addTrack')
      },
      replace: id => {
        this.store.commit('podcasts/replaceTrack', id)
      },
      next: () => {
        this.store.commit('podcasts/nextTrack')
      },
      previous: () => {
        this.store.commit('podcasts/previousTrack')
      },
      collect: () => {
        return this.store.getters['podcasts/track']
      }
    }
  }

  player () {
    return {
      collect: () => {
        return this.store.getters['podcasts/player']
      }
    }
  }
}
