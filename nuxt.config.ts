import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/index.scss"],
  /*
   ** Load SCSS into each component
   */
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/vars.scss";
            @import "@/assets/styles/mixins.scss";
          `,
        },
      },
    },
  },
});
