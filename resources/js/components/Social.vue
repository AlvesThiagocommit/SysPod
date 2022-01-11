<template>
  <div class="social d-flex">
    <a :href="instagram" target="_blank">
      <i class="icon ion-logo-instagram mr-3"></i>
    </a>
    <a :href="facebook" target="_blank">
      <i class="icon ion-logo-facebook mr-3"></i>
    </a>
    <a :href="twitter" target="_blank">
      <i class="icon ion-logo-twitter mr-3"></i>
    </a>
    <a :href="linkedin" target="_blank">
      <i class="icon ion-logo-linkedin mr-3"></i>
    </a>
    <a :href="youtube" target="_blank">
      <i class="icon ion-logo-youtube mr-0"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube']
}
</script>

<style lang="sass" scoped>
a
  color: inherit
</style>
