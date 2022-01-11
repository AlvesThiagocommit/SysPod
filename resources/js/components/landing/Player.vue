<template>
  <div class="player d-flex" v-if="this.track">
    <div class="play position-relative d-inline-block cursor-pointer" @click="player.play(track)">
      <img :src="track.thumbnail" alt="">
      <div class="background bg-primary position-absolute"></div>
      <icon name="pause" class="text-white position-absolute" v-if="player && player.isPlaying()"></icon>
      <icon name="play" class="text-white position-absolute" v-else></icon>
    </div>
    <div class="controls ml-3 w-100 d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between">
        <div class="mb-1">
          <p class="episode text-uppercase mb-1">Episode {{ track.episode }}</p>
          <h5 class="font-weight-bold mb-2">{{ track.title }}</h5>
        </div>
        <div class="volume">
          <div class="d-flex justify-content-between align-items-center">
            <icon name="volume-mute" class="d-inline-flex mr-2"></icon>
            <div class="progress rounded-0 cursor-pointer w-100" style="height: 5px;" @click="volume($event)" id="volume">
              <div class="progress-bar" role="progressbar" :style="{ width: player.volumePercentage }" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" v-if="player"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress rounded-0 mb-1 cursor-pointer" style="height: 5px;" @click="seek($event)" id="seek">
        <div class="progress-bar" role="progressbar" :style="{ width: player.percentage }" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" v-if="player"></div>
      </div>
      <div>
        <div class="status-and-controls d-flex justify-content-between">
          <div class="time mb-0 font-weight-bold">
            <span v-if="player">{{ player.position }}</span>
          </div>
          <div class="controls d-flex justify-content-between w-75 px-2">
            <div class="cursor-pointer">
              <icon name="skip-backward" @click.native="previous()"></icon>
            </div>
            <div class="d-flex px-2">
              <div class="cursor-pointer">
                <icon name="shuffle" class="mr-4" @click.native="shuffle()"></icon>
              </div>
              <div class="cursor-pointer ml-4" @click="player.speed()">
                <span v-if="player">{{ player.rate }}x</span>
              </div>
            </div>
            <div class="cursor-pointer">
              <icon name="skip-forward" @click.native="next()"></icon>
            </div>
          </div>
          <div class="time mb-0 font-weight-bold" v-if="player">{{ player.duration() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon'
import $ from 'jquery'

export default {
  components: {
    Icon
  },

  computed: {
    player () {
      return this.$store.podcasts().player().collect()
    },
    track () {
      const track = this.$store.podcasts().track().collect()
      if (track && track.id) this.$request.plays().create(track.id)
      return track
    }
  },

  methods: {
    shuffle () {
      this.$store.podcasts().list().shuffle()
    },
    next () {
      this.$store.podcasts().track().next()
      this.player.load(this.track)
      this.player.play(this.track)
    },
    previous () {
      this.$store.podcasts().track().previous()
      this.player.load(this.track)
      this.player.play(this.track)
    },
    seekbar (id) {
      const seek = $(id)
      var offset = seek.offset()
      var left = (event.pageX - offset.left)
      var totalWidth = seek.width()
      var percentage = (left / totalWidth) * 100
      return percentage
    },
    seek (event) {
      const percentage = this.seekbar('#seek')
      this.player.seek(percentage)
    },
    volume (event) {
      const percentage = this.seekbar('#volume')
      this.player.volume(percentage)
    }
  }
}
</script>

<style lang="sass" scoped>
.player
  margin-bottom: 50px
  .play, img, .background
      width: 85px
      height: 85px
  .play
    img
      object-fit: cover
    .background
      top: 0
      opacity: 0.5
    .icon
      font-size: 2em
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
  .controls
    .episode
      font-size: 0.8em
    .progress-bar
        transition: width 0.5s linear
    .volume
      width: 75px
      .icon
        font-size: 1.04em
    .status-and-controls
      font-size: 0.76em
</style>
