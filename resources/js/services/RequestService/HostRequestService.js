import _ from 'lodash'

export default class HostRequestService {
  constructor (http, store) {
    this.http = http
    this.store = store
  }

  transform (hosts) {
    _.map(hosts, host => {
      _.map(host.accounts, account => {
        host[account.name] = account.link
      })
    })
    return hosts
  }

  transformHost (host) {
    _.map(host.accounts, account => {
      host[account.name] = account.link
    })
    return host
  }

  async create (host) {
    host = await this.http.create(host)
    this.store.paginate().add(host)
  }

  async list () {
    const hosts = await this.http.list()
    this.store.list().replace(this.transform(hosts))
  }

  async paginate () {
    const hosts = await this.http.paginate()
    this.store.paginate().replace(hosts)
  }

  async next () {
    const url = this.store.paginate().collect().next_page_url
    if (!url) return
    const hosts = await this.http.next(url)
    this.store.paginate().push(hosts)
  }

  async trash () {
    const hosts = await this.http.trash()
    this.store.trash().replace(hosts)
  }

  async trashNext () {
    const url = this.store.trash().collect().next_page_url
    if (!url) return
    const hosts = await this.http.next(url)
    this.store.trash().push(hosts)
  }

  async read (id) {
    const host = await this.http.read(id)
    return this.transformHost(host)
  }

  async edit (host) {
    host = await this.http.edit(host)
    this.store.paginate().amend(host)
  }

  async delete (id) {
    await this.http.delete(id)
    this.store.paginate().pull(id)
  }

  async restore (id) {
    await this.http.restore(id)
    this.store.trash().pull(id)
  }

  async count () {
    const count = await this.http.count()
    this.store.count().replace(count)
  }
}
