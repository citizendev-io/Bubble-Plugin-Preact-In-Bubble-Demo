import preactBubblePlugin from "@citizendev/vite-plugin-preact-bubble";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    preactBubblePlugin({
      include: "**/*.tsx",
      bubble: {
        libraryName: "CDMentionsInput"
      }
    }),
  ],
});
