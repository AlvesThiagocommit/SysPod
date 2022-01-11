<template>
  <page>
    <div class="row">
      <div class="col-md-8 offset-md-2 px-md-5">
        <podcasts-header></podcasts-header>
        <podcasts-list v-if="active === 'paginate'"></podcasts-list>
        <podcasts-trashed v-else></podcasts-trashed>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../components/Page'
import PodcastsHeader from '../components/podcasts/PodcastsHeader'
import PodcastsList from '../components/podcasts/PodcastsList'
import PodcastsTrashed from '../components/podcasts/PodcastsTrashed'

export default {
  components: {
    Page,
    PodcastsHeader,
    PodcastsList,
    PodcastsTrashed
  },
  computed: {
    active () {
      return this.$store.podcasts().active().collect()
    }
  }
}
</script>
