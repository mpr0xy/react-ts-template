import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["Chrome 64", "iOS 11"],
      modernPolyfills: true,
    }),
    tsPaths(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            //'last 2 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true,
        }),
      ],
    },
  },
});
