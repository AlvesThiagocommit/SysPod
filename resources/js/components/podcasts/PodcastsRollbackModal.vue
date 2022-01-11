<template>
  <modal id="podcasts-rollback-modal" title="Rollback podcast">
    <template v-slot:body>
      <p>
        Are you sure to rollback
        <strong> {{ podcast.title }}</strong>?
      </p>
    </template>
    <template v-slot:footer>
      <primary-button
        icon="refresh"
        title="Rollback"
        @click.native="rollback()">
      </primary-button>
    </template>
  </modal>
</template>

<script>
import Modal from '../Modal'
import PrimaryButton from '../PrimaryButton'

export default {
  props: ['podcast'],
  components: {
    Modal,
    PrimaryButton
  },

  methods: {
    async rollback () {
      try {
        await this.$request.podcasts().restore(this.podcast.id)
        this.$modal.podcasts().close('rollback')
      } catch (error) {
        this.$alert.push(error)
      }
    }
  }
}
</script>
