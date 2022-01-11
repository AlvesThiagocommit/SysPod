import AlertStore from './AlertStoreService'
import UserStore from './UserStoreService'
import HostStore from './HostStoreService'
import PodcastStore from './PodcastStoreService'
import PlayStore from './PlayStoreService'
import VisitStore from './VisitStoreService'
import SettingsStore from './SettingsStoreService'

export default class StoreService {
  constructor (store) {
    this.store = store
  }

  alert () {
    return new AlertStore(this.store)
  }

  users () {
    return new UserStore(this.store)
  }

  hosts () {
    return new HostStore(this.store)
  }

  podcasts () {
    return new PodcastStore(this.store)
  }

  plays () {
    return new PlayStore(this.store)
  }

  visits () {
    return new VisitStore(this.store)
  }

  settings () {
    return new SettingsStore(this.store)
  }
}
