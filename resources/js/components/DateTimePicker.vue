<template>
  <div class="form-group">
    <datetime :id="id" v-model="date"></datetime>
  </div>
</template>

<script>
import $ from 'jquery'
import datetime from 'vuejs-datetimepicker'

export default {
  props: ['placeholder', 'id', 'default-date'],
  components: {
    datetime
  },

  data () {
    return {
      date: this.defaultDate
    }
  },

  watch: {
    defaultDate (date) {
      this.dom().val(date)
    },
    date: function (date) {
      this.$emit('input', date)
    }
  },

  methods: {
    dom () {
      return $(`#${this.id} input`)
    },
    transform () {
      this.dom().addClass('form-control')
      this.dom().attr('placeholder', this.placeholder)
    }
  },

  mounted () {
    this.transform()
  }
}
</script>

<style lang="sass">
.datetime-picker input
  min-width: inherit
  height: calc(1.6em + 0.75rem + 2px)
  padding: 0.375rem 0.75rem
  border: 1px solid #ced4da
</style>
