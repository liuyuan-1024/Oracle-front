<script lang="ts">
export default {
  name: 'HeaderBar'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderTitleBar from '@/layout/header/components/HeaderTitleBar.vue'
import LogoBar from '@/layout/header/components/LogoBar.vue'
import SearchBar from '@/layout/header/components/SearchBar.vue'
import SwitchBar from '@/layout/header/components/SwitchBar.vue'
import PersonalBar from '@/layout/header/components/PersonalBar.vue'

const options = [
  {
    label: 'PancakeSwap pair',
    value: 'song0'
  },
  {
    label: 'Hello World',
    value: 'song1'
  },
  {
    label: 'Word',
    value: 'song2'
  }
]

let value = ref(options[0].value)
</script>

<template>
  <HeaderTitleBar />
  <div id="header-bar">
    <LogoBar />
    <div id="title-bar">
      <n-select v-model:value="value" :options="options" />
    </div>
    <div id="search-switch">
      <SearchBar />
      <SwitchBar />
    </div>
    <PersonalBar />
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/ui/select.scss';

#header-bar {
  display: flex;
  justify-content: space-between;
  height: $header_bar_height;

  #title-bar {
    display: flex;
    align-items: center;
    width: 32%;
    transform: translateX(-9.5%);
  }

  #search-switch {
    display: flex;
    justify-content: space-around;
    width: 47.9%;
    transform: translateX(-5%);
  }
}
</style>
