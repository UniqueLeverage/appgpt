// Vite config for GitHub Pages
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/appgpt/", // matches your repo name
});
