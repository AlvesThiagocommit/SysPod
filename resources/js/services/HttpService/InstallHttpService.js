export default class InstallHttpService {
  constructor (http) {
    this.http = http
  }

  verify () {
    return this.http.get('verify')
  }
}
