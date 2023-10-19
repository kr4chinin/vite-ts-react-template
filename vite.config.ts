import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
