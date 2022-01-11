<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 wrapper px-md-5">
      <h5 class="text-capitalize font-weight-bold mb-4">Top podcasts</h5>
      <div class="podcsats" v-if="$utils.has(podcasts)">
        <div class="border-bottom pb-2 mt-2" v-for="podcast in podcasts" :key="podcast.id">
          <div class="podcast d-flex">
            <div>
              <img :src="podcast.thumbnail" alt="">
            </div>
            <div class="details w-100 d-flex justify-content-center flex-column">
              <div class="d-flex justify-content-between">
                <p class="episode text-uppercase mb-2">Episode {{ podcast.episode }}</p>
                <p class="plays mb-0">
                  {{ $utils.abbreviate(podcast.plays_count) }}
                  <small>plays</small>
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <h5 class="font-weight-bold mb-0">{{ podcast.title }}</h5>
                <p class="date mb-0 px-2 align-self-end">{{ $utils.date().local(podcast.created_at).onlyDate() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <no-results type="podcasts" v-else></no-results>
    </div>
  </div>
</template>

<script>
import NoResults from '../NoResults'

export default {
  components: {
    NoResults
  },

  computed: {
    podcasts () {
      return this.$store.podcasts().top().collect()
    }
  },

  methods: {
    async read () {
      try {
        this.$request.podcasts().top()
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
.wrapper
  margin-bottom: 80px
  h5
    font-size: 22px
  .podcast
    img
      width: 80px
      height: 80px
      object-fit: cover
    .details
      padding-left: 35px
      h5
        font-size: 20px
      .date
        font-size: 12px
        color: #ababab
        white-space: nowrap
</style>
