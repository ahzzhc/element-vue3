# v3element - Custom component libraries bu vue3

## 项目背景

抽离通用组件库，减少重复开发

## 项目目标

目标一：抽离通用逻辑  
目标二：npm上传与下载

## 项目结构

components:

- Button
- Collapse
- Icon
- Tooltip
- Dropdown
- Message
- Input
- Switch
- Select
- Form

## 项目流程

1. 初始化项目

   ```
   // postcss
   npm install postcss-nested postcss-each postcss-each-variables postcss-for postcss-color-mix

   // fortawesome
   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome

   // lodash
   npm install @types/lodash-es lodash-es

   // vitest + test
   npm install vitest @vue/test-utils

   // popper
   npm i @popperjs/core

   // vitepress
   npm add -D vitepress
   npm i @vitepress-demo-preview/plugin
   npm i @vitepress-demo-preview/component
   ```

2. 项目测试  
   npx vitest
3. 项目文档  
   npm run docs:dev
4. 项目发布  
   插件注入入口文件 -> vite配置/package配置 -> npm publish --access=public
5. 项目使用

   ```text
   npm i @houchenz/element_vue3 --save
   // 全局使用
   // 引入所有组件
   import VElement from '@houchenz/element_vue3'
   // 引入样式
   import '@houchenz/element_vue3/dist/style.css'
   import App from './App.vue'
   // 全局使用
   createApp(App).use(VElement).mount('#app')
   // 单个使用
   <template>
      <Button>我是 VkButton</Button>
   </template>

   <script>
   import { Button } from ' @houchenz/element_vue3'
   export default {
      components: { Button },
   }
   </script>
   ```
