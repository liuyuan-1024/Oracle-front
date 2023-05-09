<script setup lang="ts">
import Message from '@/components/message/Message.vue'
import Layout from '@/layout/Layout.vue'
import Login from '@/views/login/Login.vue'

// 判断用户是否已登录
function isLogin(): boolean {
  // 未实现，现在默认用户已登录
  return true
}
</script>

<template>
  <!-- 全局挂载naive-ui的message window.$message.info -->
  <n-message-provider>
    <n-dialog-provider>
      <Message />
    </n-dialog-provider>
  </n-message-provider>

  <Login v-if="!isLogin()" />
  <Layout v-else />
</template>
