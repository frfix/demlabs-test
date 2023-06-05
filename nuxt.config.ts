// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.scss"],
  vite: {
    plugins: [svgLoader()],
  },
});
