import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath, URL } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue(),
    svgLoader({ 
      svgoConfig: {
        plugins:[
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ]
      } 
    }),
    isProd ? viteStaticCopy({
      targets: [
        {
          src: './src/assets/clouds.png',
          dest: 'assets/'
        }
      ]
    }) : () => {},
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_config.scss";`
      }
    }
  },
});
