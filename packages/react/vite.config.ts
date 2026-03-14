import { defineConfig } from "vite";
import path from "path";
import { createViteConfig } from "../../vite.shared.config";

export default defineConfig(
  createViteConfig({
    entry: {
      index: path.resolve(__dirname, "src/index.ts"),
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
