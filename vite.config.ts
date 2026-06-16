import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://bhima86.github.io/ManavGraphics/ on GitHub Pages.
  // Change to '/' if you later move to a custom domain or root host.
  base: '/ManavGraphics/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
