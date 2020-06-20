<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">温室管理</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/rooms_list">
            <span class="mui-icon-extra mui-icon-extra-classroom">温室列表</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon-extra mui-icon-extra-classroom">添加新温室</span>
        </a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon-extra mui-icon-extra-classroom">新设备发现</span>
        </a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon-extra mui-icon-extra-classroom">温室最新概况</span>
        </a>
    </li>
        <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon-extra mui-icon-extra-classroom">全局温室预览</span>
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
