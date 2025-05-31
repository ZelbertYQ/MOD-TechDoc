// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'      // 全局样式


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  
  // 1. 注入自定义 Layout 插槽
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 在导航栏标题前添加 Logo（通过插槽）
      'nav-bar-title-before': () => h('img', {
        src: '/MOD-TechDoc/logo.gif',   // 替换为你的实际路径
        alt: 'Logo',
        class: 'custom-logo'
      }),
      
      // 可继续扩展其他插槽（如脚页、侧边栏等）
      // 'home-features-after': () => h(MyCustomComponent)
    })
  },

  // 2. 应用增强功能（可选）
  enhanceApp({ app, router, siteData }) {
    // 可注册全局组件、自定义指令等
    // app.component('MyComponent', MyComponent)
  }
}
