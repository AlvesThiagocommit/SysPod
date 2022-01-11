<template>
  <div class="list scroll pr-3 mb-5" v-if="$utils.has(podcasts)">
    <div class="item-wrapper border-bottom pb-3" v-for="podcast in podcasts" :key="podcast.id">
      <div class="item cursor-pointer d-flex">
        <div class="position-relative d-inline-block thumbnail-wrapper" @click="choose(podcast)">
          <img class="thumbnail" :src="podcast.thumbnail" alt="">
          <div class="play-icon">
            <div class="background bg-primary position-absolute"></div>
            <icon name="play" class="text-white position-absolute"></icon>
          </div>
        </div>
        <div class="mb-1 ml-3 w-100">
          <div class="d-flex justify-content-between" @click="choose(podcast)">
            <p class="episode text-uppercase mb-1">Episode {{ podcast.episode }}</p>
            <p class="created mb-0">{{ $utils.date().local(podcast.created_at).onlyDate() }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="font-weight-bold mb-2" @click="choose(podcast)">{{ podcast.title }}</h5>
              <div>
                <read-more more-str="Read more" :text="podcast.note" link="#" less-str="Read less" :max-chars="60"></read-more>
              </div>
            </div>
            <icon class="text-primary pulse" name="pulse" v-if="isChosen(podcast.id)"></icon>
          </div>
        </div>
      </div>
    </div>
  </div>
  <no-results type="podcasts" v-else></no-results>
</template>

<script>
import Icon from '../Icon'
import NoResults from '../NoResults'

export default {
  components: {
    Icon,
    NoResults
  },

  computed: {
    podcasts () {
      return this.$store.podcasts().list().collect()
    },
    track () {
      return this.$store.podcasts().track().collect()
    },
    player () {
      return this.$store.podcasts().player().collect()
    }
  },

  methods: {
    autoplay () {
      this.$store.podcasts().track().next()
      this.player.load(this.track)
      this.player.play(this.track)
    },
    async read () {
      try {
        await this.$request.podcasts().list()
        if (!this.track) return
        this.player.load(this.track)
        this.player.onEnd(this.autoplay)
      } catch (error) {
        this.$alert.push(error)
      }
    },
    choose (podcast) {
      this.$store.podcasts().track().replace(podcast.id)
      this.player.load(this.track)
      this.player.play(this.track)
    },
    isChosen (podcastId) {
      const isChosen = this.track.id === podcastId
      return isChosen
    }
  },

  mounted () {
    this.read()
  }
}
</script>

<style lang="sass" scoped>
.list
  height: 715px
  .item-wrapper
    margin-top: 25px
    .item
      .thumbnail-wrapper
        height: fit-content
        .thumbnail
          object-fit: cover
        .thumbnail, .background
          width: 80px
          height: 100px
        .play-icon
          opacity: 0
          transition: opacity 0.3s
          .background
            top: 0
            opacity: 0.5
          .icon
            font-size: 2em
            top: 50%
            left: 50%
            transform: translate(-50%,-50%)
      &:hover
        .play-icon
          opacity: 1
.episode
  font-size: 0.8em
.created
  font-size: 0.74em
  color: #bfbfbf
.pulse
  font-size: 1.8em
</style>
