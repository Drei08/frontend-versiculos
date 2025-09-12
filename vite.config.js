import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  
  return {
    root: "./src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        main: "./src/index.html",
        login: "./src/login.html",
      },
    },
  };
});
