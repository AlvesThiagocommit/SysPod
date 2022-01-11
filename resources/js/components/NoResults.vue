<template>
  <p class="text-muted m-auto">No {{type}} found</p>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="sass" scoped>
p
  width: fit-content
</style>
