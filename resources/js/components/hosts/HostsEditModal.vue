<template>
  <modal id="hosts-edit-modal" title="Edit host" widthAuto="true">
    <template v-slot:body>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" class="form-control" v-model="host.name" placeholder="Name">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="3" v-model="host.about" placeholder="About"></textarea>
          </div>
          <file-input placeholder="Choose photo" @uploaded="updateAvatar" accept="image/*"></file-input>
        </div>
        <div class="col-md-6">
          <icon-input icon="facebook" placeholder="Facebook" :inputData.sync="host.facebook"></icon-input>
          <icon-input icon="twitter" placeholder="Twitter" :inputData.sync="host.twitter"></icon-input>
          <icon-input icon="instagram" placeholder="Instagram" :inputData.sync="host.instagram"></icon-input>
          <icon-input icon="linkedin" placeholder="LinkedIn" :inputData.sync="host.linkedin"></icon-input>
          <icon-input icon="youtube" placeholder="YouTube" :inputData.sync="host.youtube"></icon-input>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <primary-button
        class="m-auto"
        icon="create"
        title="Edit"
        @click.native="edit()"
        :disabled="isProcessing">
      </primary-button>
    </template>
  </modal>
</template>

<script>
import Modal from '../Modal'
import PrimaryButton from '../PrimaryButton'
import FileInput from '../FileInput'
import IconInput from '../IconInput'

export default {
  props: ['hostId'],
  components: {
    PrimaryButton,
    Modal,
    FileInput,
    IconInput
  },

  data () {
    return {
      host: {
        name: '',
        about: '',
        avatar: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        youtube: ''
      },
      isProcessing: false
    }
  },

  methods: {
    async read () {
      try {
        if (!this.hostId) return
        this.host = await this.$request.hosts().read(this.hostId)
        this.host.avatar = ''
      } catch (error) {
        this.$alert.push(error)
      }
    },
    async edit () {
      try {
        this.isProcessing = true
        await this.$request.hosts().edit(this.host)
        this.$modal.hosts().close('edit')
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        this.$alert.push(error)
      }
    },
    clear () {
      this.host = {}
    },
    onOpen () {
      this.$modal.hosts()
        .onOpen('edit', () => this.read())
    },
    onClose () {
      this.$modal.hosts().onClose('edit', () => {
        this.clear()
      })
    },
    updateAvatar (data) {
      this.host.avatar = data.file
    }
  },

  mounted () {
    this.onOpen()
    this.onClose()
  }
}
</script>

<style lang="sass" scoped>
textarea
  min-height: 108px
</style>
