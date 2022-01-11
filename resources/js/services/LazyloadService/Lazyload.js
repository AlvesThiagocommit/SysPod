import _ from 'lodash'
import $ from 'jquery'

export default class Lazyload {
  static dom () {
    return $(this.selector)
  }

  static canPaginate () {
    const dom = this.dom()
    const domHeight = dom[0].clientHeight
    const totalScrollHeight = dom[0].scrollHeight
    const scrollPosition = _.round(dom.scrollTop() + domHeight)
    const canPaginate = scrollPosition === totalScrollHeight
    return canPaginate
  }

  static handle () {
    if (!this.canPaginate()) return
    this.paginate()
  }

  static initialize (selector, paginate) {
    this.selector = selector
    this.paginate = paginate
    this.dom().on('scroll', () => this.handle())
  }
}
