import Http from './Http'
import ServerHttp from './ServerHttpService'
import LicenseHttp from './LicenseHttpService'
import InstallHttp from './InstallHttpService'
import AuthHttp from './AuthHttpService'
import UserHttp from './UserHttpService'
import HostHttp from './HostHttpService'
import PodcastHttp from './PodcastHttpService'
import PlayHttp from './PlayHttpService'
import VisitHttp from './VisitHttpService'
import SettingsHttp from './SettingsHttpService'

export default class HttpService {
  static users () {
    const http = new Http('users')
    return new UserHttp(http)
  }

  static server () {
    const http = new Http('server')
    return new ServerHttp(http)
  }

  static license () {
    const http = new Http('license')
    return new LicenseHttp(http)
  }

  static install () {
    const http = new Http('install')
    return new InstallHttp(http)
  }

  static auth () {
    const http = new Http('auth')
    return new AuthHttp(http)
  }

  static hosts () {
    const http = new Http('hosts')
    return new HostHttp(http)
  }

  static podcasts () {
    const http = new Http('podcasts')
    return new PodcastHttp(http)
  }

  static plays () {
    const http = new Http('plays')
    return new PlayHttp(http)
  }

  static visits () {
    const http = new Http('visits')
    return new VisitHttp(http)
  }

  static settings () {
    const http = new Http('settings')
    return new SettingsHttp(http)
  }
}
