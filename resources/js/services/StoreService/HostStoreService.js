export default class HostStoreService {
  constructor (store) {
    this.store = store
  }

  active () {
    return {
      replace: active => {
        this.store.commit('hosts/replaceActive', active)
      },
      collect: () => {
        return this.store.getters['hosts/active']
      }
    }
  }

  list () {
    return {
      replace: hosts => {
        this.store.commit('hosts/replaceList', hosts)
      },
      collect: () => {
        return this.store.getters['hosts/list']
      }
    }
  }

  paginate () {
    return {
      add: host => {
        this.store.commit('hosts/addPaginate', host)
      },
      replace: hosts => {
        this.store.commit('hosts/replacePaginate', hosts)
      },
      push: hosts => {
        this.store.commit('hosts/pushPaginate', hosts)
      },
      amend: host => {
        this.store.commit('hosts/amendPaginate', host)
      },
      pull: id => {
        this.store.commit('hosts/pullPaginate', id)
      },
      collect: () => {
        return this.store.getters['hosts/paginate']
      }
    }
  }

  trash () {
    return {
      replace: hosts => {
        this.store.commit('hosts/replaceTrash', hosts)
      },
      push: hosts => {
        this.store.commit('hosts/pushTrash', hosts)
      },
      pull: id => {
        this.store.commit('hosts/pullTrash', id)
      },
      collect: () => {
        return this.store.getters['hosts/trash']
      }
    }
  }

  count () {
    return {
      replace: count => {
        this.store.commit('hosts/replaceCount', count)
      },
      collect: () => {
        return this.store.getters['hosts/count']
      }
    }
  }
}
