<template>
  <modal id="hosts-delete-modal" title="Delete host">
    <template v-slot:body>
      <p>
        Are you sure to delete
        <strong> {{ host.name }}</strong>?
      </p>
    </template>
    <template v-slot:footer>
      <primary-button
        class="m-auto"
        icon="trash"
        title="Delete"
        @click.native="remove()">
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
    async remove () {
      try {
        await this.$request.hosts().delete(this.host.id)
        this.$modal.hosts().close('delete')
      } catch (error) {
        this.$alert.push(error)
      }
    }
  }
}
</script>
