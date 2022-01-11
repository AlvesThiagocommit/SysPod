import _ from 'lodash'
import moment from 'moment'

export default class WeeklyCountsUtilsService {
  static counts (visitsWeekly) {
    visitsWeekly = _.map(visitsWeekly, visit => moment(visit.created_at).format('ddd'))
    visitsWeekly = _.countBy(visitsWeekly, day => day)
    const counts = _.map(_.rangeRight(7), data => {
      const day = moment().subtract(data, 'days').format('ddd')
      var visits = visitsWeekly[day]
      if (!visits) visits = 0
      return visits
    })
    return counts
  }

  static days () {
    const days = _.map(_.rangeRight(7), data => {
      const day = moment().subtract(data, 'days').format('ddd')
      return day
    })
    return days
  }
}
