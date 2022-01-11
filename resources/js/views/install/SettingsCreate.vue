<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6 my-5">
        <h3 class="text-center mb-4">Ambiente de configuração</h3>
        <div class="row mb-4">
          <div class="col-md-6">
            <file-input placeholder="Choose logo" @uploaded="updateLogo" accept="image/*"></file-input>
            <div class="form-group">
              <input class="form-control" placeholder="Title" autofocus v-model="settings.title">
            </div>
            <div class="form-group">
              <textarea class="form-control" placeholder="Description" rows="3" v-model="settings.description"></textarea>
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Patreon link" v-model="settings.patreon">
            </div>
            <div class="form-group mb-0">
              <input class="form-control" placeholder="Copyright text" v-model="settings.copyright">
            </div>
          </div>
          <div class="col-md-6">
            <icon-input icon="facebook" placeholder="Facebook" :inputData.sync="settings.facebook"></icon-input>
            <icon-input icon="instagram" placeholder="Instagram" :inputData.sync="settings.instagram"></icon-input>
            <icon-input icon="twitter" placeholder="Twitter" :inputData.sync="settings.twitter"></icon-input>
            <icon-input icon="linkedin" placeholder="LinkedIn" :inputData.sync="settings.linkedin"></icon-input>
            <icon-input icon="youtube" placeholder="YouTube" :inputData.sync="settings.youtube"></icon-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <primary-button class="btn-block" icon="rocket" title="Install" @click.native="install()"></primary-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../../components/PrimaryButton'
import IconInput from '../../components/IconInput'
import FileInput from '../../components/FileInput'

export default {
  components: {
    PrimaryButton,
    IconInput,
    FileInput
  },

  data () {
    return {
      settings: {
        logo: '',
        title: '',
        description: '',
        patreon: '',
        copyright: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        youtube: ''
      }
    }
  },

  methods: {
    async install () {
      try {
        await this.$request.settings().create(this.settings)
        this.$router.push({ name: 'signIn' })
      } catch (error) {
        this.$alert.push(error)
      }
    },
    updateLogo (data) {
      this.settings.logo = data.file
    }
  }
}
</script>

<style lang="sass" scoped>
textarea
  min-height: 108px
</style>
