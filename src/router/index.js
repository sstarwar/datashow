import Vue from 'vue'
import VueRouter from 'vue-router'
import DataContainer from '../components/tabbar/DataContainer.vue'
import ControllerContainer from '../components/tabbar/ControllerContainer.vue'
import SettingContainer from '../components/tabbar/SettingContainer.vue'
import DeviceContainer from '../components/tabbar/DeviceContainer.vue'
import LineChart from '../components/graph/LineChart.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/data ' },
  {
    path: '/data',
    component: DataContainer,
    children: [
      {
        path: 'linechart', component: LineChart
      }
    ]
  },
  { path: '/controller', component: ControllerContainer },
  { path: '/devices', component: SettingContainer },
  { path: '/setting', component: DeviceContainer }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active'
})

export default router
