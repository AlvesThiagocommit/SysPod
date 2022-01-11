<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm" :class="widthAuto ? 'width-auto' : ''" role="document">
      <div class="modal-content rounded-0 border-0">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <icon name="close"></icon>
          </button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer border-top-0 pb-4" v-if="!hideFooter">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  props: ['title', 'hideFooter', 'widthAuto'],
  components: {
    Icon
  }
}
</script>

<style lang="sass" scoped>
.close
  outline: none !important
.width-auto
  max-width: fit-content !important
</style>
