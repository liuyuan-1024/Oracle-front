<script lang="ts">
export default {
  name: 'TrendBar'
}
</script>

<script setup lang="ts">
import Option from '@/components/Option.vue'
import { Chart } from '@antv/g2'
import { onMounted } from 'vue'

// onMounted(() => {
//   // 初始化图表实例
//   const chart = new Chart({
//     container: 'container',
//     theme: 'classic',
//     autoFit: true
//   })

//   // 声明可视化
//   chart
//     .line()
//     .data({
//       type: 'fetch',
//       value: '/g2/os/bmw-prod/728a4bdc-9d0b-49e0-a92f-6320a6cddeed.csv'
//     })
//     .encode('x', 'date')
//     .encode('y', 'unemployment')
//     .encode('series', 'division')
//     .encode('color', 'steelblue')

//   chart.interaction('tooltip', { filter: (d: any, i: any) => i < 10 })

//   // 渲染可视化
//   chart.render()
// })
</script>

<template>
  <div id="trend-bar">
    <div class="trend-menu">
      <Option title="瞄准">
        <SymbolIcon name="icon-test" size="10px" />
      </Option>
      <Option title="美元">
        <SymbolIcon name="meiyuan" size="12px" />
      </Option>
      <Option title="复制">
        <SymbolIcon name="fuzhi" size="10px" />
      </Option>
    </div>
    <div id="container"></div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

#trend-bar {
  position: relative;
  height: $trend_bar_height;
  padding: 6px;
  border-radius: 10px;
  background-color: $trend_bg_color;

  .trend-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 5.5%;
    height: 35%;
    border-radius: 10px;
    background-color: $trend_menu_bg_color;
  }

  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
