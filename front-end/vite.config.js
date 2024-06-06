import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { visualizer } from 'rollup-plugin-visualizer'

// Load environment variables
dotenv.config()

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
    }),
  ],
  define: {
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor libraries into a separate chunk
          // Add more chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set the limit to 1000 kB or any size you consider appropriate
  },
})
