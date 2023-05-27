<script lang='ts'>
export default {
  name: 'SearchBar',
};
</script>

<script lang='ts' setup></script>

<template>
  <input id='search-bar' placeholder='Search' />
</template>

<style lang='scss' scoped>
#search-bar {
  outline: none;
  width: 70%;
  border-radius: 5px;
  background: url('@/assets/images/searching.svg') no-repeat;
  background-color: #322f4a;
  background-position: 1% 50%;
  padding-left: 22px;
  color: $white;
}
</style>
