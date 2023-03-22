import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.tsx'),
      '@hooks': path.resolve(__dirname, './src/hooks/*'),
      '@assets': path.resolve(__dirname, './src/assets/*'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/*'),
      '@constants': path.resolve(__dirname, './src/constants/*'),
    }
  },
  plugins: [react()],
})
