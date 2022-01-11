import store from 'store'

export default class AuthTokenService {
  static key () {
    return 'api_token'
  }

  static replace (token) {
    store.set(this.key(), token)
  }

  static collect () {
    const token = store.get(this.key())
    return token
  }

  static exists () {
    const token = store.get(this.key())
    const has = Boolean(token)
    return has
  }

  static pull () {
    store.remove(this.key())
  }
}
