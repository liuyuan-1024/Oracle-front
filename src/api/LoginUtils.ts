// 关于 登录登出 的工具类

import requests from '@/api/requests';
import RouterUtils from '@/utils/base/RouterUtils';

export default class LoginUtils {
  /**
   * 注册
   * @param args 邮箱, 密码, 确认密码
   */
  static register(args: { email: string; password: string; rPassword?: string }) {
    requests
    .post('/user/register', {
      userAccount: args.email,
      userPassword: args.password,
      checkPassword: args.rPassword,
    })
    .then((res: any) => {
      window.$message.success('注册成功');
      RouterUtils.push('/');
    })
    .catch((error) => {
      window.$message.warning(error.message);
      // TODO: 开发完成后删除此行code
      RouterUtils.push('/');
    });
  }

  /**
   * 登录
   * @param args 邮箱, 密码
   */
  static login(args: { email: string; password: string }) {
    requests
    .post('/user/login', {
      userAccount: args.email,
      userPassword: args.password,
    })
    .then((res: any) => {
      window.$message.success('登录成功');
      RouterUtils.push('/');
    })
    .catch((error) => {
      window.$message.error(error.message);
      // TODO: 开发完成后删除此行code
      RouterUtils.push('/');
    });
  }

  /**
   * 登出
   */
  static logout() {
    requests
    .post('/user/logout')
    .then((res) => {
      window.$message.success('注销成功');
      RouterUtils.push('/login');
    })
    .catch((error) => {
      window.$message.error(error.message);
      // TODO: 开发完成后删除此行code
      RouterUtils.push('/login');
    });
  }
}
