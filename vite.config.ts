import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@hooks': path.resolve(__dirname, './src/hooks/index.js'),
      '@assets': path.resolve(__dirname, './src/assets/*'),
    }
  },
  plugins: [react()],
})
