import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Served from the domain root (crossfitsouthie.com). If you ever deploy to
  // https://<user>.github.io/<repo>/ instead, set base to '/<repo>/'.
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
