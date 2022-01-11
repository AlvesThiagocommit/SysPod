import Vue from 'vue'
import VueRouter from 'vue-router'
import ReadMore from 'vue-read-more'

import App from './App.vue'
import routes from './routes'
import store from './store'
import './bootstrap'
import storePlugin from './plugins/storePlugin'
import alertPlugin from './plugins/alertPlugin'
import modalPlugin from './plugins/modalPlugin'
import requestPlugin from './plugins/requestPlugin'
import uploadPlugin from './plugins/uploadPlugin'
import authTokenPlugin from './plugins/authTokenPlugin'
import utilsPlugin from './plugins/utilsPlugin'
import lazyloadPlugin from './plugins/lazyloadPlugin'

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.use(ReadMore)
Vue.use(storePlugin, { store })
Vue.use(alertPlugin)
Vue.use(modalPlugin)
Vue.use(requestPlugin)
Vue.use(uploadPlugin)
Vue.use(authTokenPlugin)
Vue.use(utilsPlugin)
Vue.use(lazyloadPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
