<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">花架列表</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="(shelf,index) in shelves_list" :key="index">
        <router-link class="mui-navigate-right" :to="{name:'shelf_info',params:{shelf_info: shelf,shelf_room_info: shelves_room_info[index]}}">
            <span class="rooms-list">{{shelves_room_info[index].room_name}}{{shelf.fields.name}}</span>
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
      shelves_list: [],
      shelves_room_info: []
    }
  },
  methods: {
    getdata () {
      this.$axios.get('api/shelves/app_shelves_list/', {
        params: {
        }
      })
        .then(res => {
          console.log(res.data)
          this.shelves_list = JSON.parse(res.data.shelves_list)
          this.shelves_room_info = res.data.shelves_room_info
          console.log(this.shelves_list)
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
