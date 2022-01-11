export default class VisitHttpService {
  constructor (http) {
    this.http = http
  }

  create () {
    return this.http.post('')
  }

  weekly () {
    return this.http.get('weekly')
  }

  count () {
    return this.http.get('count')
  }
}
