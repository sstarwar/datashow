<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">温室具体信息</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(val, key, index) in room_info.fields" :key="index">
            <span class="rooms-list">{{room_dict[key]}}:{{val}}</span>
    </li>
    </ul>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      room_info: {
        type: Object,
        default: () => {}
      },
      room_dict: {
        room_num: '温室编号',
        room_name: '温室名称',
        city: '城市',
        area: '区域',
        status: '状态',
        created_time: '创建时间'
      }
    }
  },
  methods: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp * 1000)
      // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
    }
  },
  created () {
    this.room_info = this.$route.params.room_info
    this.room_info.fields.created_time = this.timestampToTime(this.room_info.fields.created_time)
    console.log('info')
    console.log(this.room_info)
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
