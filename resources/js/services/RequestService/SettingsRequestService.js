import _ from 'lodash'

export default class SettingsRequestService {
  constructor (http, store) {
    this.http = http
    this.store = store
  }

  transform (settings) {
    _.map(settings.accounts, account => {
      settings[account.name] = account.link
    })
    return settings
  }

  async create (settings) {
    await this.http.create(settings)
  }

  async read () {
    const settings = await this.http.read()
    return this.store.settings().replace(this.transform(settings))
  }

  async edit (settings) {
    settings = await this.http.edit(settings)
    this.store.settings().amend(this.transform(settings))
  }
}
