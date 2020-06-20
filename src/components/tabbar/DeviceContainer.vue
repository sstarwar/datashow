<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">设备清单</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/rooms">
            <span class="mui-icon-extra mui-icon-extra-classroom">温室</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/shelves">
            <span class="mui-icon-extra mui-icon-extra-holiday">花架</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/sensors">
            <span class="mui-icon-extra mui-icon-extra-topic">传感器</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/relays">
            <span class="mui-icon-extra mui-icon-extra-xiaoshuo">控制器</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/manure_devices">
            <span class="mui-icon-extra mui-icon-extra-cold">水肥设备</span>
        </router-link>
    </li>
    </ul>
</div>
</div>
</template>
<script>
export default {

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
</style>
