export default class LicenseRequestService {
  constructor (http) {
    this.http = http
  }

  async verify (code) {
    await this.http.verify(code)
  }
}
