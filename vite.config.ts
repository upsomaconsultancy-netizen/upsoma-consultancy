import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "./server";

// Fix for __dirname in ESM/Vite
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },

  build: {
    outDir: "dist/spa",
  },

  plugins: [
    react(),
    // Express middleware plugin – FIXED
    {
      name: "express-middleware",
      apply: "serve", // applies only in dev mode
      configureServer(viteServer) {
        const app = createServer();
        // IMPORTANT FIX: use function format, not object
        viteServer.middlewares.use((req, res, next) => {
          app(req, res, next);
        });
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));
