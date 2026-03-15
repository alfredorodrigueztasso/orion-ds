import { defineConfig } from "vite";
import path from "path";
import { createViteConfig } from "../../vite.shared.config";

export default defineConfig(
  createViteConfig({
    entry: {
      index: path.resolve(__dirname, "src/index.ts"),
      client: path.resolve(__dirname, "src/client.ts"),
      "tokens/index": path.resolve(__dirname, "src/tokens/index.ts"),
      "sections/index": path.resolve(__dirname, "src/sections/index.ts"),
      "blocks/index": path.resolve(__dirname, "src/blocks/index.ts"),
      "templates/index": path.resolve(
        __dirname,
        "src/blocks/templates/index.ts",
      ),
    },
    name: "OrionReact",
    resolveAlias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }),
);
