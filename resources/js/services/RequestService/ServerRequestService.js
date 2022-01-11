export default class ServerRequestService {
  constructor (http) {
    this.http = http
  }

  async verify () {
    const config = await this.http.verify()
    return config
  }
}
