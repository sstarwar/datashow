<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">温室列表</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(room,index) in rooms_list" :key="index">
        <router-link class="mui-navigate-right" :to="{name:'room_info',params:{room_info: room}}">
            <span class="rooms-list">{{room.fields.room_name}}</span>
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
      rooms_list: []
    }
  },
  methods: {
    getdata () {
      this.$axios.get('api/rooms/app_rooms_list/', {
        params: {
        }
      })
        .then(res => {
          console.log(res.data)
          console.log(res.data[0].fields.city)
          this.rooms_list = res.data
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
