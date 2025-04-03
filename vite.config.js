import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://localhost",
//         changeOrigin: true,
//       },
//     },
//   },
//   plugins: [cssInjectedByJsPlugin(), react(), basicSsl()],
//   build: {
//     rollupOptions: {
//       output: {
//         entryFileNames: "main-bundle.js",
//         assetFileNames: "assets/[name][extname]",
//       },
//     },
//   },
// });
