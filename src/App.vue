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
   <a class="mui-tab-item mui-active" href="#tabbar">
    <span class="mui-icon mui-icon-home"></span>
    <span class="mui-tab-label">首页</span>
   </a>
   <a class="mui-tab-item" href="#tabbar-with-chat">
    <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
    <span class="mui-tab-label">消息</span>
   </a>
   <a class="mui-tab-item" href="#tabbar-with-contact">
    <span class="mui-icon mui-icon-contact"></span>
    <span class="mui-tab-label">通讯录</span>
   </a>
   <a class="mui-tab-item" href="#tabbar-with-map">
    <span class="mui-icon mui-icon-gear"></span>
    <span class="mui-tab-label">设置</span>
   </a>
  </nav>
   <h1>123</h1>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
</style>
