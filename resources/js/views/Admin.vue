<template>
  <page>
    <div class="row">
      <div class="col-md-8 offset-md-2 px-md-5 mt-4">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email" autofocus v-model="admin.email">
            </div>
            <div class="form-group mb-5">
              <input type="password" class="form-control" placeholder="Password" v-model="admin.password">
            </div>
            <primary-button title="Save" icon="save" class="m-auto" @click.native="edit()"></primary-button>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../components/Page'
import PrimaryButton from '../components/PrimaryButton'

export default {
  components: {
    Page,
    PrimaryButton
  },

  computed: {
    admin () {
      return this.$store.users().users().collect()
    }
  },

  methods: {
    async read () {
      try {
        this.$request.users().read()
      } catch (error) {
        this.$alert.push(error)
      }
    },
    async edit () {
      try {
        const user = {
          email: this.admin.email,
          password: this.admin.password
        }
        await this.$request.users().edit(user)
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
