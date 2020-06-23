<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">传感器:{{sensor_info.sensor_type}}</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(val, key, index) in sensor_info" :key="index">
            <span class="rooms-list">{{dict[key]}}:{{val}}</span>
    </li>
    </ul>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      sensor: {
        type: Object,
        default: () => {}
      },
      sensor_info: {
        type: Object,
        default: () => {}
      },
      dict: {
        sensor_num: '传感器编号',
        belongto: '所属',
        sensor_type: '传感器类型',
        sensor_type_unit: '传感器计量单位',
        status: '状态',
        created_time: '创建时间'
      },
      boolDict: ['False', 'True']
    }
  },
  methods: {
    reduceData () {
      this.sensor_info.sensor_num = this.sensor.fields.sensor_num
      if (this.sensor.fields.status === '1') {
        this.sensor_info.status = 'True'
      } else {
        this.sensor_info.status = 'False'
      }
    }
  },
  created () {
    this.sensor_info = this.$route.params.sensor_info
    this.sensor = this.$route.params.sensor
    this.reduceData()
    console.log(this.sensor)
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
