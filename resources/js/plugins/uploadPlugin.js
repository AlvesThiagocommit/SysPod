import UploadService from '../services/UploadService'

export default {
  install (Vue) {
    Vue.prototype.$upload = event => {
      const uploadService = new UploadService(event)
      return uploadService.upload()
    }
  }
}
