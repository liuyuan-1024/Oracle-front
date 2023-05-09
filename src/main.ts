import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 自适应尺寸
import 'amfe-flexible/index.js'
// 引入重置样式和全局样式
import './styles/reset.scss'
import './styles/global.scss'
//引入全局组件 SymbolIcon
import SymbolIcon from '@/components/symbolIcon/SymbolIcon.vue'

createApp(App).use(router).component('SymbolIcon', SymbolIcon).mount('#app')
