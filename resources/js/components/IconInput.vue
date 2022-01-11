<template>
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text bg-white">
          <i :class="`icon ion-logo-${icon}`"></i>
        </span>
      </div>
      <input class="form-control" :placeholder="placeholder" v-model="value" @input="$emit('update:inputData', value)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'placeholder', 'inputData'],
  data () {
    return {
      value: this.inputData
    }
  },

  watch: {
    inputData (newData) {
      this.value = newData
    }
  }
}
</script>

<style lang="sass" scoped>
.input-group
  .icon
    font-size: 21px
</style>
