<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">控制器</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/relays_list">
            <span class="mui-icon-extra mui-icon-extra-classroom">控制器列表</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
            <span class="mui-icon-extra mui-icon-extra-classroom">添加新控制器</span>
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
