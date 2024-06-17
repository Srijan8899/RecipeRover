import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
  define: { 'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY) },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: group React and ReactDOM into a separate chunk
          vendor: ['react', 'react-dom'],
          // Add more groups as needed
          // ui: ['./src/components/ui'], 
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB
  },
})
