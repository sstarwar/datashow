<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">传感器</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/sensors_list">
            <span class="mui-icon mui-icon-videocam">传感器列表</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon mui-icon-videocam">添加新传感器</span>
        </a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon mui-icon-videocam">传感器类型</span>
        </a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon mui-icon-videocam">添加新的传感器类型</span>
        </a>
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
