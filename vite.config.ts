import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": {}, // Ensures compatibility with environment variables
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",  // For browser-compatible crypto
    },
  },
});