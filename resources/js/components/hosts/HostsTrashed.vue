<template>
  <div>
    <div id="hosts-trash" class="row hosts scroll">
      <div class="col" v-if="$utils.has(hosts)">
        <div class="hosts-wrapper" v-for="host in hosts" :key="host.id">
          <div class="host d-flex">
            <div>
              <img class="cursor-pointer" :src="host.avatar" alt="">
            </div>
            <div class="details w-100 text-muted">
              <h5 class="font-weight-bold mb-2">{{ host.name }}</h5>
              <p class="mb-2">{{ host.about }}</p>
              <div class="actions">
                <icon name="refresh" @click.native="rollback(host)"></icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" v-else>
        <no-results type="trashed hosts"></no-results>
      </div>
    </div>
    <hosts-rollback-modal :host="host"></hosts-rollback-modal>
  </div>
</template>

<script>
import Icon from '../Icon'
import NoResults from '../NoResults'
import HostsRollbackModal from './HostsRollbackModal'

export default {
  components: {
    Icon,
    NoResults,
    HostsRollbackModal
  },

  computed: {
    hosts () {
      const trash = this.$store.hosts().trash().collect()
      const hosts = trash.data
      return hosts
    }
  },

  data () {
    return {
      host: {}
    }
  },

  methods: {
    async trash () {
      try {
        this.$request.hosts().trash()
      } catch (error) {
        this.$alert.push(error)
      }
    },
    lazyload () {
      this.$lazyload.hostsTrash()
    },
    rollback (host) {
      this.host = host
      this.$modal.hosts().open('rollback')
    }
  },

  mounted () {
    this.trash()
    this.lazyload()
  }
}
</script>

<style lang="sass" scoped>
.hosts
  height: calc(100vh - 300px)
  .hosts-wrapper
    padding: 12px 0
.host
  img
    width: 110px
    height: 110px
    object-fit: cover
    filter: grayscale(100%)
  .details
    padding-left: 25px
    h5
      font-size: 20px
  &:hover
    .actions
      .icon
        color: #9b9b9b
</style>
