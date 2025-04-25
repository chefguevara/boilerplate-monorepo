import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths({
      // projects: [path.resolve(__dirname, 'tsconfig.json')]
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'types',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
