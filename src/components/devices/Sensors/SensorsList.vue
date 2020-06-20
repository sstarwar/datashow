<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">传感器列表</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(sensor,index) in sensors_list" :key="index">
        <router-link class="mui-navigate-right" :to="{name:'sensor_info',params:{sensor: sensor,sensor_info: sensors_info_list[index]}}">
            <span class="rooms-list">{{sensor.fields.sensor_num}}  {{sensors_info_list[index].sensor_type}}/{{sensors_info_list[index].sensor_type_unit}}</span>
        </router-link>
    </li>
    </ul>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      sensors_list: [],
      sensors_info_list: []
    }
  },
  methods: {
    getdata () {
      this.$axios.get('api/sensors/app_sensors_list/', {
        params: {
        }
      })
        .then(res => {
          console.log(res.data)
          this.sensors_list = JSON.parse(res.data.sensors_list)
          this.sensors_info_list = res.data.sensors_info_list
          console.log(this.sensors_list)
          console.log(this.sensors_info_list)
        })
    }
  },
  created () {
    this.getdata()
  }
}
</script>
<style scoped>
.title{
    margin: 20px 15px 10px;
    color: #6d6d72;
    font-size: 15px;
}
.mui-control-content{
    display: block;
}
.rooms-list{
    font-size: 15px
}
</style>
