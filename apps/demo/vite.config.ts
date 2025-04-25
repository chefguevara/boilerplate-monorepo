
// import typescript from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  assetsInclude: ['**/*.svg', '**/*.png'],
  plugins: [
    react(),
    tsconfigPaths(),
    // libInjectCss(),
  ],
  server: {
    allowedHosts: [
      '.localhost',
    ],
  },
});
