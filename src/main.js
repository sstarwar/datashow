import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// import './assets/intervention.css'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/app.css'
// import './lib/mui/css/mui.picker.css'
import mui from './lib/mui/js/mui.min.js'
// import './lib/mui/js/mui.js'
// import './lib/mui/js/mui.picker.js'
// import './lib/mui/js/mui.poppicker.js'
import VueVideoPlayer from 'vue-video-player'

import { Header, Button, Picker } from 'mint-ui'
Vue.component(Picker.name, Picker)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.mui = mui
Vue.use(VueVideoPlayer/* {
  options: global default options,
  events: global videojs events
} */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
