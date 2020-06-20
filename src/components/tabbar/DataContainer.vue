<template>
    <div>
        <div class="mui-content">
          <div class="mui-content-padded">
            <select class="mui-btn mui-btn-block" v-model="room">
              <option value="01">当前温室：水肥温室</option>
              <option value="02">当前温室：基质肥温室</option>
            </select>
          </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart1">
                  <temperatureGraph unit=" ℃" title="空气温度" :value="temperature_latest"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart2">
                <temperatureGraph unit="%" title="空气湿度" :value="humidty_latest"></temperatureGraph>
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
                <temperatureGraph unit=" ppm" title="二氧化碳" :value="co2_latest"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2">
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4 chartcontainer">
                <router-link to="/data/linechart4">
                <temperatureGraph unit="个" title="花架数量" :value="shelve_num"></temperatureGraph>
                </router-link>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1 border">
            </div>
            <div class="mui-col-sm-10 mui-col-xs-10 content">
                <router-view :temperature="temperature_series" :co2="co2_series" :humidty="humidty_series"></router-view>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1 border">
            </div>
        </div>
    </div>
</template>
<script>

import temperature from '../graph/Temperature'

export default {
  data () {
    return {
      room: '01',
      temperature_latest: {
        x: '1',
        y: 10
      },
      co2_latest: {
        x: '1',
        y: 698
      },
      humidty_latest: {
        x: '1',
        y: 62.0
      },
      shelve_num: {
        x: '1',
        y: 3
      },
      temperature_series: [],
      co2_series: [],
      humidty_series: []
    }
  },
  methods: {
    timestampToTime (timestamp) {
      var date = new Date(timestamp * 1000)
      // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
    },
    getdata () {
      this.$axios.get('/api/datashow/', {
        params: {
          room_num: this.room
        }
      })
        .then((res) => {
          console.log('begin')
          console.log(res.data)
          // console.log(JSON.parse(res.data.data_record_temperature))
          // 温度
          var dataRecordTemperature = JSON.parse(res.data.data_record_temperature)
          console.log(dataRecordTemperature)
          this.temperature_latest.y = dataRecordTemperature[9].fields.sensor_value
          console.log(this.timestampToTime(dataRecordTemperature[9].fields.collect_time))
          this.temperature_series = []
          for (var i = 0; i < 10; i++) {
            var tmpObject = {
              time: this.timestampToTime(dataRecordTemperature[i].fields.collect_time),
              tem: dataRecordTemperature[i].fields.sensor_value
            }
            this.temperature_series.push(tmpObject)
          }

          // co2
          var co2 = JSON.parse(res.data.data_record_co2)
          console.log(co2)
          this.co2_latest.y = co2[9].fields.sensor_value
          this.co2_series = []
          for (i = 0; i < 10; i++) {
            tmpObject = {
              time: this.timestampToTime(dataRecordTemperature[i].fields.collect_time),
              tem: co2[i].fields.sensor_value
            }
            this.co2_series.push(tmpObject)
          }

          // 湿度
          var humidty = JSON.parse(res.data.data_record_humidty)
          console.log(humidty)
          this.humidty_latest.y = humidty[9].fields.sensor_value
          this.humidty_series = []
          for (i = 0; i < 10; i++) {
            tmpObject = {
              time: this.timestampToTime(dataRecordTemperature[i].fields.collect_time),
              tem: humidty[i].fields.sensor_value
            }
            this.humidty_series.push(tmpObject)
          }

          // 花架数量
          var shelves = JSON.parse(res.data.shelves)
          console.log(shelves)
        })
    }
  },
  created () {
    this.getdata()
    console.log('createad')
  },
  mounted () {
    console.log('mounted')
    this.mui.alert('aaa')
  },
  watch: {
    room: {
      handler (val, oldval) {
        this.getdata()
      },
      deep: true
    }
  },
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
