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
import Rooms from '../components/devices/Rooms.vue'
import RoomsList from '../components/devices/Rooms/RoomsList.vue'
import RoomInfo from '../components/devices/Rooms/RoomInfo.vue'
import Shelves from '../components/devices/Shelves.vue'
import ShelvesList from '../components/devices/Shelves/ShelvesList.vue'
import ShelfInfo from '../components/devices/Shelves/ShelfInfo.vue'

import Sensors from '../components/devices/Sensors.vue'
import SensorsList from '../components/devices/Sensors/SensorsList.vue'
import SensorInfo from '../components/devices/Sensors/SensorInfo.vue'

import Relays from '../components/devices/Relays.vue'
import RelaysList from '../components/devices/Relays/RelaysList.vue'
import RelaysInfo from '../components/devices/Relays/RelaysInfo.vue'


import ManureDevices from '../components/devices/ManureDevices.vue'
import MainInterface from '../components/MainInterface.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: MainInterface,
    redirect: '/data/linechart1',
    children: [
      {
        path: 'data',
        component: DataContainer,
        redirect: '/data/linechart1',
        children: [
          {
            path: 'linechart1',
            component: LineChartContainer1
          },
          {
            path: 'linechart2',
            component: LineChartContainer2
          },
          {
            path: 'linechart3',
            component: LineChartContainer3
          },
          {
            path: 'linechart4',
            component: LineChartContainer4
          }
        ]
      },
      {
        path: 'controller',
        component: ControllerContainer
      },
      {
        path: 'devices',
        component: DeviceContainer
      },
      {
        path: 'rooms',
        component: Rooms
      },
      {
        path: 'rooms_list',
        component: RoomsList
      },
      {
        path: 'room_info',
        name: 'room_info',
        component: RoomInfo
      },
      {
        path: 'shelves',
        component: Shelves
      },
      {
        path: 'shelves_list',
        component: ShelvesList
      },
      {
        path: 'shelf_info',
        name: 'shelf_info',
        component: ShelfInfo
      },
      {
        path: 'sensors',
        component: Sensors
      },
      {
        path: 'sensors_list',
        component: SensorsList
      },
      {
        path: 'sensor_info',
        name: 'sensor_info',
        component: SensorInfo
      },
      {
        path: 'relays',
        component: Relays
      },
      {
        path: 'relays_list',
        component: RelaysList
      },
      {
        path: 'relays_info',
        name: 'relays_info',
        component: RelaysInfo
      },
      {
        path: 'manure_devices',
        component: ManureDevices
      },
      {
        path: 'setting',
        component: SettingContainer
      }
    ]
  }

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
