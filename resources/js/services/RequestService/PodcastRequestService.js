export default class PodcastRequestService {
  constructor (http, store) {
    this.http = http
    this.store = store
  }

  async create (podcast) {
    podcast = await this.http.create(podcast)
    this.store.paginate().add(podcast)
  }

  async list () {
    const podcasts = await this.http.list()
    this.store.list().replace(podcasts)
    this.store.track().add()
  }

  async top () {
    const top = await this.http.top()
    this.store.top().replace(top)
  }

  async paginate () {
    const podcasts = await this.http.paginate()
    this.store.paginate().replace(podcasts)
  }

  async next () {
    const url = this.store.paginate().collect().next_page_url
    if (!url) return
    const podcasts = await this.http.next(url)
    this.store.paginate().push(podcasts)
  }

  async trash () {
    const podcasts = await this.http.trash()
    this.store.trash().replace(podcasts)
  }

  async trashNext () {
    const url = this.store.trash().collect().next_page_url
    if (!url) return
    const podcasts = await this.http.next(url)
    this.store.trash().push(podcasts)
  }

  async read (id) {
    const podcast = await this.http.read(id)
    return podcast
  }

  async edit (podcast) {
    podcast = await this.http.edit(podcast)
    this.store.paginate().amend(podcast)
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
