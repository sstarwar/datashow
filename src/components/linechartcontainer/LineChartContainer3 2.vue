<template>
    <div>
        <linechart title="二氧化碳" unit= " ppm" :value="co2"></linechart>
    </div>
</template>
<script>
import LineChart from '../graph/LineChart'
export default {
  props: {
    temperature: {
      type: Array,
      default: () => []
    },
    co2: {
      type: Array,
      default: () => []
    },
    humidty: {
      type: Array,
      default: () => []
    }
  },
  components: {
    linechart: LineChart
  }
}
</script>
<style scoped>
</style>
