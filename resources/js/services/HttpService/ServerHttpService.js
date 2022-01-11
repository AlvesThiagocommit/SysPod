export default class ServerHttpService {
  constructor (http) {
    this.http = http
  }

  verify () {
    return this.http.get('verify')
  }
}
