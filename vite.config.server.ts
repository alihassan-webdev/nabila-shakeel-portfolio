import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  build: {
    ssr: true,
    rollupOptions: {
      input: 'server/main.ts',
      output: {
        dir: 'dist/server',
        format: 'esm',
      },
    },
    outDir: 'dist/server',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
});
