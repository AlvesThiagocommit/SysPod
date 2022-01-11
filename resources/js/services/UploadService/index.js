import mime from 'mime'

export default class UploadService {
  constructor (event) {
    this.file = this.parse(event.target.files)
  }

  parse (files) {
    const file = files.length ? files[0] : null
    return file
  }

  shorten () {
    const name = this.file.name
    const canShorten = name.length >= 18
    const shorten = canShorten ? name.substr(0, 15) + '...' : name
    this.file.shorten = shorten
  }

  extension () {
    const type = this.file.type
    const extension = mime.getExtension(type)
    this.file.extension = extension
  }

  result () {
    if (!this.file) return {}
    this.shorten()
    this.extension()
    const { uri: data, type, shorten: name, extension } = this.file
    const result = { data, type, name, extension }
    return result
  }

  read () {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(this.file)
      fileReader.addEventListener('load', event => {
        this.file.uri = event.target.result
        resolve(this.result())
      })
    })
  }

  async upload () {
    if (!this.file) return this.result()
    const result = await this.read()
    return result
  }
}
