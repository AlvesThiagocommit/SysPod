<template>
<footer class="d-flex justify-content-center w-100 mb-5">
  <p class="mb-0">{{ settings.copyright }}</p>
</footer>
</template>

<script>
export default {
  computed: {
    settings () {
      return this.$store.settings().settings().collect()
    }
  }
}
</script>

<style lang="sass" scoped>
p
  color: #b2b2b2
</style>
