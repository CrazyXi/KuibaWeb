import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { ViteMinifyPlugin } from 'vite-plugin-minify'
export default defineConfig({
  assetsDir:'./assets',
  base:'./',
  plugins: [vue(), ViteMinifyPlugin({})],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
