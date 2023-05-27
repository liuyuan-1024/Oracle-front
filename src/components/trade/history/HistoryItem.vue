<script lang='ts'>
export default {
  name: 'TradeHistoryItem',
};
</script>

<script lang='ts' setup>
import { IHistoryItemProps, Trend } from './History';

defineProps<{
  props: IHistoryItemProps
}>();
</script>

<template>
  <div id='trade-history-item'>
    <span id='date'>{{ props.date }}</span>
    <span id='price-trend' class='center-vertically'>
      <SymbolIcon color='#e0deeb' name='meiyuan' size='9px' />
      {{ props.price }}
      <SymbolIcon v-if='props.trend === Trend.rise' name='rise-copy' size='5px' />
      <SymbolIcon v-else name='decline-copy' size='5px' />
    </span>
    <span id='serialNumber' class='center-vertically'>
      <SymbolIcon class='clickable' name='fuzhi' size='8px' />
      {{ props.serialNumber }}
    </span>
    <span><SymbolIcon color='#6b6787' name='share' size='9px' /></span>
  </div>
</template>

<style lang='scss' scoped>
@import '../style.scss';

.center-vertically {
  display: flex;
  align-items: center;
}

#trade-history-item {
  &:hover {
    background-color: $trade-history-item_hover;
  }

  background-color: $trade-history-item;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: $trade_history_item_radius;
  height: $trade_history_item_height;

  #date,
  #price-trend,
  #serialNumber {
    width: 25%;
  }
}
</style>
