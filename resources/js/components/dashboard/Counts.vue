<template>
  <div class="row counts">
    <div class="col-md-3 mb-3">
      <div class="count card rounded-0">
        <div class="card-body d-flex justify-content-between position-relative">
          <div>
            <p class="mb-1">Hosts</p>
            <h4 class="mb-0 font-weight-bold text-uppercase">{{ $utils.abbreviate(hostsCount) }}</h4>
          </div>
          <icon name="people" class="hosts-icon text-primary position-absolute"></icon>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="count card rounded-0">
        <div class="card-body d-flex justify-content-between position-relative">
          <div>
            <p class="mb-1">Podcasts</p>
            <h4 class="mb-0 font-weight-bold text-uppercase">{{ $utils.abbreviate(podcastsCount) }}</h4>
          </div>
          <icon name="microphone" class="podcasts-icon text-primary position-absolute"></icon>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="count card rounded-0">
        <div class="card-body d-flex justify-content-between position-relative">
          <div>
            <p class="mb-1">Plays</p>
            <h4 class="mb-0 font-weight-bold text-uppercase">{{ $utils.abbreviate(playsCount) }}</h4>
          </div>
          <icon name="headset" class="plays-icon text-primary position-absolute"></icon>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="count card rounded-0">
        <div class="card-body d-flex justify-content-between position-relative">
          <div>
            <p class="mb-1">Visits</p>
            <h4 class="mb-0 font-weight-bold text-uppercase">{{ $utils.abbreviate(visitsCount) }}</h4>
          </div>
          <icon name="podium" class="visits-icon text-primary position-absolute"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon'

export default {
  components: {
    Icon
  },

  computed: {
    hostsCount () {
      const data = this.$store.hosts().count().collect()
      return data.count
    },
    podcastsCount () {
      const data = this.$store.podcasts().count().collect()
      return data.count
    },
    playsCount () {
      const data = this.$store.plays().count().collect()
      return data.count
    },
    visitsCount () {
      const data = this.$store.visits().count().collect()
      return data.count
    }
  },

  methods: {
    async read () {
      try {
        this.$request.hosts().count()
        this.$request.podcasts().count()
        this.$request.plays().count()
        this.$request.visits().count()
      } catch (error) {
        this.$alert.push(error)
      }
    }
  },

  mounted () {
    this.read()
  }
}
</script>

<style lang="sass" scoped>
.counts
  margin-top: 70px
  margin-bottom: 65px
  .count
    .icon
      right: 20px
    .hosts-icon
      font-size: 71px
      top: -3px
    .podcasts-icon
      font-size: 59px
      top: 4px
    .plays-icon
      font-size: 55px
      top: 6px
    .visits-icon
      font-size: 64px
      top: 0px
</style>
