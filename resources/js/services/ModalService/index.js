import Modal from './Modal'

export default class ModalService {
  hosts () {
    return new Modal('hosts')
  }

  podcasts () {
    return new Modal('podcasts')
  }
}
