import axios from 'axios'
import AuthToken from '../AuthTokenService'

export default class Http {
  constructor (api) {
    this.api = api
    this.token = AuthToken.collect()
    this.http = this.instance()
  }

  instance () {
    const instance = axios.create({
      baseURL: `${process.env.MIX_APP_URL}/api/${this.api}`,
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return instance
  }

  send ({ method, node, data, params, reset }) {
    const payload = params ? { params } : data
    const request = () => this.http[method](node.toString(), payload)
    return new Promise((resolve, reject) => {
      request()
        .then(response => resolve(response.data))
        .catch(error => reject(error.response.data))
    })
  }

  get (node, params) {
    const request = { method: 'get', node, params }
    return this.send(request)
  }

  post (node, data) {
    const request = { method: 'post', node, data }
    return this.send(request)
  }

  put (node, data) {
    const request = { method: 'put', node, data }
    return this.send(request)
  }

  delete (node) {
    const request = { method: 'delete', node }
    return this.send(request)
  }
}
