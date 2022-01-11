<template>
  <div class="row statistics">
    <div class="col-md-6 mb-5">
      <h5 class="font-weight-bold text-capitalize mb-4">
        Weekly plays
        <p class="badge badge-light ml-2 text-secondary font-weight-light mb-0">{{ $utils.size(playsWeekly) }}</p>
      </h5>
      <canvas id="weekly-plays"></canvas>
    </div>
    <div class="col-md-6">
      <h5 class="font-weight-bold text-capitalize mb-4">
        Weekly visits
        <p class="badge badge-light ml-2 text-secondary font-weight-light mb-0">{{ $utils.size(visitsWeekly) }}</p>
      </h5>
      <canvas id="weekly-visits"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import $ from 'jquery'

export default {
  computed: {
    visitsWeekly () {
      return this.$store.visits().weekly().collect()
    },
    playsWeekly () {
      return this.$store.plays().weekly().collect()
    }
  },

  methods: {
    chartInit () {
      const plays = $('#weekly-plays')
      const visits = $('#weekly-visits')
      const options = {
        responsive: true,
        scales: {
          xAxes: [{ gridLines: { display: false }, ticks: { fontSize: 13 } }],
          yAxes: [{ gridLines: { display: false }, ticks: { fontSize: 13 } }]
        },
        legend: { labels: { fontSize: 15 } }
      }
      const labels = this.$utils.weeklyCounts().days()
      const playsData = {
        label: 'Plays',
        data: this.$utils.weeklyCounts().counts(this.playsWeekly),
        fill: false,
        borderColor: '#ef6452',
        backgroundColor: '#ef6452',
        borderWidth: 2
      }
      const visitsData = {
        label: 'Visits',
        data: this.$utils.weeklyCounts().counts(this.visitsWeekly),
        fill: false,
        borderColor: '#ef6452',
        backgroundColor: '#ef6452',
        borderWidth: 2
      }
      const playsChart = new Chart(plays, {
        type: 'line',
        data: { labels, datasets: [playsData] },
        options
      })
      const visitsChart = new Chart(visits, {
        type: 'line',
        data: { labels, datasets: [visitsData] },
        options
      })
    },
    async read () {
      try {
        await this.$request.visits().weekly()
        await this.$request.plays().weekly()
        this.chartInit()
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
.statistics
  margin-bottom: 90px
  h5
    font-size: 22px
  .badge
    font-size: 13px
</style>
