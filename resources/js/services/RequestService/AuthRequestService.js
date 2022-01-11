import AuthToken from '../AuthTokenService'

export default class AuthRequestService {
  constructor (http) {
    this.http = http
    this.AuthToken = AuthToken
  }

  async login (credentials) {
    const user = await this.http.login(credentials)
    this.AuthToken.replace(user.api_token)
  }

  async logout () {
    await this.http.logout()
    this.AuthToken.pull()
  }
}
