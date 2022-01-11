<template>
  <i class="icon" :class="classes"></i>
</template>

<script>
export default {
  props: ['name', 'm-right', 'm-left'],
  computed: {
    classes () {
      const icon = `ion-md-${this.name}`
      const mLeft = `ml-${this.mLeft}`
      const mRight = `mr-${this.mRight}`
      const classes = [icon, mLeft, mRight]
      return classes
    }
  }
}
</script>
