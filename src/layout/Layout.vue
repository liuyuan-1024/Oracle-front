<!-- app整体布局 -->

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<script setup lang="ts">
import HeaderBar from '@/layout/header/HeaderBar.vue'
import NavBar from '@/layout/NavBar.vue'
import Main from '@/layout/Main.vue'
</script>

<template>
  <HeaderBar />
  <div id="app-bottom-box">
    <NavBar />
    <Main />
  </div>
</template>

<style scoped lang="scss">
#app-bottom-box {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
