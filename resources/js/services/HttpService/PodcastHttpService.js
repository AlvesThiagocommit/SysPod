export default class PodcastHttpService {
  constructor (http) {
    this.http = http
  }

  create (podcast) {
    return this.http.post('', podcast)
  }

  list () {
    return this.http.get('')
  }

  top () {
    return this.http.get('top')
  }

  paginate () {
    return this.http.get('paginate')
  }

  next (url) {
    return this.http.get(url)
  }

  trash () {
    return this.http.get('trash')
  }

  read (id) {
    return this.http.get(id)
  }

  edit (podcast) {
    return this.http.put(podcast.id, podcast)
  }

  delete (id) {
    return this.http.delete(id)
  }

  restore (id) {
    return this.http.delete(`trash/${id}`)
  }

  count () {
    return this.http.get('count')
  }
}
