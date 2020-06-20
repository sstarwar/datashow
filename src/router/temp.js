import Vue from 'vue'
import VueRouter from 'vue-router'
import DataContainer from '../components/tabbar/DataContainer.vue'
import ControllerContainer from '../components/tabbar/ControllerContainer.vue'
import SettingContainer from '../components/tabbar/SettingContainer.vue'
import DeviceContainer from '../components/tabbar/DeviceContainer.vue'
import LineChartContainer1 from '../components/linechartcontainer/LineChartContainer1.vue'
import LineChartContainer2 from '../components/linechartcontainer/LineChartContainer2.vue'
import LineChartContainer3 from '../components/linechartcontainer/LineChartContainer3.vue'
import LineChartContainer4 from '../components/linechartcontainer/LineChartContainer4.vue'
import MainInterface from "../componets/MainInterface.vue"

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/data/linechart1' },
  {
    path: '/data',
    redirect: '/data/linechart1',
    component: DataContainer,
    children: [
      {
        path: 'linechart1', component: LineChartContainer1
      },
      {
        path: 'linechart2', component: LineChartContainer2
      },
      {
        path: 'linechart3', component: LineChartContainer3
      },
      {
        path: 'linechart4', component: LineChartContainer4
      }
    ]
  },
  { path: '/controller', component: ControllerContainer },
  { path: '/devices', component: DeviceContainer },
  { path: '/setting', component: SettingContainer }
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
