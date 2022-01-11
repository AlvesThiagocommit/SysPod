<template>
  <div class="hosts" v-if="$utils.has(hosts)">
    <div class="row host mb-4" v-for="host in hosts" :key="host.id">
      <div class="col-md-12">
        <div class="avatar-wrapper position-relative mb-3">
          <img class="avatar" :src="host.avatar" alt="">
          <social
            :facebook="host.facebook"
            :instagram="host.instagram"
            :twitter="host.twitter"
            :linkedin="host.linkedin"
            :youtube="host.youtube"
            class="position-absolute bg-white py-1">
          </social>
        </div>
        <h6 class="name font-weight-bold mb-2">{{ host.name }}</h6>
        <p>{{ host.about }}</p>
      </div>
    </div>
  </div>
  <no-results type="hosts" v-else></no-results>
</template>

<script>
import Social from '../Social'
import NoResults from '../NoResults'

export default {
  components: {
    Social,
    NoResults
  },

  computed: {
    hosts () {
      return this.$store.hosts().list().collect()
    }
  },

  methods: {
    async list () {
      try {
        this.$request.hosts().list()
      } catch (error) {
        this.$alert.push(error)
      }
    }
  },

  mounted () {
    this.list()
  }
}
</script>

<style lang="sass" scoped>
.host
  .avatar-wrapper
    .social
      bottom: 16px
      font-size: 1.6em
      padding-left: 30px
      padding-right: 30px
    .avatar
      height: 388px
      width: 255px
      object-fit: cover
    .name
      font-size: 19px
</style>
