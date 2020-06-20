<template>
  <div>
    <canvas :id="id" width="130%" height="130%">
    </canvas>
    <div class="datatype">{{title}}</div>
  </div>
</template>
<script>
// 这是环形图的模板，名字起得有点问题
const F2 = require('@antv/f2/lib/index')
const Legend = require('@antv/f2/lib/plugin/legend')
export default {
  data () {
    return {
      id: ''
      // unit: '℃',
      // title: '土壤温度'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    unit: {
      type: String
    },
    value: {
      type: Object
    }
  },
  methods: {
    guid () {
      this.id = Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)
    },

    dataChart () {
      const data = [this.value]
      const chart = new F2.Chart({
        id: this.id,
        plugins: Legend,
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.95,
        radius: 1
      })
      chart.guide().arc({
        start: [0, 0],
        end: [1, 99.98],
        top: true, // 是否覆盖
        style: {
          lineWidth: 10,
          stroke: '#aaa'
        }
      })
      chart.guide().text({
        position: ['50%', '50%'],
        content: this.value.y.toString() + this.unit,
        style: {
          fill: '#CCCCC'
          // 字体颜色
        }
      })
      chart.interval()
        .position('x*y')
        .size(15)
        .animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
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
    }
  },
  created () {
    this.guid()
  },
  mounted () {
    this.dataChart()
  },
  beforeUpdate () {
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
