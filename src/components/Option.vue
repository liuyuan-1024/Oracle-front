<script lang='ts'>
export default {
  name: 'Option',
};
</script>

<script lang='ts' setup>
import RouterUtils from '@/utils/base/RouterUtils';

const props = defineProps<{
  title: string
  // 跳转路由的name或path
  to?: string
}>();

function handClick() {
  window.$message.info(props.title, { showIcon: false, duration: 1000 });
  if (props.to) {
    RouterUtils.push(props.to);
  }
}
</script>

<template>
  <div id='menu-item' :data-title='props.title' class='clickable' @click.prevent='handClick'>
    <slot />
  </div>
</template>

<style lang='scss' scoped>
#menu-item {
  position: relative;

  &[data-title]:hover:after {
    content: attr(data-title);
    position: absolute;
    left: 100%;
    font-size: 7px;
    color: $gray;
    background-color: #2e2b43;
    border-radius: 3px;
    width: max-content;
    padding: 3px;
  }
}
</style>
