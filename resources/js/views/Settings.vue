<template>
  <page>
    <div class="row">
      <div class="col-md-8 offset-md-2 px-md-5 mt-4">
        <div class="row mb-5">
          <div class="col-md-6">
            <input class="hidden-photo-input" type="file" accept="image/*" @change="upload" v-show="false">
            <div class="mb-5" v-if="settings.logo">
              <img :src="settings.logo" class="logo cursor-pointer" alt="" @click="clickOnInput()">
            </div>
            <div class="form-control cursor-pointer" v-else @click="clickOnInput()">
              Select logo
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input class="form-control" placeholder="Title" autofocus v-model="settings.title">
            </div>
            <div class="form-group">
              <textarea class="form-control" placeholder="Description" rows="3" v-model="settings.description"></textarea>
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Patreon link" v-model="settings.patreon">
            </div>
            <div class="form-group">
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
          <div class="col">
            <primary-button title="Save" icon="save" class="m-auto" @click.native="edit()"></primary-button>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import $ from 'jquery'

import Page from '../components/Page'
import PrimaryButton from '../components/PrimaryButton'
import IconInput from '../components/IconInput'

export default {
  components: {
    Page,
    PrimaryButton,
    IconInput
  },

  computed: {
    settings () {
      return this.$store.settings().settings().collect()
    }
  },

  methods: {
    async read () {
      try {
        await this.$request.settings().read()
      } catch (error) {
        this.$alert.push(error)
      }
    },
    async upload (event) {
      const file = await this.$upload(event)
      if (!file) return
      this.settings.logo = file.data
    },
    clickOnInput () {
      $('.hidden-photo-input').click()
    },
    async edit () {
      try {
        await this.$request.settings().edit(this.settings)
        const alert = {
          message: 'Successfully updated.',
          type: 'success'
        }
        this.$alert.push(alert)
      } catch (error) {
        this.$alert.push(error)
      }
    }
  },

  mounted () {
    this.read()
  }
}
</script>

<style lang="sass" scoped>
.logo
  max-width: 200px
  max-height: 200px
  object-fit: contain
textarea
  min-height: 108px
</style>
