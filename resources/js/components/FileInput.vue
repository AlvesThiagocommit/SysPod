
<template>
  <div class="form-group">
    <div class="custom-file h-100">
      <input type="file" class="custom-file-input form-control" :accept="accept" @change="upload($event)">
      <label class="custom-file-label rounded-0 form-control">{{ chosenFileName }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'accept'],
  data () {
    return {
      data: {
        file: '',
        type: '',
        extension: ''
      },
      chosenFileName: this.placeholder
    }
  },

  methods: {
    async upload (event) {
      const file = await this.$upload(event)
      this.data.file = file.data
      this.data.type = file.type
      this.data.extension = file.extension
      this.chosenFileName = file.name ? file.name : this.placeholder
      this.$emit('uploaded', this.data)
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-file-label:after
  height: 100%
  display: flex
  align-items: center
</style>
