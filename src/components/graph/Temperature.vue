<template>
  <div>
    <canvas id="myChart" width="260px" height="260px"></canvas>
  </div>
  <!-- <div class="h-ring">
      <div class="ring-relative">
        <ve-ring :data="chartData" :settings="chartSettings" :legend-visible="false"></ve-ring>
      </div>
  </div> -->
</template>

<script>
const F2 = require('@antv/f2/lib/index')

export default {
  data () {
    return {
    }
  },
  methods: {
    dataChart () {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      chart.source(data)
      chart.interval().position('genre*sold').color('genre')
      chart.render()
    }
  },
  mounted () {
    this.dataChart()
  }
}
//     this.chartSettings = {
//       roseType: 'radius',
//       dimension: 'type',
//       metrics: 'value',
//       label: {
//         normal: {
//           show: false
//         }
//       },
//       radius: [
//         '30', '55'
//       ],
//       offsetY: 56
//     //   dataType: function(v){
//     //       return v+50+'℃';
//     //   }
//     }
//     return {
//       tooltip: {
//         trigger: 'none'
//       },
//       chartExtend: {
//         legend: {
//           show: false
//         }
//       },
//       chartData: {
//         columns: ['type', 'value'],
//         rows: [
//           { type: '0', value: 37.5 },
//           { type: '1', value: 12.5 }
//         ]
//       }
//     }
//   }
// }
</script>
<style scoped>
</style>
