import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
})
