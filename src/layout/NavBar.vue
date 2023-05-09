<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<script setup lang="ts">
import Option from '@/components/Option.vue'
</script>

<template>
  <div id="nav-bar">
    <Option title="主页" to="Home" class="hvr-grow">
      <SymbolIcon name="zhuye1" color="#c6c1ee" />
    </Option>

    <div id="main-bar">
      <div id="up-bar">
        <Option title="本地搜索" class="hvr-grow">
          <SymbolIcon name="LOCALSEARCH" size="12px" />
        </Option>
        <Option title="火箭" class="hvr-grow">
          <SymbolIcon name="huojian" size="13px" />
        </Option>
        <Option title="堆栈" class="hvr-grow">
          <SymbolIcon name="stack" size="12px" />
        </Option>
        <Option title="保存" class="hvr-grow">
          <SymbolIcon name="save" size="11px" />
        </Option>
      </div>

      <div id="middle-bar">
        <Option title="闪电" class="hvr-grow">
          <SymbolIcon name="shandian" size="12px" />
        </Option>
        <Option title="过程" class="hvr-grow">
          <SymbolIcon name="process" size="12px" color="#9d99be" />
        </Option>
        <Option title="下载" class="hvr-grow">
          <SymbolIcon name="xiazai" size="12px" style="margin: -10px auto" />
        </Option>
        <Option title="链接" class="hvr-grow">
          <SymbolIcon name="lianjie" size="12px" color="#9d99be" />
        </Option>
      </div>
    </div>

    <div id="down-bar">
      <Option title="趋势" class="hvr-grow">
        <SymbolIcon name="zhexiantu" color="#c3bde7" />
      </Option>
      <Option title="钻石" class="hvr-grow">
        <SymbolIcon name="zuanshi" />
      </Option>
    </div>

    <Option title="世界" to="World" class="hvr-grow">
      <SymbolIcon name="faxian" />
    </Option>
  </div>
</template>

<style scoped lang="scss">
#nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  float: left;
  width: $nav_bar_width;

  #main-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    height: 50%;

    #up-bar,
    #middle-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 49%;
      padding: 10% 0;
      border-radius: 15px;
    }

    #up-bar {
      background-color: #432a49;
    }

    #middle-bar {
      background-color: #332855;
    }
  }

  #down-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 18%;
    padding-bottom: 80%;
  }
}

/* icon图标的悬浮动画：Grow */
.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
