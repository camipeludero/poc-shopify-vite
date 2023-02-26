import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";
import chokidar from "chokidar";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "./src/shopify"),
    assetsDir: ".",
    emptyOutDir: false,
    cleanCssOptions: {
      level: 2,
    },
    rollupOptions: {
      input: {
        "assets/main": path.resolve(__dirname, "./src/main.js"),
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
      },
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./src/shopify/*"),
          dest: path.resolve(__dirname, "./dist/"),
          globOptions: {
            ignore: ["**/*.woff", "**/*.woff2"],
          },
        },
      ],
    }),
    {
      //Custom HMR plugin to reload after any change on the liquid files
      name: "custom-hmr",
      apply: "serve",
      configureServer(server) {
        // Watch the /shopify folder for changes
        const watcher = chokidar.watch("./src/shopify");

        // On file change, trigger Vite's HMR update
        watcher.on("change", (path) => {
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        });
      },
    },
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".js", ".vue", ".json"],
  },
});
