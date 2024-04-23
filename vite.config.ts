import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8002,
    proxy: {
      '/api': 'https://api.imooc.zcwytd.com'
    },
    cors: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
