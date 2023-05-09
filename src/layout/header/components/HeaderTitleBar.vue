<!-- 自定义标题栏 -->

<script lang="ts">
export default {
  name: 'HeaderTitleBar'
}
</script>

<script setup lang="ts">
// 关闭窗口
function close() {
  window.ipcRenderer.send('close-window')
}

// 最小化窗口
function minimize() {
  window.ipcRenderer.send('minimize-window')
}

// 最大化/还原窗口
function maximize() {
  window.ipcRenderer.send('maximize-window')
}
</script>

<template>
  <div id="header-title-bar">
    <div id="traffic-lights">
      <a @click="close" class="light red"></a>
      <a @click="minimize" class="light yellow"></a>
      <a @click="maximize" class="light green"></a>
    </div>
    <div id="title">
      <span id="text">标题标题标题标题标题标题标题</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
#header-title-bar {
  height: $header_title_bar_height;

  #traffic-lights {
    display: inline-block;
    height: 100%;
    .light {
      position: relative;
      top: 45%;
      transform: translateY(-50%);
      display: inline-block;
      width: 11px;
      height: 11px;
      margin-right: 3.5px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .yellow {
      background-color: #ffbf2b;
    }
    .red {
      background-color: #fd6458;
    }
    .green {
      background-color: #24cc3d;
    }
  }

  #title {
    display: inline-block;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    #text {
      display: inline-block;
      font-size: 10px;
      position: relative;
      top: 30%;
      transform: translateY(-50%);
    }
  }
}
</style>
