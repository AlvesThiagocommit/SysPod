import { Howl } from 'howler'
import moment from 'moment'
import _ from 'lodash'

export default class Player {
  constructor () {
    this.rate = 1
    this.amps = 0.5
    this.volumePercentage = '50%'
    this.resetPosition()
    this.resetPercentage()
    this.track = {}
    this.provider = {}
  }

  hasProvider () {
    const has = !_.isEmpty(this.provider)
    return has
  }

  unload () {
    if (!this.hasProvider()) return
    this.provider.unload()
  }

  load (track) {
    this.unload()
    this.provider = new Howl({
      src: track.audio,
      rate: this.rate,
      volume: this.amps,
      html5: true,
      buffer: true,
      onplay: () => this.onPlay(),
      onend: () => this.next()
    })
    this.provider.load()
    this.track = track
  }

  play (track) {
    const isSameTrack = this.track.id === track.id
    if (isSameTrack) {
      if (this.isPlaying()) {
        return this.pause()
      } else {
        return this.resume()
      }
    }
    this.resetPosition()
    this.resetPercentage()
    this.provider.once('load', () => this.provider.play())
  }

  pause () {
    this.provider.pause()
  }

  resume () {
    this.provider.play()
  }

  speed () {
    const speeds = [0.5, 0.75, 1, 1.50, 2, 4]
    const current = this.provider.rate()
    const index = speeds.findIndex(speed => speed === current)
    this.rate = current === 4 ? 0.5 : speeds[index + 1]
    this.provider.rate(this.rate)
  }

  volume (percentage) {
    this.amps = percentage / 100
    this.provider.volume(this.amps)
    this.volumePercentage = `${percentage}%`
  }

  seek (percentage) {
    const time = (this.provider.duration() * percentage / 100)
    this.provider.seek(time)
    this.setPosition()
    this.percentage = `${percentage}%`
  }

  isPlaying () {
    if (!this.hasProvider()) return
    return this.provider.playing()
  }

  duration () {
    if (!this.hasProvider()) return '00:00:00'
    const seconds = this.provider.duration()
    const duration = this.formatDuration(seconds)
    return duration
  }

  formatDuration (seconds) {
    const duration = moment().startOf('day')
      .second(seconds)
      .format('HH:mm:ss')
    return duration
  }

  setPosition () {
    const position = this.provider.seek()
    if (isNaN(position)) this.resetPosition()
    else this.position = this.formatDuration(position)
  }

  setPercentage () {
    const position = this.provider.seek()
    const duration = this.provider.duration()
    const percentage = (position / duration) * 100
    this.percentage = `${percentage}%`
  }

  resetPosition () {
    this.position = '00:00:00'
  }

  resetPercentage () {
    this.percentage = '0%'
  }

  onEnd (callback) {
    this.next = callback
  }

  onPlay () {
    clearInterval(this.listener)
    this.setPosition()
    this.setPercentage()
    this.listener = setInterval(() => {
      if (!this.isPlaying()) return clearInterval(this.listener)
      this.setPosition()
      this.setPercentage()
    }, 500)
  }
}
