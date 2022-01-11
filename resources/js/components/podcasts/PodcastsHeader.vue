<template>
  <div class="row podcasts-header">
    <div class="col">
      <div class="d-flex justify-content-between">
        <primary-button title="Create" icon="add-circle" @click.native="create()"></primary-button>
        <primary-button
          title="Trash"
          icon="trash"
          class="bg-light text-secondary border-light"
          v-if="active === 'paginate'"
          @click.native="activate('trash')">
        </primary-button>
        <primary-button
          icon="arrow-round-back"
          title="Go back"
          v-else
          @click.native="activate('paginate')">
        </primary-button>
      </div>
    </div>
    <podcasts-create-modal></podcasts-create-modal>
  </div>
</template>

<script>
import PrimaryButton from '../PrimaryButton'
import PodcastsCreateModal from './PodcastsCreateModal'

export default {
  components: {
    PrimaryButton,
    PodcastsCreateModal
  },

  computed: {
    active () {
      return this.$store.podcasts().active().collect()
    }
  },
  methods: {
    activate (active) {
      this.$store.podcasts().active().replace(active)
    },
    create () {
      this.$modal.podcasts().open('create')
    }
  }
}
</script>

<style lang="sass" scoped>
.podcasts-header
  margin-bottom: 70px
</style>
