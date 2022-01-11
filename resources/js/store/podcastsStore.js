import _ from 'lodash'
import Player from '../services/PlayerService'

export default {
  namespaced: true,
  state: {
    active: 'paginate',
    list: [],
    track: {},
    top: [],
    paginate: [],
    trash: [],
    count: 0,
    player: new Player()
  },

  mutations: {
    replaceActive (state, active) {
      state.active = active
    },
    replaceList (state, podcasts) {
      state.list = podcasts
    },
    shuffleList (state) {
      const podcasts = state.list
      state.list = _.shuffle(podcasts)
    },
    replaceTop (state, podcasts) {
      state.top = podcasts
    },
    addPaginate (state, podcast) {
      state.paginate.data.unshift(podcast)
    },
    replacePaginate (state, podcasts) {
      state.paginate = podcasts
    },
    pushPaginate (state, podcasts) {
      _.forEach(podcasts.data, podcast => {
        state.paginate.data.push(podcast)
      })
      state.paginate.next_page_url = podcasts.next_page_url
    },
    amendPaginate (state, podcast) {
      const query = { id: podcast.id }
      const index = _.findIndex(state.paginate.data, query)
      state.paginate.data.splice(index, 1, podcast)
    },
    pullPaginate (state, id) {
      const index = _.findIndex(state.paginate.data, { id })
      state.paginate.data.splice(index, 1)
    },
    replaceTrash (state, podcasts) {
      state.trash = podcasts
    },
    pushTrash (state, podcasts) {
      _.forEach(podcasts.data, podcast => {
        state.trash.data.push(podcast)
      })
      state.trash.next_page_url = podcasts.next_page_url
    },
    pullTrash (state, id) {
      const index = _.findIndex(state.trash.data, { id })
      state.trash.data.splice(index, 1)
    },
    replaceCount (state, count) {
      state.count = count
    },
    addTrack (state) {
      const track = _.first(state.list) ||
        _.first(state.paginate.data) ||
        _.first(state.trash.data)
      state.track = track
    },
    replaceTrack (state, id) {
      const track = _.find(state.list, { id })
      state.track = track
    },
    nextTrack (state) {
      const track = state.track
      const index = _.findIndex(state.list, { id: track.id })
      const next = state.list[index + 1]
      if (next) state.track = next
    },
    previousTrack (state) {
      const track = state.track
      const index = _.findIndex(state.list, { id: track.id })
      const previous = state.list[index - 1]
      if (previous) state.track = previous
    }
  },

  getters: {
    active: state => state.active,
    list: state => state.list,
    top: state => state.top,
    paginate: state => state.paginate,
    trash: state => state.trash,
    count: state => state.count,
    track: state => state.track,
    player: state => state.player
  }
}
