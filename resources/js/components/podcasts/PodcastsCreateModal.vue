<template>
  <modal id="podcasts-create-modal" title="Add podcast" widthAuto="true">
    <template v-slot:body>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" class="form-control" v-model="podcast.title" placeholder="Title">
          </div>
          <div class="form-group">
            <input class="form-control" v-model="podcast.episode" placeholder="Episode">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="3" v-model="podcast.note" placeholder="Note"></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <file-input placeholder="Choose thumbnail" @uploaded="updateThumbnail" accept="image/*"></file-input>
          <file-input placeholder="Choose audio" @uploaded="updateAudio" accept="audio/*"></file-input>
          <div class="btn-group btn-group-toggle toggler w-100 form-group">
            <label
              class="btn btn-light rounded-0 form-control"
              :class="podcast.is_private ? '' : 'active'"
              @click="podcast.is_private = false">
              Public
            </label>
            <label
              class="btn btn-light rounded-0 form-control"
              :class="podcast.is_private ? 'active' : ''"
              @click="podcast.is_private = true">
              Private
            </label>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <primary-button
        class="m-auto"
        icon="add-circle"
        title="Add"
        @click.native="create()"
        :disabled="isProcessing">
      </primary-button>
    </template>
  </modal>
</template>

<script>
import Modal from '../Modal'
import PrimaryButton from '../PrimaryButton'
import FileInput from '../FileInput'

export default {
  components: {
    PrimaryButton,
    Modal,
    FileInput
  },

  data () {
    return {
      podcast: {
        title: '',
        episode: null,
        note: '',
        thumbnail: '',
        audio: {
          uri: '',
          extension: ''
        },
        is_private: false
      },
      isProcessing: false
    }
  },

  methods: {
    async create () {
      try {
        this.isProcessing = true
        await this.$request.podcasts().create(this.podcast)
        this.$modal.podcasts().close('create')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        this.$alert.push(error)
      }
    },
    clear () {
      this.podcast = {
        title: '',
        episode: null,
        note: '',
        thumbnail: '',
        audio: {
          uri: '',
          extension: ''
        },
        is_private: false
      }
    },
    onClose () {
      this.$modal.podcasts().onClose('create', () => {
        this.clear()
      })
    },
    updateThumbnail (data) {
      this.podcast.thumbnail = data.file
    },
    updateAudio (data) {
      this.podcast.audio.uri = data.file
      this.podcast.audio.extension = data.extension
    }
  },

  mounted () {
    this.onClose()
  }
}
</script>

<style lang="sass" scoped>
@import '../../../sass/variables'

textarea
  min-height: 108px
.toggler
  .active
    background: $secondary !important
    color: #fff !important
</style>
