<template>
  <page>
    <counts></counts>
    <top-podcasts></top-podcasts>
    <statistics></statistics>
  </page>
</template>

<script>
import Page from '../components/Page'
import Counts from '../components/dashboard/Counts'
import TopPodcasts from '../components/dashboard/TopPodcasts'
import Statistics from '../components/dashboard/Statistics'

export default {
  components: {
    Page,
    Counts,
    TopPodcasts,
    Statistics
  }
}
</script>
