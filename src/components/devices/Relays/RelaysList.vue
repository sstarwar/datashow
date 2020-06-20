<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">控制器列表</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(relay,index) in relays_list" :key="index">
        <router-link class="mui-navigate-right" :to="{name:'relays_info',params:{relay: relay,relay_info: relays_info_list[index]}}">
            <span class="rooms-list">{{relay.fields.relay_name}}<div class="space"> </div>{{relay.fields.relay_num}}</span>
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
      relays_list: [],
      relays_info_list: [],
      sp: '   '
    }
  },
  methods: {
    getdata () {
      this.$axios.get('api/relays/app_relays_list/', {
        params: {
        }
      })
        .then(res => {
          console.log(res.data)
          this.relays_list = JSON.parse(res.data.relays_list)
          this.relays_info_list = res.data.relays_info_list
          console.log(this.relays_list)
          console.log(this.relays_info_list)
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
    font-size: 15px;
}
.span{
  padding-left: 5px;
}
</style>
