import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ["**/*.test.jsx", "**/node_modules/**", "**/.git/**"],
  },
  server: {
    allowedHosts: ["frontend", "app"],
  },
});
