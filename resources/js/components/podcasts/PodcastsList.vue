<template>
  <div>
    <div id="podcasts-paginate" class="row podcasts scroll">
      <div class="col" v-if="$utils.has(podcasts)">
        <div class="podcasts-wrapper" v-for="podcast in podcasts" :key="podcast.id">
          <div class="podcast d-flex">
            <div class="position-relative d-inline-block cursor-pointer play" @click="play(podcast)">
              <img :src="podcast.thumbnail" alt="">
              <div class="play-contol">
                <div class="background bg-primary position-absolute"></div>
                <icon name="pause" class="text-white position-absolute" v-if="isPlaying(podcast)"></icon>
                <icon name="play" class="text-white position-absolute" v-else></icon>
              </div>
            </div>
            <div class="details w-100">
              <div class="d-flex justify-content-between">
                <p class="episode text-uppercase mb-1">Episode {{ podcast.episode }}</p>
                <p class="date mb-0">{{ $utils.date().local(podcast.created_at).onlyDate() }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <div>
                  <h5 class="font-weight-bold mb-2">{{ podcast.title }}</h5>
                  <p class="mb-2">{{ podcast.note }}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="actions">
                  <icon name="create" @click.native="edit(podcast)"></icon>
                  <icon name="trash" class="ml-2" @click.native="remove(podcast)"></icon>
                </div>
                <p class="plays mb-0 align-self-end">
                  {{ $utils.abbreviate(podcast.plays_count) }}
                  <small>plays</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" v-else>
        <no-results type="podcasts"></no-results>
      </div>
    </div>
    <podcasts-edit-modal :podcastId="podcast.id"></podcasts-edit-modal>
    <podcasts-delete-modal :podcast="podcast"></podcasts-delete-modal>
  </div>
</template>

<script>
import Icon from '../Icon'
import NoResults from '../NoResults'
import PodcastsEditModal from './PodcastsEditModal'
import PodcastsDeleteModal from './PodcastsDeleteModal'

export default {
  components: {
    Icon,
    NoResults,
    PodcastsEditModal,
    PodcastsDeleteModal
  },

  computed: {
    podcasts () {
      const paginate = this.$store.podcasts().paginate().collect()
      const podcasts = paginate.data
      return podcasts
    },
    player () {
      return this.$store.podcasts().player().collect()
    }
  },

  data () {
    return {
      podcast: {}
    }
  },

  methods: {
    async paginate () {
      try {
        await this.$request.podcasts().paginate()
      } catch (error) {
        this.$alert.push(error)
      }
    },
    lazyload () {
      this.$lazyload.podcasts()
    },
    edit (podcast) {
      this.podcast = podcast
      this.$modal.podcasts().open('edit')
    },
    remove (podcast) {
      this.podcast = podcast
      this.$modal.podcasts().open('delete')
    },
    isPlayingTrack (podcast) {
      const isPlayingTrack = podcast.id === this.player.track.id
      return isPlayingTrack
    },
    isPlaying (podcast) {
      const hasPlayer = this.player
      if (!hasPlayer) return
      const isPlaying = this.player.isPlaying()
      if (!isPlaying) return
      return this.isPlayingTrack(podcast)
    },
    play (podcast) {
      if (!this.isPlayingTrack(podcast)) {
        this.player.load(podcast)
        this.$request.plays().create(podcast.id)
      }
      this.player.play(podcast)
    }
  },

  mounted () {
    this.paginate()
    this.lazyload()
  }
}
</script>

<style lang="sass" scoped>
.podcasts
  height: calc(100vh - 300px)
  .podcasts-wrapper
    padding: 14px 0
.podcast
  img
    object-fit: cover
  .details
    padding-left: 25px
    .date
      font-size: 0.74em
      color: #bfbfbf
      white-space: nowrap
    h5
      font-size: 20px
  .plays
    font-size: 13.5px
  .play
    height: fit-content
    img, .background
      width: 117px
      height: 139px
    img
      object-fit: cover
    .background
      top: 0
      opacity: 0.5
    .icon
      font-size: 2.6em
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
    .play-contol
      opacity: 0
      transition: opacity 0.3s
    &:hover
      .play-contol
        opacity: 1
  &:hover
    .actions
      .icon
        color: #9b9b9b
</style>
