import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'
import VeRing from 'v-charts/lib/ring.common'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(VeRing.name, VeRing)
Vue.config.productionTip = false
Vue.use(VCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
