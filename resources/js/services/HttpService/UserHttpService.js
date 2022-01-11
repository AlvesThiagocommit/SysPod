export default class UserHttpService {
  constructor (http) {
    this.http = http
  }

  create (user) {
    return this.http.post('', user)
  }

  read () {
    return this.http.get('')
  }

  edit (user) {
    return this.http.put('', user)
  }
}
