<template>
  <div>
    <div id="hosts-paginate" class="row hosts scroll">
      <div class="col" v-if="$utils.has(hosts)">
        <div class="hosts-wrapper" v-for="host in hosts" :key="host.id">
          <div class="host d-flex">
            <div>
              <img class="cursor-pointer" :src="host.avatar" alt="">
            </div>
            <div class="details w-100">
              <h5 class="font-weight-bold mb-2">{{ host.name }}</h5>
              <p class="mb-2">{{ host.about }}</p>
              <div class="actions">
                <icon name="create" @click.native="edit(host)"></icon>
                <icon name="trash" class="ml-2" @click.native="remove(host)"></icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" v-else>
        <no-results type="hosts"></no-results>
      </div>
    </div>
    <hosts-edit-modal :hostId="host.id"></hosts-edit-modal>
    <hosts-delete-modal :host="host"></hosts-delete-modal>
  </div>
</template>

<script>
import Icon from '../Icon'
import NoResults from '../NoResults'
import HostsDeleteModal from './HostsDeleteModal'
import HostsEditModal from './HostsEditModal'

export default {
  components: {
    Icon,
    NoResults,
    HostsDeleteModal,
    HostsEditModal
  },

  computed: {
    hosts () {
      const paginate = this.$store.hosts().paginate().collect()
      const hosts = paginate.data
      return hosts
    }
  },

  data () {
    return {
      host: {}
    }
  },

  methods: {
    async paginate () {
      try {
        this.$request.hosts().paginate()
      } catch (error) {
        this.$alert.push(error)
      }
    },
    lazyload () {
      this.$lazyload.hosts()
    },
    edit (host) {
      this.host = host
      this.$modal.hosts().open('edit')
    },
    remove (host) {
      this.host = host
      this.$modal.hosts().open('delete')
    }
  },

  mounted () {
    this.paginate()
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
  .details
    padding-left: 25px
    h5
      font-size: 20px
  &:hover
    .actions
      .icon
        color: #9b9b9b
</style>
