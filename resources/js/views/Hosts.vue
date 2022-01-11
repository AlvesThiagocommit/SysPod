<template>
  <page>
    <div class="row">
      <div class="col-md-8 offset-md-2 px-md-5">
        <hosts-header></hosts-header>
        <hosts-list v-if="active === 'paginate'"></hosts-list>
        <hosts-trashed v-else></hosts-trashed>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../components/Page'
import HostsHeader from '../components/hosts/HostsHeader'
import HostsList from '../components/hosts/HostsList'
import HostsTrashed from '../components/hosts/HostsTrashed'

export default {
  components: {
    Page,
    HostsHeader,
    HostsList,
    HostsTrashed
  },
  computed: {
    active () {
      return this.$store.hosts().active().collect()
    }
  }
}
</script>
