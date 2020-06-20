import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/app.css'
import mui from './lib/mui/js/mui.min.js'
import { Header, Button } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.mui = mui
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
