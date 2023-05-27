<script lang='ts'>
export default {
  name: 'Details',
};
</script>

<script lang='ts' setup>
import { reactive } from 'vue';
import { IDetailsItemProps } from './Details';
import DetailsItem from './DetailsItem.vue';

// 左侧图标的颜色
const iconColors: string[] = ['#f3768d', '#09ddff', '#d069ff'];

// 左侧图标的背景色
const iconBackgroundColors: string[] = ['#4d3e59', '#374465', '#443c65'];

const items = reactive<IDetailsItemProps[]>([
  {
    iconName: 'sigma',
    iconColor: iconColors[0],
    iconBackgroundColor: iconBackgroundColors[0],
    description: 'Total Liquidity',
    value: 2603805.5,
  },
  {
    iconName: 'zhexiantu',
    iconColor: iconColors[1],
    iconBackgroundColor: iconBackgroundColors[1],
    description: 'Daily Volume',
    value: 2372139.74,
  },
  {
    iconName: 'sigma',
    iconColor: iconColors[2],
    iconBackgroundColor: iconBackgroundColors[2],
    description: 'Polled BSC',
    value: 1200.6,
  },
  {
    iconName: 'zhexiantu',
    iconColor: iconColors[0],
    iconBackgroundColor: iconBackgroundColors[0],
    description: 'Pooled Cake',
    value: 271.35,
  },
  {
    iconName: 'sigma',
    iconColor: iconColors[1],
    iconBackgroundColor: iconBackgroundColors[1],
    description: 'Total Liquidity',
    value: 2603805.5,
  },
  {
    iconName: 'zhexiantu',
    iconColor: iconColors[2],
    iconBackgroundColor: iconBackgroundColors[2],
    description: 'Daily Volume',
    value: 2372139.74,
  },
  {
    iconName: 'sigma',
    iconColor: iconColors[0],
    iconBackgroundColor: iconBackgroundColors[0],
    description: 'Polled BSC',
    value: 1200.6,
  },
  {
    iconName: 'zhexiantu',
    iconColor: iconColors[1],
    iconBackgroundColor: iconBackgroundColors[1],
    description: 'Pooled Cake',
    value: 271.35,
  },
]);
</script>

<template>
  <div id='details'>
    <div id='header'>
      <div id='current-price'>
        983.47520
        <SymbolIcon color='#e0deeb' name='meiyuan' size='12px' />
      </div>
      <div id='other'>
        <span>0.2498488</span>
        <span id='day-gradient'>
          24H: +5.74
          <SymbolIcon name='rise-copy' size='6px' />
        </span>
      </div>
    </div>
    <div id='items'>
      <DetailsItem v-for='(item, index) in items' :key='index' :props='item' />
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../style.scss';

#details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $details_height;
  padding-top: 5%;

  #header {
    height: $details_header_height;

    #current-price {
      height: 66%;
      font-size: 16px;
    }

    #other {
      font-size: 6.5px;
      color: $gray;

      #day-gradient {
        float: right;
      }
    }
  }

  #items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: $details_items_height;
    overflow: scroll;
    padding-right: 3px;
  }
}
</style>
