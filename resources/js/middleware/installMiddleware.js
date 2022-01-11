import Http from '../services/HttpService'

export default async function (to, from, next) {
  try {
    const isInstalled = await Http.install().verify()
    if (isInstalled) next()
    else next({ name: 'check' })
  } catch (error) {
    next({ name: 'check' })
  }
}
