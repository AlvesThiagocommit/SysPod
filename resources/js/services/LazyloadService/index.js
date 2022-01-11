import Lazyload from './Lazyload'

export default class LazyloadService {
  constructor (Vue) {
    this.request = Vue.prototype.$request
    this.lazyload = Lazyload
  }

  hosts () {
    const paginate = () => this.request.hosts().next()
    this.lazyload.initialize('#hosts-paginate', paginate)
  }

  hostsTrash () {
    const paginate = () => this.request.hosts().trashNext()
    this.lazyload.initialize('#hosts-trash', paginate)
  }

  podcasts () {
    const paginate = () => this.request.podcasts().next()
    this.lazyload.initialize('#podcasts-paginate', paginate)
  }

  podcastsTrash () {
    const paginate = () => this.request.podcasts().trashNext()
    this.lazyload.initialize('#podcasts-trash', paginate)
  }
}
