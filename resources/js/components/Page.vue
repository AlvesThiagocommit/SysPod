<template>
  <div>
    <nav-header></nav-header>
    <div class="content scroll">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from './NavHeader'

export default {
  components: {
    NavHeader
  }
}
</script>

<style lang="sass" scoped>
.content
  height: calc(100vh - 73px)
  .container
    margin-top: 55px
    margin-bottom: 55px
</style>
