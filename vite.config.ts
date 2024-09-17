import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const env = loadEnv("all", process.cwd());
const apiBaseDomen = env.VITE_API_BASE_AMO_DOMEN;
const apiAuthorization = env.VITE_API_AUTHORIZATION;
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/amo-crm-api": {
        target: `https://${apiBaseDomen}.amocrm.ru/api/v4`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/amo-crm-api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Content-Type", "application/json");
            proxyReq.setHeader("Authorization", `Bearer ${apiAuthorization}`);
          });
        },
      },
    },
  },
});
