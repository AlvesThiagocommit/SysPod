<template>
  <div class="h-100 scroll">
    <alert></alert>
    <router-view></router-view>
  </div>
</template>

<script>
import Alert from './components/Alert'

export default {
  components: {
    Alert
  },

  methods: {
    async read () {
      try {
        this.$request.settings().read()
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

<style lang="sass">
html,
body
  height: 100%
</style>
