import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite build uses NODE_ENV=production and vite preview uses build files
// console.log('NODE_ENV', process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './config',
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${
          process.env.NODE_ENV === 'production' ? 80 : 5000
        }`,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
