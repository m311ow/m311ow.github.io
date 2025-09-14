// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://salvis.eu',
  integrations: [sitemap()],
  // get rid of Dart Sass deprecation warning
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})
