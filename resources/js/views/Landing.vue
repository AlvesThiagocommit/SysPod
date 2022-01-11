<template>
  <div class="container">
    <div class="row wrapper">
      <div class="col-md-7 offset-md-1 podcast">
        <intro></intro>
        <player></player>
        <list></list>
      </div>
      <div class="col-md-3">
        <hosts></hosts>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Intro from '../components/landing/Intro'
import Player from '../components/landing/Player'
import Hosts from '../components/landing/Hosts'
import List from '../components/landing/List'
import Footer from '../components/Footer'

export default {
  components: {
    Intro,
    Player,
    Hosts,
    List,
    'footer-component': Footer
  },
  methods: {
    robots () {
      var meta = document.querySelector('meta[name="robots"]')
      meta.setAttribute('content', 'follow, index')
    },
    visitsCreate () {
      this.$request.visits().create()
    }
  },
  mounted () {
    this.robots()
    this.visitsCreate()
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  padding-top: 90px
  margin-bottom: 90px
  .podcast
    padding-right: 45px
</style>
