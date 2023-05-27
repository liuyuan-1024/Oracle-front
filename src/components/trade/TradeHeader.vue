<script lang='ts'>
export default {
  name: 'TradeHeader',
};
</script>

<script lang='ts' setup>
import { ref } from 'vue';

const options = [
  {
    label: 'Trade History',
    value: 'song0',
  },
  {
    label: 'World',
    value: 'song1',
  },
  {
    label: 'Word',
    value: 'song2',
  },
];

let value = ref(options[0].value);
</script>

<template>
  <div id='trade-header'>
    <n-select v-model:value='value' :options='options' />
    <span>BSC</span>
  </div>
</template>

<style lang='scss' scoped>
@import './style.scss';
@import '@/styles/ui/select.scss';

#trade-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $trade_header_height;
}
</style>
