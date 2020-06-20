<template>
    <div>
        <linechart title="土壤温度" unit=" ℃" :value="temperature"></linechart>
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
