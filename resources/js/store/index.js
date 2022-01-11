import Vue from 'vue'
import Vuex from 'vuex'

import alert from './alertStore'
import users from './usersStore'
import hosts from './hostsStore'
import podcasts from './podcastsStore'
import plays from './playsStore'
import visits from './visitsStore'
import settings from './settingsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    users,
    hosts,
    podcasts,
    plays,
    visits,
    settings
  }
})
