export default class HostHttpService {
  constructor (http) {
    this.http = http
  }

  create (host) {
    return this.http.post('', host)
  }

  list () {
    return this.http.get('')
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

  edit (host) {
    return this.http.put(host.id, host)
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
