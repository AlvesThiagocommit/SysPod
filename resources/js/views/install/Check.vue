<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col col-md-3">
        <h3 class="text-center">Check configuration</h3>
        <p class="text-center mb-4">Check and verify your server configuration before run installation</p>
        <ul class="list-group mb-4">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <p class="mb-0">Database</p>
            <icon :class="bindIconClass(config.database)" :name="bindIconName(config.database)"></icon>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <p class="mb-0">Storage</p>
            <icon :class="bindIconClass(config.storage)" :name="bindIconName(config.storage)"></icon>
          </li>
        </ul>
        <primary-button v-if="isVerified || isChecking" class="btn-block" :icon="isChecking ? '' : 'arrow-round-forward'" :title="isChecking ? 'Checking...' : 'Next'" @click.native="next()" :disabled="isChecking"></primary-button>
        <primary-button v-else class="btn-block" icon="checkbox-outline" title="Recheck" @click.native="verify()"></primary-button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Icon from '../../components/Icon'
import PrimaryButton from '../../components/PrimaryButton'

export default {
  components: {
    Icon,
    PrimaryButton
  },

  data () {
    return {
      config: {
        database: false,
        storage: false
      },
      isChecking: true
    }
  },

  computed: {
    isVerified () {
      const isVerified = _.every(this.config, Boolean)
      return isVerified
    }
  },

  methods: {
    async verify () {
      try {
        this.isChecking = true
        this.config = await this.$request.server().verify()
        this.isChecking = false
      } catch (error) {
        this.$alert.push(error)
        this.isChecking = false
      }
    },
    bindIconClass (value) {
      const className = value ? 'green' : 'red'
      if (this.isChecking) return 'text-muted'
      return className
    },
    bindIconName (value) {
      const name = (value || this.isChecking) ? 'checkmark-circle' : 'close-circle'
      return name
    },
    next () {
      this.$router.push({ name: 'verify' })
    }
  },

  mounted () {
    this.verify()
  }
}
</script>

<style lang="sass" scoped>
@import '../../../sass/variables'

.green
  color: $green
.red
  color: $red
.icon
  font-size: 1.4em
</style>
