<script lang='ts'>
export default {
  name: 'Home',
};
</script>

<script lang='ts' setup>
import TrendBar from '@/components/trend/Trend.vue';
import TradeBar from '@/components/trade/Trade.vue';
import SubjectBar from '@/components/subject/SubjectBar.vue';
</script>

<template>
  <div id='home'>
    <SubjectBar />
    <div id='general-map'>
      <TrendBar />
      <TradeBar />
    </div>
  </div>
</template>

<style lang='scss' scoped>
#home {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

#general-map {
  width: 60.5%;
}
</style>
