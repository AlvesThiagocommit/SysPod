import AuthToken from '../services/AuthTokenService'

export default function (to, from, next) {
  const hasApiToken = AuthToken.collect()
  if (!hasApiToken) return next({ name: 'signIn' })
  next()
}
