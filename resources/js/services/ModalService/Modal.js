import $ from 'jquery'

export default class Modal {
  constructor (component) {
    this.component = component
  }

  dom (modal) {
    const seletor = `#${this.component}-${modal}-modal`
    const dom = $(seletor)
    return dom
  }

  open (modal) {
    this.dom(modal).modal('show')
  }

  close (modal) {
    this.dom(modal).modal('hide')
  }

  onOpen (modal, callback) {
    this.dom(modal).on('shown.bs.modal', () => callback())
  }

  onClose (modal, callback) {
    this.dom(modal).on('hidden.bs.modal', () => callback())
  }
}
