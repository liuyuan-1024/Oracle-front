<script lang='ts'>
export default {
  name: 'Main',
};
</script>

<script lang='ts' setup>
import { useRoute } from 'vue-router';
</script>

<template>
  <!-- 主内容展示区 -->
  <div id='main'>
    <router-view v-slot='{ Component }'>
      <keep-alive>
        <component :is='Component' v-if='useRoute().meta.keepAlive' />
      </keep-alive>
      <component :is='Component' v-if='!useRoute().meta.keepAlive' />
    </router-view>
  </div>
</template>

<style lang='scss' scoped>
#main {
  flex: 1;
  padding-top: $main-padding-top;
  padding-left: $main-padding-left;
}
</style>
