<template>
    <div class="container">
        <div class="line">
        </div>
        <select class="mui-btn mui-btn-block" v-model="data_type">
              <option value="01">选择类型：空气温度</option>
              <option value="02">选择类型：空气湿度</option>
              <option value="03">选择类型：CO2浓度</option>
        </select>
        <div class="line">
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-10 mui-col-xs-10 linechart-container">
                <LineChart class="linechart" :value='value' :title='title' :unit='unit' :x_type='x_type'></LineChart>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
        <div class="line">
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
            <div class="mui-col-sm-10 mui-col-xs-10">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
            </div>
            <div class="mui-col-sm-1 mui-col-xs-1">
            </div>
        </div>
    </div>
</template>
<script>
import LineChart from './LineChart.vue'
export default {
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
    onValuesChange (picker, values) {
      if (values[0] === '基质肥温室') this.room_num = '01'
      else this.room_num = '02'
      if (values[1] === '本日') this.x_type = '01'
      else if (values[1] === '本周') this.x_type = '02'
      else this.x_type = '03'
      console.log(this.room_num)
      console.log(this.x_type)
      this.getdata()
    },
    getdata () {
      this.$axios.get('/api/app_data_detail/', {
        params: {
          room_num: this.room_num,
          data_type: this.data_type,
          x_type: this.x_type
        }
      }).then((res) => {
        const values = JSON.parse(res.data.data)
        console.log(values)
        const valuesLength = values.length
        this.value = []
        for (var i = 0; i < valuesLength; i++) {
          var temObj = {
            time: this.timestampToTime(values[i].fields.collect_time),
            tem: values[i].fields.sensor_value
          }
          this.value.push(temObj)
        }
      })
    }
  },
  components: {
    LineChart: LineChart
  },
  watch: {
    data_type: {
      handler (val, oldval) {
        if (val === '01') {
          this.title = '空气温度'
          this.unit = '℃'
        } else if (val === '02') { 
          this.title = '空气湿度'
          this.unit = ' %'
        } else {
          this.title = 'CO2浓度'
          this.unit = 'ppm'
        }
      },
      deep: true
    }
  },
  data () {
    return {
      data_type: '01',
      room_num: '01',
      x_type: '01',
      value: [],
      title: '空气温度',
      unit: '℃',
      slots: [
        {
          flex: 1,
          values: ['基质肥温室', '水肥温室'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['本日', '本周', '本月'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  }
}
</script>
<style scoped>
    body{
        background-color:rgb(239, 239, 244) ;
    }
    .container{
        background-color: white;
    }
    .line{
        width:100%;
        height: 20px;
        background-color: rgb(239, 239, 244);
    }
    .linechart-container{
        height: 420px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mui-btn{
        padding-left:2%
    }
</style>

