export default class AuthHttpService {
  constructor (http) {
    this.http = http
  }

  login (credential) {
    return this.http.post('login', credential)
  }

  logout () {
    return this.http.get('logout')
  }
}
