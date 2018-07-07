// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import store from './vuex/store'
import axios from 'axios'
// eslint-disable-next-line
import aschJS from 'asch-js'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
import truncateTextFilter from './utils/truncateTextFilter'
import aschTimeFilter from './utils/aschTimeFilter'
import transWithdrawArgsFilter from './utils/transWithdrawArgsFilter'
import * as ModalDialogs from 'vue-modal-dialogs'
import VueNoty from 'vuejs-noty'
import Vuelidate from 'vuelidate'
import { port, host, dappId } from './dappConfig.json'

Vue.filter('truncate', truncateTextFilter)
Vue.filter('aschTime', aschTimeFilter)
Vue.filter('transWithdrawArgsFilter', transWithdrawArgsFilter)
Vue.use(Tooltip)
Vue.use(ModalDialogs)
Vue.use(VueNoty, {
  theme: 'relax'
})
Vue.use(Vuelidate)

Vue.use(SuiVue)
Vue.config.productionTip = false

let baseUrl = `${host}:${port}/api/dapps/${dappId}/`
console.log(`new dapp-endpoint is ${baseUrl}`)
Vue.prototype.$axios = axios.create({
  baseURL: baseUrl
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
