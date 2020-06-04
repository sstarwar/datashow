<template>
  <div id="app">
    <!-- header -->
  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
   <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
   </router-link>
  <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
    <!-- router-view -->
    <!-- tabbar -->
  <nav class="mui-bar mui-bar-tab">
   <router-link class="mui-tab-item" to="/data">
    <span class="mui-icon mui-icon-extra mui-icon-extra-trend"></span>
    <span class="mui-tab-label">数据</span>
   </router-link>
   <router-link class="mui-tab-item" to="/controller">
    <span class="mui-icon mui-icon-settings"></span>
    <span class="mui-tab-label">控制</span>
   </router-link>
   <router-link class="mui-tab-item" to="devices">
    <span class="mui-icon mui-icon-extra mui-icon-extra-filter"></span>
    <span class="mui-tab-label">设备</span>
   </router-link>
   <router-link class="mui-tab-item" to="setting">
    <span class="mui-icon mui-icon-gear"></span>
    <span class="mui-tab-label">设置</span>
   </router-link>
  </nav>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
</style>
