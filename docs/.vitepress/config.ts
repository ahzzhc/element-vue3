import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue3 components',
  description: 'my own components defined by vue3',
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx()
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Collapse', link: '/components/collapse' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Message', link: '/components/message' },
          { text: 'Input', link: '/components/input' },
          { text: 'Select', link: '/components/select' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Form', link: '/components/form' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
