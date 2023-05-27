<script lang='ts'>
export default {
  name: 'Score',
};
</script>

<script lang='ts' setup></script>

<template>
  <div id='score'></div>
</template>

<style lang='scss' scoped>
@import '../style.scss';

#score {
  height: $score_height;
  background-color: green;
}
</style>
