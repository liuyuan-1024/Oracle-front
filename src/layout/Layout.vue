<!-- app整体布局 -->

<script lang='ts'>
export default {
  name: 'Layout',
};
</script>

<script lang='ts' setup>
import HeaderBar from '@/layout/header/HeaderBar.vue';
import NavBar from '@/layout/NavBar.vue';
import Main from '@/layout/Main.vue';
</script>

<template>
  <HeaderBar />
  <div id='app-bottom-box'>
    <NavBar />
    <Main />
  </div>
</template>

<style lang='scss' scoped>
#app-bottom-box {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
