<template>
  <div class="header py-3 border-bottom">
    <div class="container h-100">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between">
          <router-link :to="{ name: 'dashboard' }">
            <img :src="settings.logo" class="logo" alt="">
          </router-link>
          <icon name="menu" class="menu text-secondary d-flex d-sm-none cursor-pointer" @click.native="menuToggle()"></icon>
          <nav-menu class="d-none d-sm-flex"></nav-menu>
        </div>
      </div>
      <div class="row" v-if="isToggled">
        <nav-menu class="d-block d-sm-none mt-2"></nav-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import NavMenu from './NavMenu'

export default {
  components: {
    Icon,
    NavMenu
  },

  data () {
    return {
      isToggled: false
    }
  },

  computed: {
    settings () {
      return this.$store.settings().settings().collect()
    }
  },

  methods: {
    menuToggle () {
      this.isToggled = !this.isToggled
    }
  }
}
</script>

<style lang="sass" scoped>

.header
  .logo
    height: 40px
    object-fit: contain
  .menu
    font-size: 24px
</style>
