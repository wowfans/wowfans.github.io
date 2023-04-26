import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWCore",
  description: "更新记录",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '更新记录', link: '/changlogs' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/swcore' }
    ]
  }
})
