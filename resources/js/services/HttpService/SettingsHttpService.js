export default class SettingsHttpService {
  constructor (http) {
    this.http = http
  }

  create (settings) {
    return this.http.post('', settings)
  }

  read () {
    return this.http.get('')
  }

  edit (settings) {
    return this.http.put('', settings)
  }
}
