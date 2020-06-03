import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './lib/mui/css/mui.min.css'
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
