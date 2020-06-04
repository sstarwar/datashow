<template>
    <div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <temperatureGraph></temperatureGraph>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2">
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
            <div class="mui-col-sm-2 mui-col-xs-2">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
                <temperatureGraph></temperatureGraph>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
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
temperatureGraph{
    width: 75%;
    height: 75%;
}
</style>
