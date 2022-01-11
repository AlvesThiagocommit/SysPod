<template>
  <div class="main">
    <div class="details">
      <img :src="settings.logo" class="logo cursor-pointer" alt="">
      <h1 class="mb-4">{{ settings.title }}</h1>
      <p class="mb-0">{{ settings.description }}</p>
    </div>
    <a :href="settings.patreon" target="_blank">
      <button class="support rounded-0 btn btn-primary mb-3">
        Support on
        <img class="patreon-icon" src="/assets/patreon.png" alt="Patreon">
      </button>
    </a>
    <social
      :facebook="settings.facebook"
      :instagram="settings.instagram"
      :twitter="settings.twitter"
      :linkedin="settings.linkedin"
      :youtube="settings.youtube">
    </social>
  </div>
</template>

<script>
import Social from '../Social'

export default {
  components: {
    Social
  },

  computed: {
    settings () {
      return this.$store.settings().settings().collect()
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  margin-bottom: 94px
  .details
    margin-bottom: 52px
    .logo
      width: 130px
      margin-bottom: 45px
    h1
      font-weight: 900
      font-size: 50px
    p
      font-size: 19px
  .support
    padding-left: 26px !important
    padding-right: 26px !important
    .patreon-icon
      height: 20px
      margin-left: 13px
  .social
    font-size: 2.5em
</style>
