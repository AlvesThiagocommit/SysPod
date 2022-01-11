<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center sign-in-wrapper">
      <div class="col-md-5 border-right">
        <div class="aside" v-if="settings && settings.title">
          <img :src="settings.logo" class="logo mb-4" alt="">
          <h1 class="mb-4">{{ settings.title }}</h1>
          <p class="w-75 mb-0">{{ settings.description }}</p>
        </div>
        <div class="info" v-else>
          <h1 class="mb-4">Ready to setup!</h1>
          <p class="w-75 mb-0">Sign In and update your settings</p>
        </div>
      </div>
      <div class="col-md-3  ml-sm-4 m-0">
        <h4 class="mb-4">Sign In</h4>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" v-model="email" autofocus>
        </div>
        <div class="form-group mb-4">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <primary-button title="Sign In" icon="log-in" @click.native="signIn" isBlock="true"></primary-button>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton'
import Footer from '../components/Footer'

export default {
  components: {
    PrimaryButton,
    'footer-component': Footer
  },

  computed: {
    settings () {
      return this.$store.settings().settings().collect()
    }
  },

  data () {
    return {
      email: '',
      password: ''
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

    async signIn () {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        }
        await this.$request.auth().login(credentials)
        this.$router.push({ name: 'dashboard' })
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
  width: 110px
h1
  font-size: 32px
  font-weight: 900
.sign-in-wrapper
  height: calc(100% - 72px)
</style>
