<template>
  <transition name="fade">
    <div
      class="alert cursor-pointer d-flex align-items-center rounded-0"
      :class="` alert-${alert.type}`"
      role="alert" v-if="alert.message"
      @click="clearAlert()">
      <icon :name="alert.type === 'success' ? 'checkmark-circle' : 'alert'" m-right="3"></icon>
      {{ alert.message }}
    </div>
  </transition>
</template>

<script>
import Icon from './Icon'

export default {
  components: {
    Icon
  },

  computed: {
    alert () {
      this.$store.alert().autoClose()
      return this.$store.alert().get()
    }
  },

  methods: {
    clearAlert () {
      this.$store.alert().clear()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../sass/variables'

.alert
  position: fixed
  top: 10px
  right: 10px
  z-index: 1060
  color: white
  &.alert-error
    background: $red
  &.alert-success
    background: $green
.fade-enter-active, .fade-leave-active
  transition: opacity .25s
.fade-enter, .fade-leave-to
  opacity: 0
.icon
  font-size: 1.5em
</style>
