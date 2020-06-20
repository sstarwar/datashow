<template>
  <div>
    <div id="tabbar-with-map" class="mui-control-content">
    <div class="title">花架</div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/shelves_list">
            <span class="mui-icon-extra mui-icon-extra-holiday">花架列表</span>
        </router-link>
    </li>
    <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/shelves">
            <span class="mui-icon-extra mui-icon-extra-holiday">添加新花架</span>
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
