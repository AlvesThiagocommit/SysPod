<template>
  <div class="w-100 text-center mb-5 mt-4">
    <primary-button title="Loading..." icon="" class="bg-light border-light m-auto" disabled></primary-button>
  </div>
</template>

<script>
import PrimaryButton from './PrimaryButton'

export default {
  components: {
    PrimaryButton
  }
}
</script>

<style lang="sass" scoped>
button
  color: #5c5b5b !important
  padding: 11px 75px !important
</style>
