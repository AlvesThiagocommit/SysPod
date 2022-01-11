import moment from 'moment'

export default class DateUtilsService {
  static local (date) {
    return {
      onlyDate () {
        const formated = moment.utc(date).local().format('MMM D, YYYY')
        return formated
      },
      withTime () {
        const formated = moment.utc(date).local().format('MMM D, YYYY h:mm A')
        return formated
      }
    }
  }

  static utc (date) {
    const formated = moment(date).utc().format('YYYY-MM-DD HH:mm:ss')
    return formated
  }

  static relative (date) {
    date = moment.utc(date).local()
    const isToday = date.diff(moment().startOf('day').add(-1, 'hour'), 'hours') > 0
    return isToday ? date.format('LT') : date.format('LLL')
  }
}
