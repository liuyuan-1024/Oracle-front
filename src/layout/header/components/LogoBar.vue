<script lang='ts'>
export default {
  name: 'LogoBar',
};
</script>

<script lang='ts' setup>
// const logo: string = 'src/assets/images/logo.svg'
</script>

<template>
  <div id='logo-bar'>
    <img alt='' src='@/assets/images/logo.svg' />
  </div>
</template>

<style lang='scss' scoped>
#logo-bar {
  cursor: pointer;
}
</style>
