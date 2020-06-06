<template>
    <div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart1">
                  <temperatureGraph unit=" ℃" title="土壤温度"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart2">
                <temperatureGraph unit="%" title="土壤湿度"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart3">
                <temperatureGraph unit=" ppm" title="二氧化碳"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart4">
                <temperatureGraph unit="%" title="虫情指数"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1 border">
            </div>
            <div class="mui-col-sm-10 mui-col-xs-10 content">
                <router-view></router-view>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1 border">
            </div>
        </div>
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
.border{
    padding-top: 30px;
}
.content{
    padding-top: 40px;
}
.chartcontainer{
    text-align: center;
}
/* .mui-col-sm-4{
    background-color: red;
    text-align: center;
} */
</style>
