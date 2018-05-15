// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import store from './vuex/store'
import axios from 'axios'
import aschJS from 'asch-js'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
import filter from './utils/filter'
import aschTimeFilter from './utils/aschTimeFilter'
import transWithdrawArgsFilter from './utils/transWithdrawArgsFilter'
import * as ModalDialogs from 'vue-modal-dialogs'
import VueNoty from 'vuejs-noty'
import Vuelidate from 'vuelidate'

Vue.filter('truncate', filter)
Vue.filter('aschTime', aschTimeFilter)
Vue.filter('transWithdrawArgsFilter', transWithdrawArgsFilter)
Vue.use(Tooltip)
Vue.use(ModalDialogs)
Vue.use(VueNoty, {
  theme: 'relax'
})
Vue.use(Vuelidate)

console.log(aschJS)
Vue.use(SuiVue)
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: process.env.API_ENDPOINT
})

console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
