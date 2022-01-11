export default class VisitRequestService {
  constructor (http, store) {
    this.http = http
    this.store = store
  }

  async create () {
    await this.http.create()
  }

  async weekly () {
    const weekly = await this.http.weekly()
    return this.store.weekly().replace(weekly)
  }

  async count () {
    const count = await this.http.count()
    return this.store.count().replace(count)
  }
}
