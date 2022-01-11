<template>
  <modal id="podcasts-delete-modal" title="Delete podcast">
    <template v-slot:body>
      <p>
        Are you sure to delete
        <strong> {{ podcast.title }}</strong>?
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
  props: ['podcast'],
  components: {
    Modal,
    PrimaryButton
  },

  methods: {
    async remove () {
      try {
        await this.$request.podcasts().delete(this.podcast.id)
        this.$modal.podcasts().close('delete')
      } catch (error) {
        this.$alert.push(error)
      }
    }
  }
}
</script>
