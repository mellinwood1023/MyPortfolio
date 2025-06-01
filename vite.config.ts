import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set a specific port for the development server
  },
  build: {
    rollupOptions: {
      external: ['/vite.svg'],
    },
  },
});
