<script lang='ts'>
export default {
  name: 'TradeHistory',
};
</script>

<script lang='ts' setup>
import { reactive } from 'vue';
import { IHistoryItemProps, Trend } from './History';
import TradeHistoryItem from './HistoryItem.vue';

const items = reactive<IHistoryItemProps[]>([
  {
    date: new Date().toLocaleDateString(),
    price: 981.47577,
    trend: Trend.fall,
    serialNumber: '0x23ra4f21td',
  },
  {
    date: new Date().toLocaleDateString(),
    price: 1078.63615,
    trend: Trend.rise,
    serialNumber: '95FxZ71dS4tF',
  },
  {
    date: new Date().toLocaleDateString(),
    price: 875.2483365,
    trend: Trend.fall,
    serialNumber: '5x00rV4fc2fF',
  },
  {
    date: new Date().toLocaleDateString(),
    price: 1004.1789,
    trend: Trend.fall,
    serialNumber: 'Sx46Z11dFGts',
  },
]);
</script>

<template>
  <div id='trade-history'>
    <TradeHistoryItem
      v-for='(item, index) in items'
      :key='index'
      :props='item'
    />
  </div>
</template>

<style lang='scss' scoped>
@import '../style.scss';

#trade-history {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $trade_history_height;
}
</style>
