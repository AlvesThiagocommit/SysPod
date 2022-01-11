export default class LicenseHttpService {
  constructor (http) {
    this.http = http
  }

  verify (code) {
    return this.http.get('verify', { code })
  }
}
