<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col col-md-3">
        <h3 class="text-center">Verify purchase</h3>
        <p class="text-center mb-0">
          Please enter Codecanyon purchase code to verify the installation.
        </p>
        <p class="text-center mb-4">
          <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank">
            <icon name="help-circle" m-right="1"></icon>
            How to find your purchase code?
          </a>
        </p>
        <form>
          <div class="form-group">
            <input class="form-control" placeholder="Purchase code" v-model="code">
          </div>
          <primary-button class="btn-block" icon="cloud-done" title="Verify" @click.native="verify()"></primary-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../components/Icon'
import PrimaryButton from '../../components/PrimaryButton'

export default {
  components: {
    Icon,
    PrimaryButton
  },

  data () {
    return {
      code: ''
    }
  },

  methods: {
    async verify () {
      try {
        await this.$request.license().verify(this.code)
        this.$router.push({ name: 'adminCreate' })
      } catch (error) {
        this.$alert.push(error)
      }
    }
  }
}
</script>
