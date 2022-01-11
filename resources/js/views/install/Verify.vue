<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col col-md-3">
        <h3 class="text-center">Verifique o codigo</h3>
        <p class="text-center mb-0">
          Insira o codigo de compra.
        </p>
        <p class="text-center mb-4">
          <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank">
            <icon name="help-circle" m-right="1"></icon>
            Como encontrar o seu código de compra?
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
