import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      vue(),
      electron([
        {
          entry: 'electron/main.ts'
        },
        {
          entry: 'electron/preload.ts',
          onstart(options) {
            // 预加载脚本生成完成后，通知渲染器进程重新加载页面,而不是重新启动整个Electron应用程序
            options.reload()
          }
        }
      ]),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    // 相对路径的代称 @
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      postcss: {
        plugins: [
          // 将css中的px自动转换为rem
          postCssPxToRem({
            rootValue: 56, // 1rem的大小 1120*800 划分为20份
            propList: ['*', '!border'], // 需要转换的属性，这里选择全部都进行转换
            exclude: '/src/layout/*'
          })
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/common.scss";`
        }
      }
    },
    server: {
      // 解决跨域问题
      proxy: {
        // 代理Java后端
        '/api': {
          target: env.VITE_REAL_URL, // 代理的地址(实际请求地址)
          changeOrigin: true, // 允许跨域
          secure: false, // 如果是不是https接口，可以不配置这个参数
          ws: true, //代理 web socked
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 代理Gitea后端
        '/gitea': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gitea/, '')
        },
        '/g2': {
          target: 'https://gw.alipayobjects.com/',
          changeOrigin: true,
          secure: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/g2/, '')
        }
      }
    }
  })
}
