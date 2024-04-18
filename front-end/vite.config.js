import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [react()],
  define: {'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)}
})