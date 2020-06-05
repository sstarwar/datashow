<template>
    <div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <router-link to="/data/linechart">
                  <temperatureGraph unit=" ℃" title="土壤温度"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <temperatureGraph></temperatureGraph>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <temperatureGraph></temperatureGraph>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <temperatureGraph></temperatureGraph>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import temperature from '../graph/Temperature'
export default {
  components: {
    temperatureGraph: temperature
  }
}
</script>
<style scoped>
/* .mui-col-sm-4{
    background-color: red;
    text-align: center;
} */
</style>
