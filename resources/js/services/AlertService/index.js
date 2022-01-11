import _ from 'lodash'
import alerts from './alerts'

export default class AlertService {
  constructor (Vue) {
    this.store = Vue.prototype.$store
  }

  generate (message, type) {
    const alert = { message, type }
    return alert
  }

  parse (alertData) {
    const isObject = _.isObject(alertData)
    const isError = _.isError(alertData)
    const hasMessage = alertData.message
    const hasType = alertData.type
    if (hasMessage) {
      const message = alertData.message.toString()
      const type = alertData.type
      if (hasType) {
        return this.generate(message, type)
      } else {
        return this.generate(message, 'error')
      }
    } else if (isObject) {
      const validationError = _.first(_.first(_.values(alertData)))
      if (validationError) return this.generate(validationError, 'error')
    }
    if (isError) {
      return alerts.something_wrong
    } else {
      const customAlert = alerts[alertData]
      if (customAlert) return customAlert
    }
  }

  push (alertCode) {
    const alert = this.parse(alertCode)
    this.store.alert().show(alert)
  }
}
