<template>
  <div class="nav">
    <router-link class="nav-link text-secondary" :to="{ name: 'dashboard' }">
      Dashboard
    </router-link>
    <router-link class="nav-link text-secondary" :to="{ name: 'hosts' }">
      Hosts
    </router-link>
    <router-link class="nav-link text-secondary" :to="{ name: 'podcasts' }">
      Podcasts
    </router-link>
    <router-link class="nav-link text-secondary" :to="{ name: 'settings' }">
      Settings
    </router-link>
    <router-link class="nav-link text-secondary" :to="{ name: 'admin' }">
      Admin
    </router-link>
    <a class="nav-link text-secondary cursor-pointer pr-0" @click="signOut">Sign out</a>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    menuToggle () {
      $('#menu').toggleClass('d-none')
    },
    signOut () {
      this.$authToken.pull()
      this.$router.push({ name: 'signIn' })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../sass/variables'

.router-link-active
    font-weight: 700
    color: $dark !important
</style>
