import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      main: "./src/index.html",
      login: "./src/login.html",
    },
  },
});
