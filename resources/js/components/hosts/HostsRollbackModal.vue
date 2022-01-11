<template>
  <modal id="hosts-rollback-modal" title="Rollback host">
    <template v-slot:body>
      <p>
        Are you sure to rollback
        <strong> {{ host.name }}</strong>?
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
  props: ['host'],
  components: {
    Modal,
    PrimaryButton
  },

  methods: {
    async rollback () {
      try {
        await this.$request.hosts().restore(this.host.id)
        this.$modal.hosts().close('rollback')
      } catch (error) {
        this.$alert.push(error)
      }
    }
  }
}
</script>
