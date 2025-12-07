import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 5001,
    allowedHosts: [
      "hackaton2-1-nwu6.onrender.com"
    ]
  },
  preview: {
    host: true,
    port: process.env.PORT || 5001,
    allowedHosts: [
      "hackaton2-1-nwu6.onrender.com"
    ]
  }
});
