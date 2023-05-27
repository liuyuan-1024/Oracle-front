<script lang='ts'>
export default {
  name: 'PersonalBar',
};
</script>

<script lang='ts' setup>
import { ref } from 'vue';
import Option from '@/components/Option.vue';
import LoginUtils from '@/api/LoginUtils';
import RouterUtils from '@/utils/base/RouterUtils';

const avatar = ref<string>('src/assets/images/avatar.jpg');

let userId = ref(0);

const options = [
  {
    label: '个人中心',
    key: '/mine' + '/:' + userId.value,
  },
  {
    label: '退出登录',
    key: 'logout',
  },
];

function select(key: string) {
  switch (key) {
    case 'logout':
      LoginUtils.logout();
      break;
    default:
      RouterUtils.push(key);
  }
}
</script>

<template>
  <Option id='personal' title='个人中心'>
    <n-dropdown :on-select='select' :options='options'>
      <img id='avatar' :src='avatar' />
    </n-dropdown>
  </Option>
</template>

<style lang='scss' scoped>
#personal {
  height: 100%;
}

#avatar {
  border-radius: 5px;
  aspect-ratio: 1/1; // img宽高一比一
}
</style>
