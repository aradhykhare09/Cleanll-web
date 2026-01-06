import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Build optimizations for production
  esbuild: {
    drop: ['console', 'debugger'], // Remove console logs and debugger in production
  },
  build: {
    // Enable minification with esbuild (default, faster than terser)
    minify: 'esbuild',
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
        },
      },
    },
    // Enable source maps for debugging (optional)
    sourcemap: false,
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  // Server optimizations
  server: {
    // Enable compression during development
    middlewareMode: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
})
