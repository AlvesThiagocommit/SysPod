export default class PlayHttpService {
  constructor (http) {
    this.http = http
  }

  create (podcastId) {
    return this.http.post('', { podcast_id: podcastId })
  }

  weekly () {
    return this.http.get('weekly')
  }

  count () {
    return this.http.get('count')
  }
}
