import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,       // Waxay ku qasbaysaa Vite inuu had iyo jeer isticmaalo port 5173
    strictPort: true, // Haddii port 5173 uu mashquul yahay, port kale isma beddelayo (error ayuu soo tuurayaa)
  }
})