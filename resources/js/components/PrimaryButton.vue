<template>
  <button class="rounded-0 d-flex align-items-center justify-content-center" :class="generateButtonClasses()" @click.prevent="">
    <icon :name="icon" m-right="3" v-if="icon"></icon> {{ title }}
  </button>
</template>

<script>
import Icon from './Icon'

export default {
  props: ['title', 'icon', 'isBlock', 'isSmall'],
  components: {
    Icon
  },

  methods: {
    generateButtonClasses () {
      var classes = ['btn', 'btn-primary']
      if (this.isBlock) classes.push('btn-block')
      if (this.isSmall) classes.push('btn-sm')
      return classes
    }
  }
}
</script>

<style lang="sass" scoped>
button
  padding: 4px 25px !important
.icon
  font-size: 25px
</style>
