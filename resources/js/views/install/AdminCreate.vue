<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col col-md-3 my-5">
        <h3 class="text-center mb-4">Criar Administrador</h3>
        <form class="mb-4">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="admin.email">
          </div>
          <div class="form-group mb-4">
            <input type="password" class="form-control" placeholder="Password" v-model="admin.password">
          </div>
          <primary-button class="btn-block" icon="log-in" title="Next" @click.native="next()"></primary-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../../components/PrimaryButton'

export default {
  components: {
    PrimaryButton
  },

  data () {
    return {
      admin: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async next () {
      try {
        await this.$request.users().create(this.admin)
        this.$router.push({ name: 'settingsCreate' })
      } catch (error) {
        this.$alert.push(error)
      }
    }
  },

  beforeRouteEnter (to, from, next) {
    if (from.name !== 'verify') return next('/dashboard')
    next()
  }
}
</script>
