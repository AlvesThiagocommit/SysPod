import Http from '../HttpService'
import ServerRequest from './ServerRequestService'
import LicenseRequest from './LicenseRequestService'
import AuthRequest from './AuthRequestService'
import UserRequest from './UserRequestService'
import HostRequest from './HostRequestService'
import PodcastRequest from './PodcastRequestService'
import PlayRequest from './PlayRequestService'
import VisitRequest from './VisitRequestService'
import SettingsRequest from './SettingsRequestService'

export default class RequestService {
  constructor (Vue) {
    this.store = Vue.prototype.$store
  }

  server () {
    const http = Http.server()
    return new ServerRequest(http)
  }

  license () {
    const http = Http.license()
    return new LicenseRequest(http)
  }

  auth () {
    const http = Http.auth()
    return new AuthRequest(http)
  }

  users () {
    const http = Http.users()
    const store = this.store.users()
    return new UserRequest(http, store)
  }

  hosts () {
    const http = Http.hosts()
    const store = this.store.hosts()
    return new HostRequest(http, store)
  }

  podcasts () {
    const http = Http.podcasts()
    const store = this.store.podcasts()
    return new PodcastRequest(http, store)
  }

  plays () {
    const http = Http.plays()
    const store = this.store.plays()
    return new PlayRequest(http, store)
  }

  visits () {
    const http = Http.visits()
    const store = this.store.visits()
    return new VisitRequest(http, store)
  }

  settings () {
    const http = Http.settings()
    const store = this.store.settings()
    return new SettingsRequest(http, store)
  }
}
