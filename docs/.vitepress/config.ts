import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWCore",
  description: "更新记录",
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/swcore' }
    ]
  }
})
