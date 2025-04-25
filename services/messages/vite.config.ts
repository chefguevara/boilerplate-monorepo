// import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({

  plugins: [
    tsconfigPaths(),
    dts(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'messages',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'express',
      ],
    },
  },
});
