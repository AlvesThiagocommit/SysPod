import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    active: 'paginate',
    list: [],
    paginate: [],
    trash: [],
    count: 0
  },

  mutations: {
    replaceActive (state, active) {
      state.active = active
    },
    replaceList (state, hosts) {
      state.list = hosts
    },
    addPaginate (state, host) {
      state.paginate.data.unshift(host)
    },
    replacePaginate (state, hosts) {
      state.paginate = hosts
    },
    pushPaginate (state, hosts) {
      _.forEach(hosts.data, host => {
        state.paginate.data.push(host)
      })
      state.paginate.next_page_url = hosts.next_page_url
    },
    amendPaginate (state, host) {
      const query = { id: host.id }
      const index = _.findIndex(state.paginate.data, query)
      state.paginate.data.splice(index, 1, host)
    },
    pullPaginate (state, id) {
      const index = _.findIndex(state.paginate.data, { id })
      state.paginate.data.splice(index, 1)
    },
    replaceTrash (state, hosts) {
      state.trash = hosts
    },
    pushTrash (state, hosts) {
      _.forEach(hosts.data, host => {
        state.trash.data.push(host)
      })
      state.trash.next_page_url = hosts.next_page_url
    },
    pullTrash (state, id) {
      const index = _.findIndex(state.trash.data, { id })
      state.trash.data.splice(index, 1)
    },
    replaceCount (state, count) {
      state.count = count
    }
  },

  getters: {
    active: state => state.active,
    list: state => state.list,
    paginate: state => state.paginate,
    trash: state => state.trash,
    count: state => state.count
  }
}
