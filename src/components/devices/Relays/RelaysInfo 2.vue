<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">控制器:{{relay_info.relay_name}}</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(val, key, index) in relay_info" :key="index">
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
      relay: {
        type: Object,
        default: () => {}
      },
      relay_info: {
        type: Object,
        default: () => {}
      },
      dict: {
        relay_num: '控制器编号',
        relay_name: '控制器名称',
        belongto: '所属',
        status: '当前取值',
        created_time: '创建时间',
        is_online: '是否在线',
        relay_type_id: '控制器类型编号'

      },
      boolDict: ['False', 'True']
    }
  },
  methods: {
    reduceData () {
      this.relay_info.relay_num = this.relay.fields.relay_num
      this.relay_info.relay_name = this.relay.fields.relay_name
      this.relay_info.relay_type_id = this.relay.fields.relay_type_id
      this.relay_info.status = this.relay.fields.status
      if (this.relay.fields.is_online === '1') {
        this.relay_info.is_online = 'True'
      } else {
        this.relay_info.is_online = 'False'
      }
    }
  },
  created () {
    this.relay_info = this.$route.params.relay_info
    this.relay = this.$route.params.relay
    this.reduceData()
    console.log(this.relay)
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
