<!-- 切换组件，用于切换主题等 -->

<script lang='ts'>
export default {
  name: 'SwitchBar',
};
</script>

<script lang='ts' setup></script>

<template>
  <div id='switch-bar'>
    <SymbolIcon name='yitian' size='12px' />
  </div>
</template>

<style lang='scss' scoped>
#switch-bar {
  display: flex;
  align-items: center;
  width: 25%;
  padding: 0 1%;
  background-color: #362b55;
  border-radius: 5px;
  color: $gray;
}
</style>
