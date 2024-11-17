import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/fonts/*', // Adjust this to the source folder where your fonts are
          dest: 'assets/fonts' // This is where the fonts will go in the build folder
        }
      ]
    })
  ],
  base: '/click-mate-ck/', 
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  build: {
    outDir: 'build', // This sets the output directory to "build"
  }
});
