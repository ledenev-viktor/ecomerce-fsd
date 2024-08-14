import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    define: {
      __HOME_PATH__:
        mode === 'production'
          ? JSON.stringify('/ecomerce-fsd')
          : JSON.stringify('/'),
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    resolve: {
      alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      port: 3000,
    },
    base: mode === 'production' ? '/ecomerce-fsd' : '/',
  };
});
