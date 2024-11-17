import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      viteStaticCopy({
         targets: [
            {
               src: "src/assets/fonts/*", // Adjust this to the source folder where your fonts are
               dest: "assets/fonts", // This is where the fonts will go in the build folder
            },
            {
               src: "src/assets/icons/*", // Your local images folder (if any)
               dest: "assets/icons", // Destination in the build folder
            },
            {
               src: "src/assets/images/*", // Your local images folder (if any)
               dest: "assets/images", // Destination in the build folder
            },
         ],
      }),
   ],
   base: "/click-mate-ck/",
   css: {
      preprocessorOptions: {
         scss: {
            api: "modern-compiler", // or "modern"
         },
      },
   },
   build: {
      outDir: "build",
      rollupOptions: {
         output: {
            chunkFileNames: "assets/js/[name]-[hash].js", // JS chunk files in assets/js/
            entryFileNames: "assets/js/[name]-[hash].js", // Main JS file in assets/js/
            assetFileNames: "assets/css/[name]-[hash].[ext]", // CSS files in assets/css/
         },
      },
   },
});
