<template>
  <div>
    <canvas :id="id">
    </canvas>
    <!-- <div class="datatype">{{title}}</div> -->
  </div>
</template>
<script>
const F2 = require('@antv/f2/lib/index')
export default {
  data () {
    return {
      id: '',
      value: {
        x: '1',
        y: 70
      }
      // unit: '℃',
      // title: '土壤温度'
    }
  },
  //   props: {
  //     title: {
  //       type: String,
  //       default: ''
  //     },
  //     unit: {
  //       type: String
  //     }
  //   },
  methods: {
    guid () {
      this.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)
    },

    dataChart () {
      const data = [{
        time: '2016-08-08 00:00:00',
        tem: 10
      }, {
        time: '2016-08-08 00:10:00',
        tem: 22
      }, {
        time: '2016-08-08 00:30:00',
        tem: 20
      }, {
        time: '2016-08-09 00:35:00',
        tem: 26
      }, {
        time: '2016-08-09 01:00:00',
        tem: 20
      }, {
        time: '2016-08-09 01:20:00',
        tem: 26
      }, {
        time: '2016-08-10 01:40:00',
        tem: 28
      }, {
        time: '2016-08-10 02:00:00',
        tem: 20
      }, {
        time: '2016-08-10 02:20:00',
        tem: 18
      }]

      const chart = new F2.Chart({
        id: this.id,
        pixelRatio: window.devicePixelRatio
      })

      const defs = {
        time: {
          type: 'timeCat',
          mask: 'MM/DD',
          tickCount: 3,
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: '日均温度'
        }
      }
      chart.source(data, defs)
      chart.axis('time', {
        label: function label (text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.tooltip({
        showCrosshairs: true
      })
      chart.line().position('time*tem').shape('smooth')
      chart.point().position('time*tem').shape('smooth')
        .style({
          stroke: '#fff',
          lineWidth: 1
        })
      chart.render()
    }
  },
  created () {
    this.guid()
  },
  mounted () {
    this.dataChart()
  }
}
</script>
<style scoped>
.datatype{
  font-size:80%;
  padding-left: 10px;
  text-align: center;
}
</style>
