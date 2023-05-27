<script lang='ts'>
export default {
  name: 'Login',
};
</script>

<script lang='ts' setup>
import { reactive, ref } from 'vue';
import { FormItemRule, FormRules } from 'naive-ui';
import SymbolIcon from '@/components/symbolIcon/SymbolIcon.vue';
import LoginUtils from '@/api/LoginUtils';

let isRegister = ref(false);
let title = ref('登录');
let registerBtnText = ref('赶快注册');

interface ModelType {
  email: string;
  password: string;
  rPassword?: string;
}

const modelRef = reactive<ModelType>({
  email: '',
  password: '',
  rPassword: undefined,
});

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('必须输入邮箱');
        } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
          return new Error('邮箱格式错误');
        }
        return true;
      },
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('必须输入密码');
        } else if (!/^\S*$/.test(value)) {
          return new Error('密码不能包含空格');
        } else if (value.length < 8) {
          return new Error('密码至少8位');
        }
        return true;
      },
      trigger: ['input', 'blur'],
    },
  ],
  rPassword: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('必须确认密码');
        } else if (modelRef.password !== value) {
          return new Error('两次密码不一致');
        }
        return true;
      },
      trigger: ['input', 'blur'],
    },
  ],
};

function login() {
  LoginUtils.login(modelRef);
}

function register(value: boolean) {
  // 依据当前是否是注册页面决定发送注册请求还是去往注册页面
  if (value) {
    // 当前页是注册页, 直接发送注册请求
    LoginUtils.register(modelRef);
  } else {
    // 当前页不是注册页, 修改标题等信息
    isRegister.value = true;
    title.value = '注册';
    registerBtnText.value = '确认注册';
  }
}
</script>

<template>
  <div id='login-wrap'>
    <div id='status'>{{ title }}</div>
    <n-form :model='modelRef' :rules='rules'>
      <n-form-item path='email'>
        <n-input v-model:value='modelRef.email' clearable placeholder='请输入邮箱' />
      </n-form-item>
      <n-form-item path='password'>
        <n-input v-model:value='modelRef.password' clearable placeholder='请输入密码' type='password' />
      </n-form-item>
      <n-form-item v-show='isRegister' path='rPassword'>
        <n-input v-model:value='modelRef.rPassword' clearable placeholder='请确认密码' type='password' />
      </n-form-item>
      <n-row :gutter='[0, 16]'>
        <n-col :span='0'>
          <div style='display: flex; justify-content: flex-end'>
            <n-button
              :disabled='isRegister && modelRef.password !== modelRef.rPassword'
              round
              type='primary'
              @click='register(isRegister)'
            >
              {{ registerBtnText }}
            </n-button>
          </div>
        </n-col>
        <n-col :span='20'>
          <div style='display: flex; justify-content: flex-end'>
            <n-button
              :disabled='isRegister || !modelRef.email || !modelRef.password'
              round
              type='primary'
              @click='login'
            >
              登录
            </n-button>
          </div>
        </n-col>
      </n-row>
      <n-row :gutter='[0, 16]'>
        <n-col :span='16'> 忘记密码?</n-col>
      </n-row>
      <n-row :gutter='[0, 16]'>
        <n-col :span='5' style=''>
          <span class='other'>其他登录方式 :</span>
        </n-col>
        <n-col :span='8'>
          <SymbolIcon name='github' />
          <SymbolIcon name='weixin' />
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>

<style scoped>
#login-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #29263d, #322f4a);
  border-radius: 10px;
  width: 50%;
  height: 50%;
}

#status {
  margin-top: 5%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.other {
  display: inline-block;
  top: 50%;
  transform: translateY(50%);
}
</style>
