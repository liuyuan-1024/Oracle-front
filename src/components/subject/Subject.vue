<script lang='ts'>
export default {
  name: 'Subject',
};
</script>

<script lang='ts' setup>
import { ref } from 'vue';
import Option from '@/components/Option.vue';

const subjectImg = ref<string>('src/assets/images/avatar.jpg');
</script>

<template>
  <div id='subject'>
    <div id='up-bar'>
      <img id='subject-img' :src='subjectImg' class='clickable' />
      <div id='subject-name' class='clickable'>
        <span> BSC/Cake </span>
      </div>
      <Option class='round-icon add' title='更多' to='Home'>
        <SymbolIcon name='jia' size='8px' />
      </Option>
    </div>
    <div id='down-bar'>
      <div id='link'>
        <Option class='round-icon enter' title='进入' to='Home'>
          <SymbolIcon name='jinru' size='8px' />
        </Option>
        <Option class='round-icon star' title='收藏' to='Home'>
          <SymbolIcon name='xingxing' size='8px' />
        </Option>
        <Option class='round-icon share' title='分享' to='Home'>
          <SymbolIcon name='share' size='8px' />
        </Option>
      </div>
      <button id='trade' class='clickable'>TRADE</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import './style.scss';

.round-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $purplish_gray;
  border-radius: $subject_radius;

  &:hover {
    background-color: $purplish_gray;
  }
}

#subject {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $subject_height;

  #up-bar {
    display: flex;
    justify-content: space-between;
    height: 48%;

    #subject-img {
      display: inline-block;
      width: 10%;
      border-radius: $subject_radius;
    }

    #subject-name {
      display: flex;
      align-items: center;
    }

    .add {
      width: 10%;
      height: 100%;
    }
  }

  #down-bar {
    display: flex;
    justify-content: space-between;
    height: 42%;

    #link {
      display: flex;
      justify-content: space-between;
      width: 30%;
      height: 100%;

      .enter,
      .star,
      .share {
        width: 30%;
        height: 100%;
      }
    }

    #trade {
      width: 18%;
      border: 2px solid #fa9083;
      border-radius: $subject_radius;
      background-color: transparent;
      color: $white;
    }
  }
}
</style>
