<template>
  <div class="chartcontainer">
    <canvas :id="id" height="200%">
    </canvas>
    <div class="title">{{title}}</div>
    <!-- <div class="datatype">{{title}}</div> -->
  </div>
</template>
<script>
const F2 = require('@antv/f2/lib/index')
export default {
  data () {
    return {
      id: '',
      mask: 'HH:mm'
    }
  },
  props: {
    x_type: {
      type: String,
      default: '01'
    },
    title: {
      type: String,
      default: ''
    },
    unit: {
      type: String
    },
    value: {
      type: Array,
      default: () => {
        return [{
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
      }
    }
  },
  methods: {
    guid () {
      this.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)
    },

    dataChart () {
      const data = this.value
      const chart = new F2.Chart({
        id: this.id,
        pixelRatio: window.devicePixelRatio
      })

      const defs = {
        time: {
          type: 'timeCat',
          mask: this.mask,
          tickCount: 3,
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0,
          alias: '日均温度'
        }
      }
      console.log(defs.time.mask)
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
  watch: {
    value: {
      handler (val, oldval) {
        this.dataChart()
      },
      deep: true
    },
    x_type: {
      handler (val, oldval) {
        console.log(val)
        if (val === '01') this.mask = 'DD:HH:mm'
        else if (val === '02') this.mask = 'MM:DD:HH'
        else this.mask = 'YYYY:MM:DD'
        this.dataChart()
        console.log('a')
      },
      deep: true
    }
  },
  created () {
    this.guid()
    console.log(this.x_type)
  },
  mounted () {
    this.dataChart()
    console.log('b')
  }
}
</script>
<style scoped>
.title{
  font-size:80%;
  text-align: center;
}
.chartcontainer{
    text-align:center;
}
</style>
