export default class UserRequestService {
  constructor (http, store) {
    this.http = http
    this.store = store
  }

  async create (user) {
    await this.http.create(user)
  }

  async read () {
    const user = await this.http.read()
    return this.store.users().replace(user)
  }

  async edit (user) {
    user = await this.http.edit(user)
    this.store.users().amend(user)
  }
}
