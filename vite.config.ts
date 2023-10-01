import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    preact({
      include: "**/*.tsx",
    }),
  ],
  server: { hmr: true, host: "localhost" },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: "src/index.ts",
      external: [
        "preact",
        "preact-custom-element",
        "preact/compat",
        "preact/hooks",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          preact: "preact",
          "preact-custom-element": "preactCustomElement",
          "preact/compat": "preactCompat",
          "preact/hooks": "preactHooks",
        },
      },
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index",
      fileName: "index",
      name: "CZTimePickerPlugin",
    },
  },
});
